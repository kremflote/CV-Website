import type { IShowcase, IShowcaseSection } from "../interfaces/IShowcase";
import generated from "./generated/portfolio.json";
import { localProjects, type LocalProject } from "./localProjects";

/** One project as written by scripts/fetch-portfolio.mjs. */
export interface GeneratedProject {
  repo: string;
  legacyId?: number;
  title: string;
  description: string;
  category?: string;
  grade?: string;
  featured?: boolean;
  tech: string[];
  language: string | null;
  updatedAt: string;
  url: string;
  homepage?: string;
  thumbnail?: string;
  images: string[];
  details: IShowcaseSection[];
}

const fromGenerated = (project: GeneratedProject): IShowcase => ({
  id: project.legacyId ?? project.repo,
  slug: project.repo,
  title: project.title,
  description: project.description,
  details: project.details,
  image: project.images[0] ?? project.thumbnail ?? "",
  image_Thumbnail: project.thumbnail ?? project.images[0] ?? "",
  images: project.images,
  gitHub_Link: project.url,
  category: project.category,
  tech: project.tech,
  language: project.language,
  grade: project.grade,
  updatedAt: project.updatedAt,
  featured: project.featured,
});

/**
 * GitHub decides which projects exist (public + topic "portfolio"). While a
 * project still has a local entry, its text, images, category, grade and id
 * come from there; GitHub supplies the description when it has one, the
 * topics, language, last update and link.
 */
const mergeWithLocal = (project: GeneratedProject, local: LocalProject): IShowcase => {
  const fromGitHub = fromGenerated(project);
  return {
    ...fromGitHub,
    ...local,
    slug: project.repo,
    description: project.description || local.description,
    tech: project.tech.length > 0 ? project.tech : local.tech,
    language: project.language,
    grade: project.grade ?? local.grade,
    updatedAt: project.updatedAt,
    gitHub_Link: project.url,
    featured: local.featured ?? project.featured,
  };
};

export const buildPortfolio = (
  generatedProjects: GeneratedProject[],
  local: LocalProject[],
): IShowcase[] => {
  const localByRepo = new Map(
    local.filter((entry) => entry.repo).map((entry) => [entry.repo!.toLowerCase(), entry]),
  );

  const fromRepos = generatedProjects.map((project) => {
    const overlay = localByRepo.get(project.repo.toLowerCase());
    return overlay ? mergeWithLocal(project, overlay) : fromGenerated(project);
  });
  // Local entries without a repository are always shown.
  const withoutRepo = local.filter((entry) => !entry.repo);

  return [...fromRepos, ...withoutRepo];
};

export const portfolio = buildPortfolio(
  (generated as { projects: GeneratedProject[] }).projects,
  localProjects,
);

export const portfolioGeneratedAt = (generated as { generatedAt: string | null }).generatedAt;
