import type { ISkill } from "../interfaces/ISkill";
import type { ITenure } from "../interfaces/ITenure";

export const tenures: ITenure[] = [
  {
    id: 1,
    companyName: "Würth Norge",
    workTitle: "Selger",
    description:
      "Her jobbet jeg i et nyetablert team: SK1. Konseptet var nytt i Würth, og vi var en liten avdeling med ansvar for en enorm kundeportefølje av bedriftskontoer vi skulle ivareta. Det ga meg erfaring innenfor relasjonsbygging og B2B salg.",
    startDate: "2022-07-01",
    endDate: "2024-07-01",
  },
  {
    id: 2,
    companyName: "POWER",
    workTitle: "Assisterende Teamleder",
    description:
      "Daglig drift av kundesenteret, oppfølgning av ansatte og deltok i rekrutteringsprosesser, intervju og vurdering av kandidater ved nyansettelser.",
    startDate: "2022-01-01",
    endDate: "2022-06-01",
  },
  {
    id: 3,
    companyName: "POWER",
    workTitle: "Kundebehandler",
    description:
      "Kundebehandler hverdagen er en hektisk stilling, hvor jeg lærte å skape gode kundeopplevelser, utføre behovsanalyser, jobbe under press og koordinere mellom flere ledd i en organisasjon.",
    startDate: "2018-05-01",
    endDate: "2022-01-01",
  },
  {
    id: 4,
    companyName: "Ihlang Forvaltning",
    workTitle: "Anleggsarbeider",
    description:
      "Singling, perimetersikring og kontrollerte sprengninger av berg",
    startDate: "2018-04-01",
    endDate: "2018-05-01",
  },
  {
    id: 5,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    description:
      "Front- og backend, DSA, C Programmering i Linux, databaser og mobilutvikling.",
    isEducation: true,
    startDate: "2024-08-15",
    endDate: "2025-06-15",
  },
  {
    id: 6,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    description:
      "Front- og backend, DSA, C Programmering i Linux, databaser og mobilutvikling.",
    isEducation: true,
    startDate: "2025-08-15",
    endDate: "2026-06-15",
  },
  {
    id: 7,
    companyName: "Kristiania",
    workTitle: "Frontend- og mobilutvikling",
    description:
      "Front- og backend, DSA, C Programmering i Linux, databaser og mobilutvikling.",
    isEducation: true,
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
      "Benyttet i studieløpet og prosjektene mine. Bla SportsWorld og [Matflote](/showcase/8).",
    category: "Programming Languages",
  },
  {
    id: 39,
    skill_Name: "C#",
    description:
      "Benyttet i React-kurset for backend, samt i Unity for spill-prototypen min: Catfish. Brukes også i backenden til [Matflote](/showcase/8).",
    category: "Programming Languages",
  },
  {
    id: 40,
    skill_Name: "C",
    description:
      "Fikk praktisk erfaring med systemprogrammering i Linux under studietiden. Inkludert: kompilering med makefiler, dynamisk minnehåndtering, nettverksprogrammering med POSIX sockets, grunnleggende datastrukturer og algoritmer, multi-threading med pthreads, semaphores og mutex locks.",
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
    id: 50,
    skill_Name: "Python",
    description:
      "Benyttet i [Python Exam 2026](/showcase/7) til mindre programmeringsoppgaver og dataanalyse. Har erfaring med NumPy, Pandas, Matplotlib og enkel datarydding/visualisering.",
    category: "Programming Languages",
  },
  {
    id: 42,
    skill_Name: "SQL",
    description:
      "Kjent med fundamentale databasekonsepter: SQL-spørringer, nøkkelbruk, relasjonsmodellering og normalisering av data.",
    category: "Technologies",
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
      "Rammeverket benyttet for utviklingen av frontenden til eksamensprosjektet SportsWorld og [Matflote](/showcase/8). Er kjent med komponentbasert arbeidsflyt, useState, context-mønsteret og effects.",
    category: "Technologies",
  },
  {
    id: 45,
    skill_Name: ".NET",
    description:
      "Benyttet for backend til eksamensprosjektet SportsWorld og [Matflote](/showcase/8).",
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
  {
    id: 49,
    skill_Name: "Docker",
    description:
      "Jeg bruker Docker Compose til å drifte min personlige [hjemmeserver](/showcase/4). Oppsettet benytter to stacks: en for media, og en for kjerneoppgaver. Dette har gitt meg erfaring med compose-filer, container networking, reverse proxying, secrets-handling, health checks og monitoring.",
    category: "Technologies",
  },
];
