# mariuskristensen.no

Digital CV for Marius Kristensen: experience timeline, skills, projects and contact.
Hosted on Cloudflare Pages, built from this repository.

## Development

The site lives in `cv-frontend/` (Vite, React 19, TypeScript, Tailwind CSS v4, React Router).

```bash
cd cv-frontend
npm install
npm run dev        # local dev server
npm run build      # fetches the portfolio from GitHub, then type-checks and builds to dist/
npm run lint
```

- Colours and type are theme tokens in `src/index.css` (`Kalk` light and `Skifer` dark).
  Components use them as Tailwind classes such as `bg-surface`, `text-muted`, `border-line`.
  Class strings live in `src/styles/styles.ts`.
- CV content (timeline periods, skills) is in `src/data/staticCvData.ts`.
- The design decisions are recorded in `docs/redesign-handover.md`.

## Portfolio: projects come from GitHub

The project list is generated from my **public** GitHub repositories that have the
topic **`portfolio`**. Private repositories never appear.

**To add a project**

1. Make sure the repository is public.
2. On the repository page, open the gear icon next to **About**:
   - write a one-line **Description** (shown on the project card), and
   - add the topic `portfolio`. Other topics (for example `react`, `kotlin`) become technology chips.
3. Rebuild the site: in this repository, go to **Actions → Daily site rebuild → Run workflow**
   (or wait for the daily run).

**To remove a project**, delete the `portfolio` topic or make the repository private, then rebuild.

**Project page content** comes from the repository:

- `README.md`: each `##` section becomes a section on the project page. Text before the
  first `##` becomes "Oversikt" unless the README has its own `## Oversikt`.
  Setup-style sections (Installation, Usage, License, …) are left out.
  A `Karakter-A` shields.io badge sets the grade.
- `portfolio.json` (optional, in the repository root):

  ```json
  {
    "title": "Anime Database",
    "description": "Overrides the GitHub description",
    "category": "kristiania",
    "grade": "A",
    "featured": true,
    "thumbnail": "docs/portfolio/thumbnail.jpg",
    "screenshots": ["docs/portfolio/1.jpg", "docs/portfolio/2.jpg"],
    "sections": ["Oversikt", "Funksjoner", "Karakter"],
    "legacyId": 1
  }
  ```

  `category` is `personal`, `kristiania` or `work`. `sections` picks and orders the README
  sections to show. `featured` puts the project on the home page (three are shown).
  `legacyId` keeps old `/showcase/<number>` links working.

**How it works**

- `cv-frontend/scripts/fetch-portfolio.mjs` runs before every build (`npm run portfolio` runs it on
  its own). It makes one GitHub API request to list the repositories, and reads each README and
  `portfolio.json` from raw.githubusercontent.com. It writes `src/data/generated/portfolio.json`.
- If GitHub cannot be reached or the rate limit is hit, the build keeps the committed
  `portfolio.json`, so the site never loses its projects. Commit a fresh copy now and then:
  `npm run portfolio` locally, then commit `src/data/generated/portfolio.json`.
- The API allows 60 unauthenticated requests per hour per IP address. An optional
  `GITHUB_TOKEN` build variable (a fine-grained token with public repository read-only
  access and no permissions) raises that. Never commit a token.
- `src/data/localProjects.ts` holds project text that has not been moved into its repository
  yet. A local entry only shows when its repository is public and tagged, and its text wins
  over the README until the entry is deleted. See `docs/portfolio-migration.md`.

## Deployment (Cloudflare Pages)

Cloudflare Pages builds on every push. Settings: root directory `cv-frontend`,
build command `npm run build`, output directory `dist`.
`public/_redirects` serves the single-page app and redirects `/kontakt` to `/#kontakt`.

**Daily rebuild.** Pages only rebuilds on push, so `.github/workflows/rebuild-site.yml` calls a
Cloudflare deploy hook every day at 04:17 UTC and can be run by hand from the Actions tab.
It needs the repository secret `CLOUDFLARE_DEPLOY_HOOK_URL`:

1. Cloudflare dashboard → **Workers & Pages** → the project → **Settings → Builds → Add deploy hook**.
   Name it `daily-portfolio-rebuild` and choose the production branch (`main`). Copy the URL.
2. GitHub → this repository → **Settings → Secrets and variables → Actions → New repository secret**.
   Name: `CLOUDFLARE_DEPLOY_HOOK_URL`, value: the URL. Treat it as a secret: anyone with it can
   trigger builds. If it leaks, delete the hook in Cloudflare and create a new one.

Notes, checked against the Cloudflare and GitHub documentation in November 2026:

- The Cloudflare Pages Free plan allows 500 builds per month and one build at a time;
  a daily rebuild uses about 31.
- GitHub runs scheduled workflows only from the default branch, so the daily rebuild starts once
  this workflow is on `main`.
- **In a public repository, GitHub switches scheduled workflows off after 60 days without
  repository activity.** If the daily rebuild stops, open **Actions → Daily site rebuild** and
  select **Enable workflow**.
- Scheduled runs can be delayed or skipped when GitHub is busy; the manual run is always available.
