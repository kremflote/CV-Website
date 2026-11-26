# Portfolio migration plan

Draft for review. **Nothing here has been committed to the other repositories.**
After you approve a repository's changes, they can be committed there and the
matching entry deleted from `cv-frontend/src/data/localProjects.ts`.

Until a repository has the topic `portfolio`, its project does not appear on the
site at all (the portfolio is opt-in). The local entry only controls the text and
images while it exists.

## What to do on GitHub for each repository (you, in the browser)

On the repository page, use the gear icon next to **About**:

1. **Description**: the one-line text shown on the project card.
2. **Topics**: add `portfolio`, plus the technology topics listed below (they become the chips).

Then run the **Daily site rebuild** workflow by hand from the Actions tab of this repository,
or wait for the daily run.

## Per repository

Each `portfolio.json` goes in the repository root. Screenshot paths are relative
to the repository; copy the listed files from `cv-frontend/public/images/` in this
repository to `docs/portfolio/` in that repository.


### Anime Database → `kremflote/PGR208-Android-Programmering-Exam-2025`

- **Description:** Android-applikasjon utviklet i Kotlin hvor brukeren kan utforske, søke etter og organisere anime-serier ved hjelp av Jikan API.
- **Topics:** `portfolio`, `kotlin`, `jetpack-compose`, `retrofit`, `room`
- **Screenshots to copy:** `animedatabase-1.jpg`, `animedatabase-2.jpg`, `animedatabase-3.jpg`, `animedatabase-4.jpg`, `animedatabasethumbnail.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Teknologi", "Arkitektur", "Karakter".

```json
{
  "title": "Anime Database",
  "category": "kristiania",
  "legacyId": 1,
  "featured": true,
  "grade": "A",
  "screenshots": [
    "docs/portfolio/animedatabase-1.jpg",
    "docs/portfolio/animedatabase-2.jpg",
    "docs/portfolio/animedatabase-3.jpg",
    "docs/portfolio/animedatabase-4.jpg"
  ],
  "thumbnail": "docs/portfolio/animedatabasethumbnail.jpg",
  "sections": [
    "Oversikt",
    "Teknologi",
    "Arkitektur",
    "Karakter"
  ]
}
```

### SportsWorld → `kremflote/DS3103-Webutvikling-Exam-2025`

- **Description:** Full-stack prosjekt med frontend og backend hvor brukeren kan utføre CRUD-operasjoner gjennom et brukervennlig grensesnitt.
- **Topics:** `portfolio`, `react`, `typescript`, `dotnet`, `sqlite`
- **Screenshots to copy:** `sportsworld-2.jpg`, `sportsworld-3.jpg`, `sportsworld-4.jpg`, `sportsworld-5.jpg`, `sportsworldthumbnail.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Arkitektur", "Karakter".

```json
{
  "title": "SportsWorld",
  "category": "kristiania",
  "legacyId": 2,
  "featured": true,
  "grade": "A",
  "screenshots": [
    "docs/portfolio/sportsworld-2.jpg",
    "docs/portfolio/sportsworld-3.jpg",
    "docs/portfolio/sportsworld-4.jpg",
    "docs/portfolio/sportsworld-5.jpg"
  ],
  "thumbnail": "docs/portfolio/sportsworldthumbnail.jpg",
  "sections": [
    "Oversikt",
    "Arkitektur",
    "Karakter"
  ]
}
```

### Matflote → `kremflote/Matflote`

- **Description:** Personlig verktøy for middagsplanlegging, kokebok, handleliste og lokal matdata.
- **Topics:** `portfolio`, `react`, `typescript`, `csharp`, `dotnet`
- **Screenshots to copy:** `cookbooklight.png`, `matflotethumbnail.jpg`, `mobilecookbooklight.png`, `mobileplannerlight.png`, `nutritionlight.png`, `plannerlight.png`, `priceslight.png`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Funksjoner".

```json
{
  "title": "Matflote",
  "category": "personal",
  "legacyId": 8,
  "featured": true,
  "screenshots": [
    "docs/portfolio/cookbooklight.png",
    "docs/portfolio/mobilecookbooklight.png",
    "docs/portfolio/mobileplannerlight.png",
    "docs/portfolio/nutritionlight.png",
    "docs/portfolio/plannerlight.png",
    "docs/portfolio/priceslight.png"
  ],
  "thumbnail": "docs/portfolio/matflotethumbnail.jpg",
  "sections": [
    "Oversikt",
    "Funksjoner"
  ]
}
```

### Raspberry Pi Home Server → `kremflote/homeserver-config`

- **Description:** Dokumentasjon og konfigurasjon for min personlige Raspberry Pi-hjemmeserver, bygget for og med Docker Compose, Tailscale, Cloudflare og Nginx Proxy Manager.
- **Topics:** `portfolio`, `docker-compose`, `tailscale`, `cloudflare`, `nginx`
- **Screenshots to copy:** `piserver.jpg`, `raspberrythumbnail.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Tjenester", "Notater".

```json
{
  "title": "Raspberry Pi Home Server",
  "category": "personal",
  "legacyId": 4,
  "screenshots": [
    "docs/portfolio/piserver.jpg"
  ],
  "thumbnail": "docs/portfolio/raspberrythumbnail.jpg",
  "sections": [
    "Oversikt",
    "Tjenester",
    "Notater"
  ]
}
```

### C Exam 2026 → `kremflote/PG3401-C-Exam-2026`

- **Description:** Eksamensbesvarelse i C utviklet og testet i Debian 10 Linux på VMware Pro.
- **Topics:** `portfolio`, `c`, `linux`, `posix-threads`
- **Screenshots to copy:** `pg3401-c-exam-2026-1.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Teknisk Miljø", "Karakter".

```json
{
  "title": "C Exam 2026",
  "category": "kristiania",
  "legacyId": 5,
  "grade": "B",
  "screenshots": [
    "docs/portfolio/pg3401-c-exam-2026-1.jpg"
  ],
  "sections": [
    "Oversikt",
    "Teknisk Miljø",
    "Karakter"
  ]
}
```

### Data Structures and Algorithms Exam 2026 → `kremflote/PG4200-Data-Structures-and-Algorithms-Exam-2026`

- **Description:** Gruppeeksamen for PG4200-H med implementering og analyse av fire klassiske sorteringsalgoritmer.
- **Topics:** `portfolio`, 
- **Screenshots to copy:** `pg4200-data-structures-and-algorithms-exam-2026-1.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Problemoversikt", "Dataset", "Karakter".

```json
{
  "title": "Data Structures and Algorithms Exam 2026",
  "category": "kristiania",
  "legacyId": 6,
  "grade": "A",
  "screenshots": [
    "docs/portfolio/pg4200-data-structures-and-algorithms-exam-2026-1.jpg"
  ],
  "sections": [
    "Oversikt",
    "Problemoversikt",
    "Dataset",
    "Karakter"
  ]
}
```

### Python Exam 2026 → `kremflote/PGR107-Python-Exam-2026`

- **Description:** Eksamensprosjekt i Python med fem oppgaver innen programmering, numeriske beregninger og dataanalyse.
- **Topics:** `portfolio`, `python`, `numpy`, `pandas`, `matplotlib`
- **Screenshots to copy:** `pgr107-python-exam-2026-1.jpg`, `pgr107-python-exam-2026-2.jpg`, `pgr107-python-exam-2026-3.jpg`, `pgr107-python-exam-2026-4.jpg`
- **README:** the site shows the sections listed in `sections`. Check that the README has them, in Norwegian, as `##` headings: "Oversikt", "Problemoversikt", "Hypoteser", "Konklusjon", "Karakter".

```json
{
  "title": "Python Exam 2026",
  "category": "kristiania",
  "legacyId": 7,
  "grade": "A",
  "screenshots": [
    "docs/portfolio/pgr107-python-exam-2026-1.jpg",
    "docs/portfolio/pgr107-python-exam-2026-2.jpg",
    "docs/portfolio/pgr107-python-exam-2026-3.jpg",
    "docs/portfolio/pgr107-python-exam-2026-4.jpg"
  ],
  "sections": [
    "Oversikt",
    "Problemoversikt",
    "Hypoteser",
    "Konklusjon",
    "Karakter"
  ]
}
```

## Notes per repository

- **Matflote** and **homeserver-config**: the README is an English developer document
  (setup, Docker, backup). The site text today is Norwegian and lives only in this
  repository. Either add short Norwegian `## Oversikt` and `## Funksjoner` /
  `## Tjenester` sections to the README, or keep the local entry for these two.
- **The exam repositories** already have Norwegian `Oversikt`, `Karakter` and topic
  sections in their READMEs, close to what the site shows now, so they mostly need
  the topics, a description and `portfolio.json`.
- **C Exam, DSA Exam, Python Exam** use the generic Kristiania logo as their card
  image today. Without a `thumbnail`, the first screenshot becomes the card image.
- `legacyId` keeps old links such as `/showcase/8` working.
- **Catfish3** is not part of the portfolio. GitHub search still reports it as public;
  check its visibility under Settings > General > Danger Zone if it should be private.
- **Borettslaget** is public but was never on the site. Tag it if you want it shown.
