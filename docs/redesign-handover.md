# Redesign handover

This document hands the visual redesign of the CV website to an implementing session. The design was decided in a planning session with the site owner; nothing in `cv-frontend/` has been changed yet.

- **Visual reference:** the design canvas at https://claude.ai/artifact/Y4tsh8eGN4K3CAV7negq3b (private to the owner). The boards to follow are **K · Kalk** (light) and **L · Skifer** (dark). The canvas also holds an older gold pair (A, I4) that was not chosen, and its source file contains leftover tokens from rejected explorations. Use only the tokens in this document.
- **Caveat:** the planning session never rendered the canvas itself. The owner reviewed it visually and approved K and L. Where this document and the canvas disagree, ask the owner.

## 1. What was decided

| Topic | Decision |
|---|---|
| Themes | Exactly two: light (Kalk) and dark (Skifer), switched by a Lys/Mørk toggle in the navbar |
| Title font | Sora (Google Fonts), weights 500–700 |
| Body font | Inter (already used) |
| Small data text | JetBrains Mono (durations, year ticks, tech chips) |
| Background | Flat colour. The old radial gradient/fade is removed |
| Timeline | Kept, reinterpreted as a horizontal time axis with bubbles sized by duration |
| Structure | Skills, featured projects and contact move onto the home page. The separate contact page goes away |
| Project page | New layout (section 6) |
| Portfolio data | Generated from GitHub instead of hand-edited (section 7) |
| Hosting | Cloudflare Pages, building from this git repo |

Functionality the owner likes and wants preserved: the timeline with a detail view, the CV modal (PDF plus skills explorer), the skill descriptions with links to projects, portfolio categories, the image carousel on project pages, and copy-email.

## 2. Current code, briefly

- `cv-frontend/`: Vite, React 19, TypeScript, Tailwind v4, react-router.
- `src/styles/styles.ts` holds nearly all Tailwind class strings plus about 50 CSS variables set inline on the app shell. Components are mostly logic.
- `src/components/CvTimeline.tsx` positions bubbles with pixel maths in JS and is hover-driven. It needs a rebuild, not a restyle.
- `src/data/staticCvData.ts` holds tenures, skills and showcases.
- `Dockerfile`, `nginx.conf` and `docker-compose.pi.yml` are from an earlier Raspberry Pi deployment. Leave them alone unless the owner says to remove them.

## 3. Design tokens

Define these as CSS custom properties (Tailwind v4 `@theme` plus a `[data-theme="dark"]` override) and delete the opacity-variant variables in `styles.ts`.

| Token | Kalk (light) | Skifer (dark) | Used for |
|---|---|---|---|
| `bg` | `#F3F4F2` | `#14171A` | Page ground |
| `surface` | `#FFFFFF` | `#1F2428` | Cards, detail panel, idle bubbles |
| `band` | `#E9EBE8` | `#191D20` | Background of the Erfaring section |
| `ink` | `#15181B` | `#E8EAEC` | Text, headings, the name |
| `muted` | `#586068` | `#9AA3AB` | Secondary text, labels |
| `line` | `#DADDDD` | `#2A3035` | Section rules, card borders |
| `line-strong` | `#AEB4B8` | `#48515A` | Bubble and chip borders, idle period bars |
| `accent` | `#C8391F` | `#FF6B4A` | Primary buttons, selected bubble and chip, grade badge |
| `accent-ink` | `#FFFFFF` | `#14171A` | Text and logo on accent fills |
| `accent-text` | `#C8391F` | `#FF7A5C` | Links, kicker label, dates, selected period bar |
| `contact-bg` | `#15181B` | `#FF6B4A` | Contact block background |
| `contact-ink` | `#F3F4F2` | `#14171A` | Contact block text and outline button |
| `contact-btn-bg` | `#C8391F` | `#14171A` | Contact primary button |
| `contact-btn-ink` | `#FFFFFF` | `#E8EAEC` | Contact primary button text |

Shape and type:

- Radius: cards and buttons 10px, chips 8px, bubbles fully round.
- Rules and borders: 1px.
- Titles (Sora, weight 600, letter-spacing about -0.045em, line-height 1): h1 `clamp(40px, 7.2vw, 104px)`; section h2 `clamp(32px, 3.6vw, 50px)`; contact headline `clamp(36px, 5vw, 72px)`; h3 34px; card title 24px.
- Body: Inter 16px, line-height 1.55. Lead paragraph 22px.
- Labels: Inter 13px, sentence case, no letter-spacing tricks. Navbar links 14px.
- Company logos are rendered single-colour with a CSS filter: `brightness(0)` for black, `brightness(0) invert(1)` for white. Idle bubbles use the theme's text colour at about 85% opacity; the selected bubble uses `accent-ink`.

All text pairs above were chosen to meet 4.5:1 contrast. Keep that when adjusting.

## 4. Home page

One page, in this order. Content container is max-width 1240px with 32px side padding; sections are separated by a 1px rule and have about 88px vertical padding.

1. **Navbar** (flat, on the page ground, with a bottom rule): the name as a wordmark on the left; links Erfaring, Ferdigheter, Prosjekter, Kontakt (anchor links on the home page); on the right a segmented Lys/Mørk toggle and the CV button, which opens the existing CV modal.
2. **Hero** (flat, no coloured block): small "Digital CV" label in `accent-text`; the name as h1 in `ink`; then two columns. Left: the existing intro sentence with the two emphasised phrases in `ink` and the rest in `muted`, and two buttons (Se prosjekter, primary; Ta kontakt, outline). Right: three summary rows (Studerer, Bakgrunn, Koder i). These rows were added by the planning session and the owner did not object; derive them from data, do not hard-code.
3. **Erfaring** (on `band`): the timeline, section 5.
4. **Ferdigheter**: the existing skills explorer moved out of the CV modal's exclusivity onto the page. Chips grouped as Programmeringsspråk and Teknologier on the left; the selected skill's name and description on the right under a 2px `accent-text` rule. Keep the inline links to projects. The CV modal can keep its own copy.
5. **Prosjekter**: three featured project cards and an "Alle prosjekter" link to the portfolio page. Card: 16:10 thumbnail, category label, title, one-line description, tech chips, and a "Karakter A/B" badge on `accent` where a grade exists.
6. **Kontakt** (full-width block on `contact-bg`): the line "Kanskje du er min neste arbeidsplass?" as a large headline, a primary button with the email address (keep copy-to-clipboard) and an outline button to GitHub.
7. **Footer**: "2026 mariuskristensen.no".

Routing: remove `/kontakt` as a page and redirect it to `/#kontakt`. Keep `/portfolio` and `/showcase/:id`. Give `NotFoundPage` real content; it currently renders nothing.

## 5. Timeline

A horizontal axis from January 2018 to January 2028, so one year is 10% of the track width.

- **Bubbles** are centred on the axis line at the midpoint of each period. Diameter grows with duration by area (diameter proportional to the square root of months), clamped to roughly 56–200px. In the mockup: Ihlang 56, POWER Kundebehandler 200, POWER Assisterende Teamleder 76, Würth 146, Kristiania 176.
- **Period bars**: a second line below acts as a ruler with a tick and year label every year. Each period draws a 6px bar on the ruler from its real start to its real end.
- **Labels** under each bubble: company (600 weight), role, duration (mono). A thin stem connects the axis to the label.
- **"I dag" marker**: a dashed vertical line at the current date.
- **Next-workplace bubble**: a dashed-outline bubble with "?" after the last period, labelled "Deg? / Neste arbeidsplass", linking to the contact block.
- **Selection**: click or tap selects a bubble; it fills with `accent`, and its label and period bar take `accent-text`. Hover may also select on desktop, but tap must work. Bubbles are real `<button>` elements with an aria-label. Do not link bubbles to company websites; that link lives in the detail panel.
- **Detail panel** directly below the track, on `surface`: date range, company, role, "Varighet", the existing description text, a "Besøk nettside" button, and for Kristiania the existing "Se programbeskrivelse" link. Default selection: POWER Kundebehandler.
- **Durations** are shown rounded to whole years once a period is a year or longer: POWER Kundebehandler shows "4 år" (not "3 år og 9 mnd") and Kristiania shows "3 år". Shorter periods keep months ("2 mnd", "6 mnd"). Date ranges in the detail panel use month names, not ISO dates.
- **No helper text**: the line "Boblens størrelse viser varighet. Trykk for detaljer." was explicitly removed.
- **Small screens**: the mockup only scrolls the track sideways below about 1100px. A proper phone layout was not designed; a vertical axis with the same bubbles, labels beside them and the detail panel opening under the tapped item is the suggested approach. Show the owner before finalising.

Keep the existing data rules: the three Kristiania study years merge into one period, and the two POWER roles stay separate.

## 6. Project page

Replaces the nested grey panels of the current `ShowcasePage`.

1. Navbar as on the home page, with Prosjekter marked active.
2. "Alle prosjekter" back link; category label; title as h1; the one-line description beside it.
3. A facts strip between two rules: Type, Hovedspråk, Sist oppdatert, and a "Se koden på GitHub" button.
4. Gallery: one large image in a bordered frame (16:10, cropped from the top), a row of thumbnail buttons below with the selected one outlined in `accent-text`, and an "Bilde n av m" counter. Keep keyboard access.
5. Body in two columns: main column with each detail section as an h2 and paragraphs, and list-like sections (Funksjoner, Teknologi, Arkitektur, Tjenester) rendered as real numbered lists with a rule between items; a sidebar card with Teknologi chips and Lenker.
6. Previous and next project links.
7. Footer.

The canvas mock of this page is drawn in the unchosen gold theme. Use its layout with the Kalk and Skifer tokens. The portfolio list page keeps its category grouping and uses the new card from section 4.

## 7. Portfolio from GitHub

Goal: the owner stops editing `staticCvData.ts` to add or remove projects. Private repositories must never appear.

Findings from the planning session (verify, they may be stale):
- The site links to `kremflote/SportsWorld` and `kremflote/AnimeDatabase`, which no longer appear under those names; they were probably renamed to the exam repositories.
- `Catfish3` was still reported public by GitHub search although the owner said the Catfish repository is now private. Catfish must not be on the site.
- `Borettslaget` and `homeserver-config` are public but not linked from the site.
- Almost no repository has a description or topics.

Recommended design. The owner has not confirmed the opt-in rule, so confirm it before building:
- **Source of truth:** a build-time script calls the GitHub API for `kremflote`'s public repositories and writes a generated JSON file that the app imports.
- **Opt in by topic:** only repositories with the topic `portfolio` are included. This keeps this website's own repository and unfinished work out.
- **Card data from the API:** name, description, topics (as tech chips), primary language, last push date, URL.
- **Rich data from each repository:** long text from the README, and an optional small `portfolio.json` in the repository for title override, category (`personal`, `kristiania`, `work`), grade, and screenshot paths.
- **Fallback:** if the API call fails or is rate-limited during a build, reuse the last generated file committed in the repo so a build never ships an empty portfolio. An optional `GITHUB_TOKEN` build variable raises the rate limit; never commit a token.
- **Keeping it fresh on Cloudflare Pages:** Pages rebuilds on push only. Add a scheduled GitHub Actions workflow that calls a Cloudflare Pages deploy hook once a day. The owner must create the deploy hook and store its URL as a repository secret.
- **Migration:** the existing long descriptions, grades and screenshots in `staticCvData.ts` should move into the corresponding repositories (README and `portfolio.json`). That means commits in other repositories, which needs the owner's go-ahead. Projects with no repository can stay in a small local file.

## 8. Theme toggle behaviour

- Two modes only, labelled Lys and Mørk.
- Suggested default, not yet confirmed by the owner: follow the visitor's system preference on first visit, then remember the choice in `localStorage`. Set the theme attribute before first paint to avoid a flash.

## 9. Suggested order of work

1. Tokens and fonts: add the theme variables, Sora and JetBrains Mono, the theme attribute and toggle; remove the page gradient and the opacity variables.
2. App shell: navbar, footer, routing changes, 404 page.
3. Home: hero, then the timeline rebuild, then skills, featured projects and the contact block.
4. Portfolio list and project page.
5. CV modal restyle (same behaviour; replace the letter "X" close button with a proper icon button).
6. GitHub automation, after the owner confirms the opt-in rule.
7. Cleanup: mixed Norwegian/English labels ("Work", "Loading..."), `lang="nb"` on the document, the template README, and trimming Font Awesome to the few icons used or replacing them with inline SVG.

Check every page in both themes at desktop and phone widths, with keyboard only, before calling a step done.

## 10. Open questions for the owner

1. Portfolio: opt in by `portfolio` topic (recommended), or show every public repository?
2. May the implementing session add `portfolio.json` and README content to the other repositories?
3. Theme default: follow the system setting, or always start in one mode?
4. Phone layout of the timeline: approve a sketch before it is built.
5. Are the Raspberry Pi deployment files still needed?
