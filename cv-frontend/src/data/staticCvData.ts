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
    gitHub_Link: "https://github.com/kremflote/AnimeDatabase",
    category: "kristiania",
  },
  {
    id: 2,
    title: "SportsWorld",
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
    gitHub_Link: "https://github.com/kremflote/SportsWorld",
    category: "kristiania",
  },
  {
    id: 3,
    title: "Catfish",
    description:
      "Konseptet er co-op fishing horror med boat og cat management. Så langt har jeg implementert et rudimentært grid-basert inventory system, en first-person controller, fungerende co-op med Fishnet og starten av en fungerende båt.",
    image: "catfish-1.jpg",
    image_Thumbnail: "catfishthumbnail.jpg",
    images: ["catfish-1.jpg", "catfish-2.jpg", "catfish-3.jpg"],
    gitHub_Link: "https://github.com/kremflote/Catfish3",
    category: "personal",
  },
  {
    id: 4,
    title: "Raspberry Pi Home Server",
    description:
      "Med bruk av en Raspberry Pi 4 har jeg satt opp en hjemmeserver som oppfyller flere roller. Serveren fungerer som en webserver, filserver og medieserver. Den er konfigurert med Nginx for å håndtere HTTP-forespørsler og Rustic for regelmessige sikkerhetskopier. Dette er også serveren som denne nettsiden kjører på. Prosjektet har gitt meg praktisk erfaring med serveradministrasjon, nettverkskommunikasjon og shell scripting.",
    image: "raspberrythumbnail.jpg",
    image_Thumbnail: "raspberrythumbnail.jpg",
    images: ["raspberrythumbnail.jpg"],
    gitHub_Link: "",
    category: "personal",
  },
  {
    id: 5,
    title: "C Exam 2026",
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
    image_Thumbnail: "pg3401-c-exam-2026thumbnail.jpg",
    images: ["pg3401-c-exam-2026-1.jpg"],
    gitHub_Link: "https://github.com/kremflote/PG3401-C-Exam-2026",
    category: "kristiania",
  },
  {
    id: 6,
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
    image: "pgr107-python-exam-2026-1.jpg",
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
