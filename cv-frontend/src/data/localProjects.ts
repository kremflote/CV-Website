import type { IShowcase } from "../interfaces/IShowcase";

/**
 * Project content kept in this repository while it is moved into each
 * project's own repository (README.md and portfolio.json).
 *
 * An entry with `repo` is shown only when that repository is public and has
 * the GitHub topic "portfolio" (see src/data/generated/portfolio.json); its
 * text, images, category and grade here take precedence over what GitHub
 * provides until the entry is deleted. An entry without `repo` is always shown.
 */
export type LocalProject = IShowcase & { repo?: string };

export const localProjects: LocalProject[] = [
  {
    id: 1,
    repo: "PGR208-Android-Programmering-Exam-2025",
    title: "Anime Database",
    tech: ["Kotlin", "Jetpack Compose", "Retrofit", "Room"],
    featured: true,
    description:
      "Android-applikasjon utviklet i Kotlin hvor brukeren kan utforske, søke etter og organisere anime-serier ved hjelp av Jikan API.",
    details: [
      {
        title: "Oversikt",
        body: [
          "Anime Database er en Android-applikasjon utviklet i Kotlin, hvor brukeren kan utforske, søke etter og organisere anime-serier ved hjelp av Jikan API.",
          "Appen henter data fra et eksternt API og presenterer det gjennom et moderne og brukervennlig grensesnitt bygget med Jetpack Compose.",
          "Brukeren kan søke etter anime, se detaljer om serier, markere serier som sett og lagre favoritter lokalt.",
          "Applikasjonen demonstrerer en full CRUD-lignende struktur, hvor data hentes fra API via Retrofit og lagres lokalt med Room Database.",
        ],
      },
      {
        title: "Karakter A",
        body: [],
      },
      {
        title: "Teknologi",
        body: [
          "Kotlin (Android)",
          "Jetpack Compose (UI)",
          "Retrofit (API calls)",
          "Room Database (local storage)",
          "Jikan API (anime data source)",
        ],
      },
      {
        title: "Arkitektur",
        body: [
          "MVVM architecture (ViewModel + Repository pattern)",
          "REST API integration via Retrofit",
          "Local persistence using Room",
          "Reactive UI with Jetpack Compose",
          "Offline-friendly data storage",
        ],
      },
    ],
    image: "animedatabase-1.jpg",
    image_Thumbnail: "animedatabasethumbnail.jpg",
    images: [
      "animedatabase-1.jpg",
      "animedatabase-2.jpg",
      "animedatabase-3.jpg",
      "animedatabase-4.jpg",
    ],
    gitHub_Link: "https://github.com/kremflote/PGR208-Android-Programmering-Exam-2025",
    category: "kristiania",
  },
  {
    id: 2,
    repo: "DS3103-Webutvikling-Exam-2025",
    title: "SportsWorld",
    tech: ["React", "TypeScript", ".NET", "SQLite"],
    featured: true,
    description:
      "Full-stack prosjekt med frontend og backend hvor brukeren kan utføre CRUD-operasjoner gjennom et brukervennlig grensesnitt.",
    details: [
      {
        title: "Oversikt",
        body: [
          "SportsWorld er et prosjekt som består av en enkel frontend- og backend-løsning, hvor brukeren kan utføre CRUD-operasjoner gjennom et brukervennlig grensesnitt.",
          "Frontend: React (Vite + TypeScript + TailwindCSS)",
          "Backend: ASP.NET Core Web API i C# (.NET 9)",
        ],
      },
      {
        title: "Karakter A",
        body: [],
      },
      {
        title: "Arkitektur",
        body: [
          "REST API endpoints med controllers",
          "Entity Framework Core for database tilgang",
          "SQLite som database",
          "CORS enabled (allows all origins)",
        ],
      },
    ],
    image: "sportsworld-2.jpg",
    image_Thumbnail: "sportsworldthumbnail.jpg",
    images: [
      "sportsworld-2.jpg",
      "sportsworld-3.jpg",
      "sportsworld-4.jpg",
      "sportsworld-5.jpg",
    ],
    gitHub_Link: "https://github.com/kremflote/DS3103-Webutvikling-Exam-2025",
    category: "kristiania",
  },
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
  {
    id: 5,
    repo: "PG3401-C-Exam-2026",
    title: "C Exam 2026",
    tech: ["C", "Linux", "POSIX threads"],
    description:
      "Eksamensbesvarelse i C utviklet og testet i Debian 10 Linux på VMware Pro.",
    details: [
      {
        title: "Oversikt",
        body: [
          "Dette prosjektet er en eksamensbesvarelse i C utviklet og testet i Debian 10 Linux på VMware Pro. Prosjektet består av flere deloppgaver som demonstrerer sentrale temaer innen systemprogrammering, datastrukturer, tråder, synkronisering, filbehandling og nettverkskommunikasjon.",
          "Løsningene bruker blant annet POSIX sockets, pthread, semaforer, mutexer, dynamisk minneallokering, binær filbehandling og egendefinerte protokollstrukturer fra EWA.",
        ],
      },
      {
        title: "Karakter B",
        body: [],
      },
      {
        title: "Teknisk Miljø",
        body: [
          "Operativsystem: Debian 10 Linux",
          "Virtualisering: VMware Pro",
          "Språk: C",
          "Compiler: GCC",
          "Tråder: POSIX Threads",
          "Nettverk: POSIX sockets",
          "Build/verktøy: Makefile / terminalbasert kompilering",
          "Eksterne filer: EWA-definerte headerfiler og protokollstrukturer",
        ],
      },
    ],
    image: "pg3401-c-exam-2026-1.jpg",
    image_Thumbnail: "kristiania.png",
    images: ["pg3401-c-exam-2026-1.jpg"],
    gitHub_Link: "https://github.com/kremflote/PG3401-C-Exam-2026",
    category: "kristiania",
  },
  {
    id: 6,
    repo: "PG4200-Data-Structures-and-Algorithms-Exam-2026",
    title: "Data Structures and Algorithms Exam 2026",
    description:
      "Gruppeeksamen for PG4200-H med implementering og analyse av fire klassiske sorteringsalgoritmer.",
    details: [
      {
        title: "Karakter A",
        body: [
          "Sensor begrunnelse: All four required algorithms are correctly implemented in Java. Time-complexity reasoning is accurate and clearly explained. The candidates go beyond minimum requirements with a well-designed benchmarking framework.",
          "Explanations of how each algorithm works are clear, correct, and phrased in an algorithmic way. This is an outstanding performance: The candidates not only satisfy the tasks but extend them with space complexity, architecture, JIT warm-up and large-n benchmarking, and argue from both theory and experiment.",
          "The usage of different algorithms and data structures is appropriate and well reasoned for the given problem. In the video, the candidates clearly demonstrate their knowledge. Overall, the submission clearly fits the A / Outstanding descriptor.",
        ],
      },
      {
        title: "Oversikt",
        body: [
          "Gruppeeksamen for PG4200-H: Algorithms and Data Structures. Eksamen implementerer og analyserer fire klassiske sorteringsalgoritmer anvendt på Wine Quality Dataset fra UCI Machine Learning Repository.",
          "Alle algoritmer opererer på de unike alkoholverdiene hentet fra de kombinerte rød- og hvitvin .csv-filene.",
        ],
      },
      {
        title: "Problemoversikt",
        body: [
          "Problem 1 - Boblesortering (25 poeng): Implementerer både en optimalisert og ikke-optimalisert Bubble Sort. Analyserer tidskompleksitet og effekten av tilfeldig stokking av listen.",
          "Problem 2 - Innsettingssortering (25 poeng): Implementerer Insertion Sort i stigende rekkefølge. Analyserer tidskompleksitet og hvorvidt tilfeldig stokking påvirker denne.",
          "Problem 3 - Flettesortering (25 poeng): Implementerer Merge Sort og teller antall fletteoperasjoner. Undersøker om antallet endres ved tilfeldig stokking av inputen.",
          "Problem 4 - Hurtigsortering (25 poeng): Implementerer Quick Sort med fire pivot-strategier: første element, siste element, tilfeldig element og median av tre. Teller sammenligninger per strategi og identifiserer den beste for dette datasettet.",
        ],
      },
      {
        title: "Dataset",
        body: [
          "Kilde: UCI Wine Quality Dataset",
          "Filer brukt: winequality-red.csv, winequality-white.csv",
          "Attributt brukt: alcohol-kolonnen - unike verdier hentet fra det kombinerte datasettet",
        ],
      },
    ],
    image: "pg4200-data-structures-and-algorithms-exam-2026-1.jpg",
    image_Thumbnail: "kristiania.png",
    images: ["pg4200-data-structures-and-algorithms-exam-2026-1.jpg"],
    gitHub_Link:
      "https://github.com/kremflote/PG4200-Data-Structures-and-Algorithms-Exam-2026",
    category: "kristiania",
  },
  {
    id: 7,
    repo: "PGR107-Python-Exam-2026",
    title: "Python Exam 2026",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
    description:
      "Eksamensprosjekt i Python med fem oppgaver innen programmering, numeriske beregninger og dataanalyse.",
    details: [
      {
        title: "Karakter A",
        body: [
          "Sensor begrunnelse: Fremragende prestasjon som klart utmerker seg. Kandidaten viser svært god vurderingsevne og stor grad av selvstendighet.",
        ],
      },
      {
        title: "Oversikt",
        body: [
          "Prosjektet består av fem mindre programmerings- og analyseoppgaver. Det kombinerer grunnleggende Python med NumPy, Pandas, Matplotlib og chardet for numeriske beregninger, databehandling og visualisering.",
          "Den største delen er en utforskende analyse av standpunktkarakterer ved videregående skoler i Oslo fra 2020-21 til 2024-25.",
        ],
      },
      {
        title: "Problemoversikt",
        body: [
          "Oppgavene dekker en Supernacci-lignende tallfølge, et enkelt terninggjettspill, geografiske beregninger for byer og interessepunkter, manuell matrisespor-beregning med NumPy-verifisering og en større karakteranalyse.",
          "Dataanalysen bruker Utdanningsdirektoratets karakterstatistikk for Oslo-skoler, med filtrering, rydding av norske tallformater, vekting etter elevantall og visualisering av utvikling over tid.",
        ],
      },
      {
        title: "Hypoteser",
        body: [
          "Analysen undersøker om standpunktkarakterer ved videregående skoler i Oslo har driftet oppover, og om andelen svakere gjennomsnitt har gått ned.",
          "Siden datasettet inneholder gjennomsnittskarakterer og ikke individuelle karakterfordelinger, brukes skole-fag-gjennomsnitt på eller under 3 som proxy for svakere resultater.",
        ],
      },
      {
        title: "Konklusjon",
        body: [
          "Visualiseringene og de vektede beregningene peker ikke mot en tydelig systematisk økning i standpunktkarakterer fra 2020-21 til 2024-25.",
          "Resultatet fremstår blandet og relativt stabilt: noen programgrupper viser forbedring, mens andre beveger seg motsatt vei.",
        ],
      },
    ],
    image: "pgr107-python-exam-2026-1.jpg",
    image_Thumbnail: "kristiania.png",
    images: [
      "pgr107-python-exam-2026-1.jpg",
      "pgr107-python-exam-2026-2.jpg",
      "pgr107-python-exam-2026-3.jpg",
      "pgr107-python-exam-2026-4.jpg",
    ],
    gitHub_Link: "https://github.com/kremflote/PGR107-Python-Exam-2026",
    category: "kristiania",
  },
];
