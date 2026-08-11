import type { IShowcase } from "../interfaces/IShowcase";
import type { ISkill } from "../interfaces/ISkill";
import type { ITenure } from "../interfaces/ITenure";

export const tenures: ITenure[] = [
  {
    id: 1,
    companyName: "Würth Norge",
    workTitle: "Selger",
    startDate: "2022-07-01",
    endDate: "2024-07-01",
  },
  {
    id: 2,
    companyName: "POWER",
    workTitle: "Assisterende Teamleder",
    startDate: "2022-01-01",
    endDate: "2022-06-01",
  },
  {
    id: 3,
    companyName: "POWER",
    workTitle: "Kundebehandler",
    startDate: "2018-05-01",
    endDate: "2022-01-01",
  },
  {
    id: 4,
    companyName: "Ihlang Forvaltning",
    workTitle: "Anleggsarbeider",
    startDate: "2018-04-01",
    endDate: "2018-05-01",
  },
  {
    id: 5,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    startDate: "2024-08-15",
    endDate: "2025-06-15",
  },
  {
    id: 6,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    startDate: "2025-08-15",
    endDate: "2026-06-15",
  },
  {
    id: 7,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    startDate: "2026-08-15",
    endDate: "2027-06-15",
  },
];

export const skills: ISkill[] = [
  {
    id: 37,
    skill_Name: "JavaScript",
    description:
      "Introdusert til js i første semester på studiet, med fokus på prosjekt-struktur og DOM-manipulering. Har en god forståelse av samspillet mellom js, HTML og CSS.",
    category: "Programming Languages",
  },
  {
    id: 38,
    skill_Name: "TypeScript",
    description:
      "Benyttet i React-kurset for å bygge skalerbare og typesikre prosjekter. SportsWorld portfolio prosjektet er utviklet med TypeScript.",
    category: "Programming Languages",
  },
  {
    id: 39,
    skill_Name: "C#",
    description:
      "Benyttet i React-kurset for backend, samt i Unity for spill-prototypen min: Catfish.",
    category: "Programming Languages",
  },
  {
    id: 40,
    skill_Name: "C",
    description:
      "Praktisk erfaring med systemprogrammering i Linux under studietiden. Inkludert: kompilering med makefiler, dynamisk minnehåndtering, nettverksprogrammering med POSIX sockets, grunnleggende datastrukturer og algoritmer, multi-threading med pthreads, semaphores og mutex locks.",
    category: "Programming Languages",
  },
  {
    id: 41,
    skill_Name: "Kotlin",
    description:
      "Brukte dette språket til å utvikle Android-apper i studietiden. Fikk erfaring med deklarativ UI, API-er og lokale databaser i komplette app-løsninger.",
    category: "Programming Languages",
  },
  {
    id: 42,
    skill_Name: "SQL",
    description:
      "Kjent med fundamentale databasekonsepter: SQL-spørringer, nøkkelbruk, relasjonsmodellering og normalisering av data.",
    category: "Programming Languages",
  },
  {
    id: 43,
    skill_Name: "Java",
    description:
      "Laget flere programmer under studietiden med Java. Har erfaring med generelle OOP-prinsipper som klasser, arv og polymorfi.",
    category: "Programming Languages",
  },
  {
    id: 44,
    skill_Name: "React",
    description:
      "Rammeverket benyttet for utviklingen av frontenden til eksamensprosjektet SportsWorld. Er kjent med komponentbasert arbeidsflyt, useState, context og effects.",
    category: "Technologies",
  },
  {
    id: 45,
    skill_Name: ".NET",
    description:
      "Benyttet for backend til eksamensprosjektet SportsWorld, samt tidligere backend-løsning for denne nettsiden.",
    category: "Technologies",
  },
  {
    id: 46,
    skill_Name: "Android Studio",
    description: "IDE-en vi brukte for Android-utvikling i studiet.",
    category: "Technologies",
  },
  {
    id: 47,
    skill_Name: "Unity",
    description:
      "Enginen jeg valgte for å utvikle spillprototypen Catfish. Har forståelse av arbeidsflyten rundt GameObjects, rigidbodies, scripts og assets.",
    category: "Technologies",
  },
  {
    id: 48,
    skill_Name: "Git",
    description:
      "Versjonskontrollsystemet jeg har brukt til alle mine prosjekter. Har godt grep på grunnleggende kommandoer og konsepter som branching og merging.",
    category: "Technologies",
  },
];

export const showcases: IShowcase[] = [
  {
    id: 1,
    title: "Anime Database",
    description:
      "Dette prosjektet er en Android-applikasjon utviklet i Kotlin, hvor brukeren kan utforske, søke etter og organisere anime-serier ved hjelp av JIKAN API. Appen henter data fra det eksterne APIet og presenterer innholdet gjennom et brukervennlig grensesnitt. Brukeren kan se detaljer om hver serie, markere hvilke serier som er sett, og lagre favoritter. Appen inneholder også søkefunksjonalitet og filtrering. Prosjektet ble utviklet som en del av gruppeeksamen i emnet Android Programmering. Appen er utviklet i Android Studio av meg og Marius André Ellingsen, og benytter det deklarative UI-rammeverket Jetpack Compose. Applikasjonen fungerer som en grunnleggende demonstrasjon av en CRUD-løsning, hvor data hentes fra et eksternt API via Retrofit, og lagres lokalt ved hjelp av Room Database.",
    image: "animedatabase.jpg",
    image_Thumbnail: "animedatabasethumbnail.jpg",
    images: [
      "animedatabase-1.jpg",
      "animedatabase-2.jpg",
      "animedatabase-3.jpg",
      "animedatabase-4.jpg",
    ],
    gitHub_Link: "https://github.com/kremflote/AnimeDatabase",
    category: "kristiania",
  },
  {
    id: 2,
    title: "SportsWorld",
    description:
      "Full-stack eksamensprosjekt hvor vi laget en interaktiv nettside hvor brukeren kan gjennomføre CRUD-operasjoner. SportsWorld gir brukeren tilgang til å signere og overse et team med fighters, samt låne penger og opprette egne fighters. Fokuset for nettsiden var å følge WCAG, gi brukeren feedback ved alle handlinger og ved lasting av innhold, feilmeldinger når ting går galt og en smidig UIX.",
    image: "sportsworld.jpg",
    image_Thumbnail: "sportsworldthumbnail.jpg",
    images: [
      "sportsworld-2.jpg",
      "sportsworld-3.jpg",
      "sportsworld-4.jpg",
      "sportsworld-5.jpg",
    ],
    gitHub_Link: "https://github.com/kremflote/SportsWorld",
    category: "kristiania",
  },
  {
    id: 3,
    title: "Catfish",
    description:
      "Inspirert av suksessen til solo-utviklere som TVGS og Zeekerss satt jeg ut til å utvikle mitt eget spill. Konseptet er co-op fishing horror med boat og cat management. Så langt har jeg implementert et rudimentært grid-basert inventory system, en first-person controller, fungerende co-op med Fishnet og starten av en fungerende båt. Jeg anser dette spillet som en alternativ kanal jeg kan legge energi i når studier og andre prosjekter ikke tar prioritet.",
    image: "catfish.jpg",
    image_Thumbnail: "catfishthumbnail.jpg",
    images: ["catfish-1.jpg", "catfish-2.jpg", "catfish-3.jpg"],
    gitHub_Link: "https://github.com/kremflote/Catfish3",
    category: "personal",
  },
  {
    id: 4,
    title: "Raspberry Pi Home Server",
    description:
      "Med bruk av en Raspberry Pi 4 har jeg satt opp en hjemmeserver som oppfyller flere roller. Den bruker Docker til å kjøre flere containere. Home-server hoster nettsiden, media-server samler løsninger som Jellyfin, Sonarr og Radarr, og infra-server håndterer blant annet Adguard, NGINX, Tailscale, Excalidraw, Vikunja, HomePage, Kuma og Portainer.",
    image: "raspberrythumbnail.jpg",
    image_Thumbnail: "raspberrythumbnail.jpg",
    images: ["raspberrythumbnail.jpg"],
    gitHub_Link: "",
    category: "personal",
  },
  {
    id: 5,
    title: "C Exam 2026",
    description: "Eksamensprosjekt for PG3401 C.",
    image: "pg3401-c-exam-2026.jpg",
    image_Thumbnail: "pg3401-c-exam-2026thumbnail.jpg",
    images: ["pg3401-c-exam-2026-1.jpg"],
    gitHub_Link: "https://github.com/kremflote/PG3401-C-Exam-2026",
    category: "kristiania",
  },
  {
    id: 6,
    title: "Data Structures and Algorithms Exam 2026",
    description:
      "Eksamensprosjekt for PG4200 Data Structures and Algorithms.",
    image: "pg4200-data-structures-and-algorithms-exam-2026.jpg",
    image_Thumbnail:
      "pg4200-data-structures-and-algorithms-exam-2026thumbnail.jpg",
    images: ["pg4200-data-structures-and-algorithms-exam-2026-1.jpg"],
    gitHub_Link:
      "https://github.com/kremflote/PG4200-Data-Structures-and-Algorithms-Exam-2026",
    category: "kristiania",
  },
  {
    id: 7,
    title: "Python Exam 2026",
    description:
      "Eksamensprosjekt for PGR107 Python. Prosjektet består av fem programmerings- og analyseoppgaver med blant annet tallfølger, enkel spillogikk, geografiske beregninger, matriseoperasjoner og dataanalyse.",
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
          "Dette prosjektet består av fem programmerings- og analyseoppgaver i Python. Oppgavene dekker rekursive og mønsterbaserte tallfølger, enkel spillogikk, geografiske beregninger, matriseoperasjoner og en større dataanalyse av standpunktkarakterer ved videregående skoler i Oslo.",
          "Prosjektet bruker grunnleggende Python sammen med biblioteker som NumPy, Pandas, Matplotlib og chardet for databehandling, numeriske beregninger og visualisering.",
        ],
      },
      {
        title: "Hypoteser",
        body: [
          "H1 - Karakterdrift: Gjennomsnittlige standpunktkarakterer ved Oslo videregående skoler har økt fra 2020-21 til 2024-25.",
          "H2 - Færre svake resultater: Andelen lavere karaktergjennomsnitt har gått ned i 2024-25 sammenlignet med 2020-21.",
          "Siden datasettet inneholder gjennomsnittskarakterer og ikke individuelle karakterfordelinger, måles H2 som vektet andel skole-fag-gjennomsnitt på eller under 3.",
        ],
      },
      {
        title: "Konklusjon",
        body: [
          "Visualiseringene og de vektede beregningene tyder ikke på en tydelig systematisk økning i standpunktkarakterer ved Oslo videregående skoler fra 2020-21 til 2024-25. H1 støttes derfor ikke tydelig av analysen.",
          "H2 får heller ikke sterk støtte. Noen programgrupper viser en reduksjon i lavere karaktergjennomsnitt, mens andre grupper beveger seg i motsatt retning. Resultatet peker derfor mot et blandet og relativt stabilt mønster heller enn en klar generell forbedring.",
        ],
      },
    ],
    image: "pgr107-python-exam-2026.jpg",
    image_Thumbnail: "pgr107-python-exam-2026thumbnail.jpg",
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
