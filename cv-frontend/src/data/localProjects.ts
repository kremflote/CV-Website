import type { IShowcase } from "../interfaces/IShowcase";

/**
 * Norwegian project text kept in this repository for projects whose README
 * is an English developer document (Matflote, homeserver-config).
 *
 * An entry with `repo` is shown only when that repository is public and has
 * the GitHub topic "portfolio" (see src/data/generated/portfolio.json). Its
 * text, category and grade here take precedence over the README; screenshots
 * come from the repository's portfolio.json when it lists any, otherwise from
 * here. An entry without `repo` is always shown.
 */
export type LocalProject = IShowcase & { repo?: string };

export const localProjects: LocalProject[] = [
  {
    id: 8,
    repo: "Matflote",
    title: "Matflote",
    tech: ["React", "TypeScript", "C#", ".NET"],
    featured: true,
    description:
      "Personlig verktøy for middagsplanlegging, kokebok, handleliste og lokal matdata.",
    details: [
      {
        title: "Oversikt",
        body: [
          "Appen tilbyr oppskrifter, ingredienser, ukesplanlegging, handlelisteflyt, strekkodeskanning, lokal prissporing og omtrentlige ernæringssummer.",
          "Prosjektet er utviklet med assistanse fra ChatGPT 5.5.",
        ],
      },
      {
        title: "Funksjoner",
        body: [
          "Kokebok med oppskrifter og ingredienser.",
          "Oppskrifter kan inneholde både ingredienser og målbare oppskriftskomponenter, slik at en oppskrift kan brukes som ingrediens i en annen.",
          "Ingredienser og komponenter lagrer måleenheter og tilberedning, for eksempel hakket, terninger, julienne, revet eller knust.",
          "Middagsplanlegger og prep-hjelper for inneværende uke.",
          "Handlelisteforhåndsvisning og eksport gjennom et provider-basert handlelistesystem, der Vikunja er første støttede provider.",
          "Skannerside for norsk dagligvareoppslag via strekkode/EAN gjennom Kassalapp, med manglende ernæringsfelter supplert fra Matvaretabellen.",
          "Prisside for lokal husholdningssporing av priser etter ingrediens, butikk og dato.",
          "Ernæringsside for omtrentlige ukessammendrag fra planlagte måltider og lokalt lagrede referanseverdier fra Helsedirektoratet.",
        ],
      },
    ],
    image: "cookbooklight.png",
    image_Thumbnail: "matflotethumbnail.jpg",
    images: [
      "cookbooklight.png",
      "mobilecookbooklight.png",
      "mobileplannerlight.png",
      "nutritionlight.png",
      "plannerlight.png",
      "priceslight.png",
    ],
    gitHub_Link: "https://github.com/kremflote/Matflote",
    category: "personal",
  },
  {
    id: 4,
    repo: "homeserver-config",
    title: "Raspberry Pi Home Server",
    tech: ["Docker Compose", "Tailscale", "Cloudflare", "Nginx"],
    description:
      "Dokumentasjon og konfigurasjon for min personlige Raspberry Pi-hjemmeserver, bygget for og med Docker Compose, Tailscale, Cloudflare og Nginx Proxy Manager.",
    details: [
      {
        title: "Oversikt",
        body: [
          "Pi Homeserver er min personlige hjemmeserver. Repositoryet brukes hovedsakelig til dokumentasjon, versjonskontroll og som showcase.",
          "Prosjektet inneholder Docker Compose-filene, scripts og eksempler som beskriver hvordan tjenestene på hjemmeserveren henger sammen.",
          "Serveren kjører på en Raspberry Pi 4 med Docker Compose. Tilgang skjer via Tailscale, DNS håndteres i Cloudflare, og web-routing styres gjennom Nginx Proxy Manager.",
        ],
      },
      {
        title: "Tjenester",
        body: [
          "Kjerneinfrastruktur og reverse proxy.",
          "Filsynkronisering og personlig skylagring med Nextcloud.",
          "Mediaautomatisering med Sonarr, Radarr, Prowlarr, Bazarr, qBittorrent og Gluetun.",
          "Medieserver med Jellyfin.",
          "Overvåkning med Uptime Kuma og Beszel.",
          "Dashboarding med Homepage.",
          "Personlige verktøy som Firefly III, Vikunja og egne [Matflote](/showcase/8)-tjenester.",
          "Lokalt backup-script med Restic.",
        ],
      },
      {
        title: "Notater",
        body: [
          "Å sette opp hjemmeserveren har gitt meg praktisk erfaring med drift, nettverk og selvhosting. Jeg har lært hvordan tjenester må kobles sammen gjennom Docker-nettverk, porter, DNS, reverse proxy og sikre tilgangsløsninger, og hvordan små feil i permissions, volumes eller miljøvariabler kan påvirke hele systemet.",
          "Prosjektet har også gjort meg bedre på secrets management, backup-rutiner og dokumentasjon.",
        ],
      },
    ],
    image: "piserver.jpg",
    image_Thumbnail: "raspberrythumbnail.jpg",
    images: ["piserver.jpg"],
    gitHub_Link: "",
    category: "personal",
  },
];
