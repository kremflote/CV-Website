export type CompanyKey =
  | "ihlang"
  | "power"
  | "wurth"
  | "kristiania"
  | "default";

export const companyMeta: Record<
  CompanyKey,
  {
    color: string;
    logoSrc?: string;
    logoAlt?: string;
    url?: string;
  }
> = {
  power: {
    color: "#D46A2C",
    logoSrc: "/images/Power_logo.png",
    logoAlt: "POWER",
    url: "https://www.power.no/",
  },
  wurth: {
    color: "#FFFFFF",
    logoSrc: "/images/wuerth-logo.svg",
    logoAlt: "Würth",
    url: "https://www.wuerth.no/no/forside.php",
  },
  kristiania: {
    color: "#FFFFFF",
    logoSrc: "/images/kristiania_logo.png",
    logoAlt: "Kristiania",
    url: "https://www.kristiania.no/",
  },
  ihlang: {
    color: "#242426",
    logoSrc: "/images/fjellsprengern.png",
    logoAlt: "Fjellsprengern Leif Ihlang AS",
    url: "https://www.fjellsprengern.no/",
  },
  default: {
    color: "#d9d4c8",
  },
};

export const pageStyles = {
  errorText: "text-red-500",
};

export const fadeStyles = {
  pageShell:
    "[background-image:linear-gradient(to_top_right,rgba(17,17,17,0.91),rgba(115,115,115,0.1))]",
  homeShell:
    "[background-image:linear-gradient(to_top_right,rgba(17,17,17,0.91),rgba(115,115,115,0.1))]",
  heroOverlay:
    "[background:linear-gradient(to_top_right,rgba(17,17,17,0.91),rgba(115,115,115,0.42))]",
};

export const standardPaletteClasses = {
  background: "bg-[#050505]",
  accentText: "text-[#d9d4c8]",
  quietText: "text-[#d9d4c8]/55",
  highlightText: "text-[#c8b895]",
};

export const headerStyles = {
  header: "relative",
  hero: "relative h-[460px] overflow-hidden",
  heroImage:
    "absolute inset-0 bg-[url('/images/background2.jpg')] bg-cover bg-center",
  heroOverlay: `absolute inset-0 ${fadeStyles.heroOverlay}`,
  heroContent:
    "relative z-10 mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-8 py-16 sm:px-16",
  kicker: "text-3xl font-[200] leading-none text-[#d9d4c8]/90",
  pageTitle: "mt-2 text-6xl font-[300] leading-none text-[#c8b895] sm:text-7xl",
  quote:
    "mt-16 max-w-3xl text-2xl font-[200] italic leading-snug text-[#d9d4c8]/85",
  nav: "mx-auto flex w-full max-w-[1320px] justify-end px-8 sm:px-16",
  navList:
    "flex items-center justify-end gap-5 py-5 text-2xl font-[300] text-[#c8b895]",
  navLinkBase:
    "flex h-8 min-w-11 items-center justify-center px-1.5 leading-none text-[#c8b895] no-underline transition-colors hover:text-white",
  navLinkActive:
    "bg-[#c8b895] font-[600] !text-[#111111] hover:!text-[#111111]",
  navButton:
    "flex h-8 min-w-11 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-2xl font-[300] leading-none text-[#c8b895] transition-colors hover:text-white",
};

export const footerStyles = {
  footer: `${standardPaletteClasses.background} py-8`,
  signature: `text-center text-base ${standardPaletteClasses.quietText}`,
};

export const appStyles = {
  shell: `relative min-h-screen overflow-hidden bg-[#050505] text-[#d9d4c8] ${fadeStyles.pageShell}`,
  overlay: "relative min-h-screen",
  contentBackground: "bg-transparent",
};

export const homeStyles = {
  sketchShell: `relative min-h-screen bg-[#050505] text-[#c8b895] ${fadeStyles.homeShell}`,
  sketchHero: "relative h-[460px] overflow-hidden",
  sketchHeroImage:
    "absolute inset-0 bg-[url('/images/background2.jpg')] bg-cover bg-center",
  sketchOverlay: `absolute inset-0 ${fadeStyles.heroOverlay}`,
  sketchHeroContent:
    "relative z-10 mx-auto grid h-full w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-8 py-16 sm:grid-cols-[1fr_520px] sm:px-16",
  sketchHeroText: "pt-10 sm:pt-0",
  sketchKicker: "text-3xl font-[200] leading-none text-[#d9d4c8]/90",
  sketchTitle:
    "mt-2 text-5xl font-[300] leading-none text-[#c8b895] sm:text-6xl",
  sketchQuote:
    "mt-20 text-2xl font-[200] italic leading-snug text-[#d9d4c8]/85 [&_span]:font-[600] [&_span]:text-white",
  sketchPhoto: "relative hidden w-full sm:block",
  sketchPhotoFrame: "relative aspect-[1.55/1] w-full overflow-hidden",
  sketchPhotoImage:
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
  sketchPhotoCaption: "mt-3 text-right text-base font-[300] text-white",
  sketchNav:
    "mx-auto flex w-full max-w-[1320px] items-center justify-end gap-5 px-8 py-5 text-2xl font-[300] text-[#c8b895] sm:px-16",
  sketchNavActive:
    "flex h-8 min-w-11 items-center justify-center bg-[#c8b895] px-1.5 font-[600] leading-none !text-[#111111] no-underline hover:!text-[#111111]",
  sketchNavLink:
    "flex h-8 min-w-11 items-center justify-center px-1.5 leading-none text-[#c8b895] no-underline transition-colors hover:text-white",
  sketchNavButton:
    "flex h-8 min-w-11 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-2xl font-[300] leading-none text-[#c8b895] transition-colors hover:text-white",
  timelineGradientShell: "relative w-full",
  sketchLowerStack: "flex w-full flex-col gap-24 py-16 sm:py-12",
  skillEdgeSection:
    "mr-auto w-full max-w-[1320px] px-6 sm:pr-16 sm:pl-8 lg:pl-12",
  sketchSkillPanel: "px-0 py-2",
};

export const skillStyles = {
  shell: `grid min-h-full grid-cols-1 items-stretch gap-12 ${standardPaletteClasses.accentText} lg:grid-cols-2`,
  controlColumn: "min-w-0 lg:min-h-[420px]",
  tagBase:
    "cursor-pointer border px-4 py-2 text-base font-[300] tracking-normal transition-all duration-300",
  tagSelected: "border-[#c8b895]/90 bg-[#c8b895]/18 text-[#c8b895]",
  tagUnselected:
    "border-[#d9d4c8]/35 bg-transparent text-[#d9d4c8]/70 hover:border-[#c8b895]/75 hover:bg-[#c8b895]/16 hover:text-[#d9d4c8]",
  groupTitle: "mb-4 text-lg font-[600] text-[#d9d4c8]",
  descriptionPanel: "lg:min-h-[280px]",
  descriptionContent:
    "border-t border-[#c8b895]/55 px-0 pt-8 lg:border-t-0 lg:border-l lg:px-10 lg:pt-0",
  descriptionStrong: "text-lg font-[300] leading-relaxed text-[#d9d4c8]/88",
  descriptionText: "text-base font-[300] leading-relaxed text-[#d9d4c8]/68",
  loadingText: "mt-8 text-center text-[#d9d4c8]/60",
  emptyText: "text-base font-[300] leading-relaxed text-[#d9d4c8]/55",
};

export const glassStyles = {
  panel: "bg-[#c3c5c4]/14 shadow-2xl shadow-black/35",
  softPanel: "bg-[#050505]/35 shadow-xl shadow-black/30",
  title: "text-6xl font-[300] leading-none text-[#c8b895] sm:text-7xl",
  body: "text-xl font-extralight leading-relaxed text-[#d9d4c8]/70",
};

export const timelineStyles = {
  shell: "relative w-full bg-transparent",
  axisDot:
    "absolute rounded-full border border-white/30 bg-white/35 shadow-lg shadow-black/20",
  axisLine: "absolute w-px bg-white/25",
  axisDesktop: "hidden sm:block",
  bubbleBase:
    "relative grid shrink-0 place-items-center rounded-full transition-transform duration-300",
  bubbleDesktop:
    "peer pointer-events-auto absolute hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:shadow-black/40",
  bubbleMobile: "hover:-translate-y-1 hover:scale-105",
  textWrapper:
    "absolute w-[190px] -translate-y-1/2 transition-transform duration-300 peer-hover:scale-125",
  companyText: "text-base font-extralight leading-tight text-white/90",
  detailText: "text-base font-extralight leading-tight text-white/55",
  mobileDetailText: "text-base font-extralight leading-tight text-white/60",
  mobileList: "relative space-y-14 px-6 py-14 sm:hidden",
  mobileAxisDot:
    "absolute top-14 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white/30 bg-white/35 shadow-lg shadow-black/20",
  mobileAxisLine:
    "absolute top-[70px] bottom-[18rem] left-1/2 w-px -translate-x-1/2 bg-white/25",
  mobileItem:
    "relative z-10 grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] items-center gap-x-5",
  mobileBubbleLeft: "col-start-1 justify-self-end",
  mobileBubbleRight: "col-start-3 justify-self-start",
  mobileTextLeft: "col-start-1 row-start-1 pr-1 text-right",
  mobileTextRight: "col-start-3 row-start-1 pl-1 text-left",
  loadingText: "relative py-16 text-center text-white/65",
  emptyText: "relative py-16 text-center text-white/65",
  contactBubble:
    "rounded-full bg-[#050505]/72 text-center text-white transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-[#111111]/82 hover:shadow-2xl hover:shadow-black/40",
  contactDesktop: "absolute flex flex-col items-center justify-center px-10",
  contactMobile:
    "mx-auto flex h-56 w-56 flex-col items-center justify-center px-8",
};

export const showcaseStyles = {
  card: "group relative cursor-pointer overflow-hidden bg-[#c3c5c4]/18 shadow-2xl shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c3c5c4]/26 hover:shadow-black/45",
  cardImage:
    "h-[280px] w-full object-cover opacity-85 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100",
  cardOverlay:
    "absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 backdrop-blur-[18px] transition-opacity duration-300 group-hover:opacity-100",
  cardTitle:
    "px-6 py-4 text-center text-3xl font-extralight leading-tight text-white",
  detailImageContained:
    "max-h-[720px] w-full object-contain opacity-90 shadow-2xl shadow-black/30",
  detailImageCover:
    "h-[640px] w-full object-cover object-left-top opacity-90 shadow-2xl shadow-black/30",
  detailImageMobile:
    "aspect-[9/16] w-full object-cover object-left-top opacity-90 shadow-2xl shadow-black/30",
  carouselButtonBase:
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center shadow-lg backdrop-blur-md transition-colors",
  carouselButton:
    "border border-white/15 bg-black/25 text-white/75 hover:bg-white/10 hover:text-white",
  description: "text-xl font-extralight leading-relaxed text-white/65",
  githubLink:
    "mt-8 inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-5 py-3 text-lg font-extralight no-underline backdrop-blur-[41.5px] transition-all hover:border-white/30 hover:bg-white/10",
  link: "text-white/80 hover:text-white",
};

export const cvModalStyles = {
  backdrop:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm",
  panel:
    "relative h-full max-h-[92vh] w-full max-w-5xl bg-[#050505] p-4 shadow-2xl shadow-black/60 sm:p-6",
  closeButton:
    "absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center border border-[#c8b895]/70 bg-[#050505]/95 text-xl font-[500] text-[#c8b895] transition-colors hover:bg-[#c8b895] hover:text-[#050505]",
  frame: "h-full w-full bg-white",
};

export const contactStyles = {
  section: "mb-14 py-8 sm:mb-24 sm:py-16",
  cardGrid:
    "mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8",
  card: "mx-auto flex w-full max-w-[420px] flex-col items-center justify-center gap-4 bg-[#c3c5c4]/18 px-6 py-7 text-center shadow-2xl shadow-black/35 sm:aspect-square sm:max-w-[540px] sm:gap-8 sm:px-14 sm:py-16",
  action:
    "inline-flex max-w-full cursor-pointer items-center justify-center break-all px-4 py-3 text-base font-extralight no-underline transition-all duration-300 sm:px-6 sm:py-4 sm:text-xl",
  title: "text-4xl font-[300] leading-none text-[#c8b895] sm:text-6xl",
  body: "text-base font-extralight leading-relaxed text-[#d9d4c8]/70 sm:text-xl",
  iconEnvelope: "fas fa-envelope text-4xl text-[#c8b895]/70 sm:text-6xl",
  iconGithub: "fab fa-github text-4xl text-[#c8b895]/70 sm:text-6xl",
  button:
    "border border-[#c8b895]/25 bg-transparent text-[#d9d4c8]/85 hover:border-[#c8b895]/55 hover:bg-[#c8b895]/10 hover:text-white",
  copiedText: "text-base font-extralight text-[#d9d4c8]/65 sm:text-lg",
};
