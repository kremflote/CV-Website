#!/usr/bin/env node
/**
 * Generates src/data/generated/portfolio.json from the owner's public GitHub
 * repositories that carry the topic "portfolio".
 *
 * - One GitHub API request lists the repositories (topics, description,
 *   language, last push). README.md and the optional portfolio.json in each
 *   repository are read from raw.githubusercontent.com, which does not count
 *   against the API rate limit.
 * - Private repositories are never included: the listing only returns public
 *   repositories, and each one is checked again for visibility "public".
 * - If the listing fails (network, rate limit), the existing generated file is
 *   kept so a build never ships an empty portfolio. Set PORTFOLIO_STRICT=1 to
 *   fail instead.
 * - GITHUB_TOKEN is optional and only raises the API rate limit.
 *
 * Usage: node scripts/fetch-portfolio.mjs   (runs automatically before `npm run build`)
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OWNER = process.env.PORTFOLIO_OWNER ?? "kremflote";
const TOPIC = "portfolio";
const API = process.env.PORTFOLIO_API_BASE ?? "https://api.github.com";
const RAW = process.env.PORTFOLIO_RAW_BASE ?? "https://raw.githubusercontent.com";
const STRICT = process.env.PORTFOLIO_STRICT === "1";
const TOKEN = process.env.GITHUB_TOKEN?.trim();

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outFile = resolve(root, process.env.PORTFOLIO_OUT ?? "src/data/generated/portfolio.json");

const CATEGORIES = new Set(["personal", "kristiania", "work"]);

/** README sections that are for developers rather than for the CV. */
const SKIPPED_SECTIONS =
  /^(installation|install|setup|getting started|running|run locally|how to run|usage|requirements|prerequisites|development|build|building|deploy|deployment|license|lisens|contributing|images|screenshots|skjermbilder|bilder|project structure|prosjektstruktur|table of contents|innhold)$/i;

/** Display names for common topic slugs; others are title-cased. */
const TOPIC_NAMES = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  csharp: "C#",
  "c-sharp": "C#",
  dotnet: ".NET",
  "aspnet-core": "ASP.NET Core",
  "asp-net-core": "ASP.NET Core",
  kotlin: "Kotlin",
  "jetpack-compose": "Jetpack Compose",
  android: "Android",
  java: "Java",
  python: "Python",
  c: "C",
  sql: "SQL",
  sqlite: "SQLite",
  postgresql: "PostgreSQL",
  docker: "Docker",
  "docker-compose": "Docker Compose",
  unity: "Unity",
  godot: "Godot",
  vite: "Vite",
  tailwindcss: "Tailwind CSS",
  nodejs: "Node.js",
  numpy: "NumPy",
  pandas: "Pandas",
  matplotlib: "Matplotlib",
  linux: "Linux",
  nginx: "Nginx",
  cloudflare: "Cloudflare",
  tailscale: "Tailscale",
  "raspberry-pi": "Raspberry Pi",
  retrofit: "Retrofit",
  room: "Room",
  "entity-framework-core": "EF Core",
  "posix-threads": "POSIX threads",
};

const log = (message) => console.log(`[portfolio] ${message}`);

const prettifyTopic = (topic) =>
  TOPIC_NAMES[topic] ??
  topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const apiHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "cv-website-portfolio-build",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

const fetchJson = async (url) => {
  const response = await fetch(url, { headers: apiHeaders });
  if (!response.ok) {
    const remaining = response.headers.get("x-ratelimit-remaining");
    throw new Error(
      `${response.status} ${response.statusText} for ${url}` +
        (remaining === "0" ? " (rate limit reached; set GITHUB_TOKEN)" : ""),
    );
  }
  return { data: await response.json(), link: response.headers.get("link") };
};

/** Fetches a file from the repository's default branch; null if it does not exist. */
const fetchRaw = async (repo, path) => {
  const url = `${RAW}/${OWNER}/${repo.name}/${repo.default_branch}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
  const response = await fetch(url, { headers: { "User-Agent": apiHeaders["User-Agent"] } });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`${response.status} for ${url}`);
  return response.text();
};

const listRepositories = async () => {
  const repos = [];
  let url = `${API}/users/${OWNER}/repos?type=owner&per_page=100&sort=pushed`;
  while (url) {
    const { data, link } = await fetchJson(url);
    repos.push(...data);
    url = link?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;
  }
  return repos;
};

/* ---------- README to detail sections ---------- */

const rawUrl = (repo, path) =>
  `${RAW}/${OWNER}/${repo.name}/${repo.default_branch}/${path.replace(/^\.?\//, "")}`;
const blobUrl = (repo, path) =>
  `https://github.com/${OWNER}/${repo.name}/blob/${repo.default_branch}/${path.replace(/^\.?\//, "")}`;

const cleanInline = (text, repo) =>
  text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/<[^>]+>/g, "") // inline HTML
    .replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, label, href) => {
      if (href.startsWith("#")) return label;
      const absolute = /^(https?:|mailto:)/.test(href) ? href : blobUrl(repo, href);
      return `[${label}](${absolute})`;
    })
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/(^|[\s(])[*_]([^*_]+)[*_](?=[\s).,:;!?]|$)/g, "$1$2")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Splits a README into sections at "##" headings. Text before the first
 * section becomes "Oversikt"; the "#" title, images, badges, HTML, code
 * blocks and tables are left out. A section whose content is only list items
 * is marked as a list.
 */
export const parseReadme = (markdown, repo, options = {}) => {
  const skip = options.skipSections ?? SKIPPED_SECTIONS;
  const lines = markdown.replace(/\r\n/g, "\n").replace(/<!--[\s\S]*?-->/g, "").split("\n");
  const sections = [];
  let current = { title: "Oversikt", blocks: [] };
  let paragraph = [];
  let inCode = false;
  // Text after a "---" rule is left out until the next heading of any level:
  // that is usually a footer such as "Avsluttende eksamen, 2025".
  let afterRule = false;

  const flushParagraph = () => {
    const text = cleanInline(paragraph.join(" "), repo);
    if (text) current.blocks.push({ type: "p", text });
    paragraph = [];
  };
  const flushSection = () => {
    flushParagraph();
    sections.push(current);
  };

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      flushParagraph();
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const heading = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (heading) {
      const level = heading[1].length;
      const title = cleanInline(heading[2], repo);
      if (level === 1) {
        flushParagraph();
        continue;
      }
      if (level === 2) {
        flushSection();
        current = { title, blocks: [] };
        afterRule = false;
        continue;
      }
      // Deeper headings become a short paragraph inside the current section.
      flushParagraph();
      afterRule = false;
      if (title) current.blocks.push({ type: "p", text: title, heading: true });
      continue;
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      flushParagraph();
      afterRule = true;
      continue;
    }
    if (afterRule) continue;

    const item = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (item) {
      flushParagraph();
      const text = cleanInline(item[1], repo);
      if (text) current.blocks.push({ type: "li", text });
      continue;
    }

    if (!line.trim() || /^\s*\|/.test(line) || /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line) || /^\s*>/.test(line) && !line.replace(/^\s*>\s*/, "").trim()) {
      flushParagraph();
      continue;
    }
    paragraph.push(line.replace(/^\s*>\s*/, ""));
  }
  flushSection();

  // The text before the first "##" is usually course details; leave it out
  // when the README has its own "Oversikt" section.
  const hasOverview = sections.slice(1).some((section) => /^oversikt$/i.test(section.title));
  const kept = (hasOverview ? sections.slice(1) : sections).filter(
    (section) => section.blocks.length > 0 && !skip.test(section.title),
  );

  // Merge sections that share a title.
  const merged = [];
  for (const section of kept) {
    const existing = merged.find((other) => other.title.toLowerCase() === section.title.toLowerCase());
    if (existing) existing.blocks.push(...section.blocks);
    else merged.push({ title: section.title, blocks: [...section.blocks] });
  }

  return merged
    .map((section) => {
      // Drop sub-headings with nothing after them (for example above removed images).
      const blocks = section.blocks.filter(
        (block, index, all) => !(block.heading && (!all[index + 1] || all[index + 1].heading)),
      );
      const allItems = blocks.length > 0 && blocks.every((block) => block.type === "li");
      const mixed = blocks.some((block) => block.type === "li" || block.heading);
      return {
        title: section.title,
        body: blocks.map((block) => block.text),
        ...(allItems ? { list: true } : {}),
        // Mixed content: marks each entry as paragraph, bullet point or sub-heading.
        ...(!allItems && mixed
          ? { kinds: blocks.map((block) => (block.heading ? "h" : block.type)) }
          : {}),
      };
    })
    .filter((section) => section.body.length > 0);
};

/* ---------- portfolio.json ---------- */

const asString = (value) => (typeof value === "string" && value.trim() ? value.trim() : undefined);
const asStringArray = (value) =>
  Array.isArray(value) ? value.map(asString).filter(Boolean) : undefined;

/** A grade badge such as img.shields.io/badge/Karakter-A-green in the README. */
export const readGradeBadge = (markdown) =>
  markdown?.match(/img\.shields\.io\/badge\/Karakter-([A-F])-/i)?.[1].toUpperCase();

export const readPortfolioConfig = (text, repoName) => {
  if (!text) return {};
  let config;
  try {
    config = JSON.parse(text);
  } catch (error) {
    log(`${repoName}: portfolio.json is not valid JSON (${error.message}); ignoring it`);
    return {};
  }
  if (!config || typeof config !== "object") return {};

  const category = asString(config.category)?.toLowerCase();
  const grade = asString(config.grade)?.toUpperCase();
  return {
    title: asString(config.title),
    description: asString(config.description),
    category: category && CATEGORIES.has(category) ? category : undefined,
    grade: grade && /^[A-F]$/.test(grade) ? grade : undefined,
    featured: config.featured === true ? true : undefined,
    legacyId: Number.isInteger(config.legacyId) ? config.legacyId : undefined,
    thumbnail: asString(config.thumbnail),
    screenshots: asStringArray(config.screenshots),
    sections: asStringArray(config.sections),
  };
};

/* ---------- main ---------- */

const buildProject = async (repo) => {
  const [readme, configText] = await Promise.all([
    fetchRaw(repo, "README.md")
      .then((text) => text ?? fetchRaw(repo, "readme.md"))
      .catch((error) => {
        log(`${repo.name}: could not read README (${error.message})`);
        return null;
      }),
    fetchRaw(repo, "portfolio.json").catch((error) => {
      log(`${repo.name}: could not read portfolio.json (${error.message})`);
      return null;
    }),
  ]);
  const config = readPortfolioConfig(configText, repo.name);

  let details = readme ? parseReadme(readme, repo) : [];
  if (config.sections) {
    const wanted = config.sections.map((title) => title.toLowerCase());
    details = details
      .filter((section) => wanted.includes(section.title.toLowerCase()))
      .sort((a, b) => wanted.indexOf(a.title.toLowerCase()) - wanted.indexOf(b.title.toLowerCase()));
  }

  const screenshots = (config.screenshots ?? []).map((path) =>
    /^https?:/.test(path) ? path : rawUrl(repo, path),
  );
  const thumbnail = config.thumbnail
    ? /^https?:/.test(config.thumbnail)
      ? config.thumbnail
      : rawUrl(repo, config.thumbnail)
    : screenshots[0];

  return {
    repo: repo.name,
    ...(config.legacyId !== undefined ? { legacyId: config.legacyId } : {}),
    title: config.title ?? repo.name.replace(/[-_]+/g, " "),
    description: config.description ?? repo.description ?? "",
    ...(config.category ? { category: config.category } : {}),
    ...((config.grade ?? readGradeBadge(readme)) ? { grade: config.grade ?? readGradeBadge(readme) } : {}),
    ...(config.featured ? { featured: true } : {}),
    tech: (repo.topics ?? []).filter((topic) => topic !== TOPIC).map(prettifyTopic),
    language: repo.language ?? null,
    updatedAt: repo.pushed_at,
    url: repo.html_url,
    ...(repo.homepage ? { homepage: repo.homepage } : {}),
    ...(thumbnail ? { thumbnail } : {}),
    images: screenshots,
    details,
  };
};

const main = async () => {
  log(`listing public repositories of ${OWNER}${TOKEN ? " (with GITHUB_TOKEN)" : ""}`);
  const repos = await listRepositories();
  const tagged = repos.filter(
    (repo) =>
      repo.visibility === "public" &&
      repo.private === false &&
      !repo.fork &&
      (repo.topics ?? []).includes(TOPIC),
  );
  log(`${repos.length} public repositories, ${tagged.length} tagged "${TOPIC}": ${tagged.map((repo) => repo.name).join(", ") || "none"}`);

  const projects = await Promise.all(tagged.map(buildProject));
  const output = {
    note: "Generated by scripts/fetch-portfolio.mjs from GitHub. Do not edit by hand.",
    owner: OWNER,
    generatedAt: new Date().toISOString(),
    projects,
  };
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, `${JSON.stringify(output, null, 2)}\n`);
  log(`wrote ${projects.length} projects to ${outFile.replace(`${root}/`, "")}`);
};

const isEntryPoint = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isEntryPoint) {
  main().catch(async (error) => {
    const existing = await readFile(outFile, "utf8").catch(() => null);
    if (STRICT || !existing) {
      console.error(`[portfolio] failed: ${error.message}`);
      if (!existing) console.error("[portfolio] no previously generated file to fall back to");
      process.exit(1);
    }
    console.warn(`[portfolio] warning: ${error.message}`);
    console.warn("[portfolio] keeping the previously generated portfolio.json");
  });
}
