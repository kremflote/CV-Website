# Portfolio migration

Status: `portfolio.json` and screenshots have been added to all seven project
repositories, each on the branch `claude/portfolio-metadata` with a pull request.

| Project | Repository | Text on the site comes from |
|---|---|---|
| Anime Database | `kremflote/PGR208-Android-Programmering-Exam-2025` | README (Norwegian) |
| SportsWorld | `kremflote/DS3103-Webutvikling-Exam-2025` | README (Norwegian) |
| C Exam 2026 | `kremflote/PG3401-C-Exam-2026` | README (Norwegian) |
| Data Structures and Algorithms Exam 2026 | `kremflote/PG4200-Data-Structures-and-Algorithms-Exam-2026` | README (Norwegian) |
| Python Exam 2026 | `kremflote/PGR107-Python-Exam-2026` | README (Norwegian) |
| Matflote | `kremflote/Matflote` | `cv-frontend/src/data/localProjects.ts` (the README stays English) |
| Raspberry Pi Home Server | `kremflote/homeserver-config` | `cv-frontend/src/data/localProjects.ts` (the README stays English) |

Each `portfolio.json` sets the title, the card description, the category, the grade,
whether the project is featured, `legacyId` (keeps old `/showcase/<number>` links working),
the screenshots and which README sections to show. Screenshots are in `docs/portfolio/`
(Matflote: `docs/images/`, where they already were).

## Remaining steps (on GitHub, in this order)

1. Merge the `claude/portfolio-metadata` pull request in each of the seven repositories.
2. Add the topic `portfolio` to each of the seven repositories (gear icon next to **About**),
   plus technology topics for the chips, for example:
   - PGR208: `kotlin`, `jetpack-compose`, `retrofit`, `room`
   - DS3103: `react`, `typescript`, `dotnet`, `sqlite`
   - Matflote: `react`, `typescript`, `csharp`, `dotnet`
   - homeserver-config: `docker-compose`, `tailscale`, `cloudflare`, `nginx`
   - PG3401: `c`, `linux`, `posix-threads`
   - PG4200: `java`
   - PGR107: `python`, `numpy`, `pandas`, `matplotlib`
3. Merge the CV-Website pull request. Its build fetches the projects.
4. Run `npm run portfolio` in `cv-frontend/` and commit `src/data/generated/portfolio.json`,
   so later builds have a fallback if GitHub cannot be reached.

The card description comes from `portfolio.json`, so the GitHub **About** description
can stay as it is. Once the steps are done, the screenshots in `cv-frontend/public/images/`
used only by these projects can be deleted.
