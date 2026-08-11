import type { CSSProperties } from "react";

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

export const colorPalette = {
  surface: "#050505",
  surfaceRaised: "#111111",
  text: "#d9d4c8",
  accent: "#c8b895",
  panel: "#c3c5c4",
  inverseText: "#111111",
  pureWhite: "#ffffff",
  pureBlack: "#000000",
  error: "#ef4444",
  overlayDark: "rgba(17,17,17,0.91)",
  overlayGreySoft: "rgba(115,115,115,0.1)",
  overlayGreyStrong: "rgba(115,115,115,0.42)",
} as const;

export const colorVariables = {
  "--site-surface": colorPalette.surface,
  "--site-surface-raised": colorPalette.surfaceRaised,
  "--site-text": colorPalette.text,
  "--site-text-90": "rgba(217,212,200,0.9)",
  "--site-text-88": "rgba(217,212,200,0.88)",
  "--site-text-85": "rgba(217,212,200,0.85)",
  "--site-text-80": "rgba(217,212,200,0.8)",
  "--site-text-75": "rgba(217,212,200,0.75)",
  "--site-text-70": "rgba(217,212,200,0.7)",
  "--site-text-68": "rgba(217,212,200,0.68)",
  "--site-text-65": "rgba(217,212,200,0.65)",
  "--site-text-60": "rgba(217,212,200,0.6)",
  "--site-text-55": "rgba(217,212,200,0.55)",
  "--site-text-35": "rgba(217,212,200,0.35)",
  "--site-accent": colorPalette.accent,
  "--site-accent-90": "rgba(200,184,149,0.9)",
  "--site-accent-75": "rgba(200,184,149,0.75)",
  "--site-accent-70": "rgba(200,184,149,0.7)",
  "--site-accent-55": "rgba(200,184,149,0.55)",
  "--site-accent-30": "rgba(200,184,149,0.3)",
  "--site-accent-25": "rgba(200,184,149,0.25)",
  "--site-accent-20": "rgba(200,184,149,0.2)",
  "--site-accent-18": "rgba(200,184,149,0.18)",
  "--site-accent-16": "rgba(200,184,149,0.16)",
  "--site-accent-10": "rgba(200,184,149,0.1)",
  "--site-panel-26": "rgba(195,197,196,0.26)",
  "--site-panel-18": "rgba(195,197,196,0.18)",
  "--site-panel-14": "rgba(195,197,196,0.14)",
  "--site-surface-95": "rgba(5,5,5,0.95)",
  "--site-surface-35": "rgba(5,5,5,0.35)",
  "--site-inverse": colorPalette.inverseText,
  "--site-white": colorPalette.pureWhite,
  "--site-white-80": "rgba(255,255,255,0.8)",
  "--site-white-75": "rgba(255,255,255,0.75)",
  "--site-white-65": "rgba(255,255,255,0.65)",
  "--site-white-30": "rgba(255,255,255,0.3)",
  "--site-white-15": "rgba(255,255,255,0.15)",
  "--site-white-10": "rgba(255,255,255,0.1)",
  "--site-white-04": "rgba(255,255,255,0.04)",
  "--site-black": colorPalette.pureBlack,
  "--site-black-75": "rgba(0,0,0,0.75)",
  "--site-black-60": "rgba(0,0,0,0.6)",
  "--site-black-45": "rgba(0,0,0,0.45)",
  "--site-black-35": "rgba(0,0,0,0.35)",
  "--site-black-30": "rgba(0,0,0,0.3)",
  "--site-black-25": "rgba(0,0,0,0.25)",
  "--site-error": colorPalette.error,
  "--site-page-gradient": `linear-gradient(to top right,${colorPalette.overlayDark},${colorPalette.overlayGreySoft})`,
  "--site-hero-overlay": `linear-gradient(to top right,${colorPalette.overlayDark},${colorPalette.overlayGreyStrong})`,
} as CSSProperties;

const siteColorClasses = {
  surfaceBg: "bg-[var(--site-surface)]",
  surfaceBg35: "bg-[var(--site-surface-35)]",
  surfaceBg95: "bg-[var(--site-surface-95)]",
  text: "text-[var(--site-text)]",
  text90: "text-[var(--site-text-90)]",
  text88: "text-[var(--site-text-88)]",
  text85: "text-[var(--site-text-85)]",
  text80: "text-[var(--site-text-80)]",
  text75: "text-[var(--site-text-75)]",
  text70: "text-[var(--site-text-70)]",
  text68: "text-[var(--site-text-68)]",
  text65: "text-[var(--site-text-65)]",
  text60: "text-[var(--site-text-60)]",
  text55: "text-[var(--site-text-55)]",
  textBorder35: "border-[var(--site-text-35)]",
  accentText: "text-[var(--site-accent)]",
  accentText75: "text-[var(--site-accent-75)]",
  accentText70: "text-[var(--site-accent-70)]",
  accentBg: "bg-[var(--site-accent)]",
  accentBg18: "bg-[var(--site-accent-18)]",
  accentBg16: "bg-[var(--site-accent-16)]",
  accentBg10: "bg-[var(--site-accent-10)]",
  accentBorder90: "border-[var(--site-accent-90)]",
  accentBorder70: "border-[var(--site-accent-70)]",
  accentBorder55: "border-[var(--site-accent-55)]",
  accentBorder30: "border-[var(--site-accent-30)]",
  accentBorder25: "border-[var(--site-accent-25)]",
  accentBorder20: "border-[var(--site-accent-20)]",
  panelBg26: "bg-[var(--site-panel-26)]",
  panelBg18: "bg-[var(--site-panel-18)]",
  panelBg14: "bg-[var(--site-panel-14)]",
  inverseText: "text-[var(--site-inverse)]",
  whiteText: "text-[var(--site-white)]",
  whiteText80: "text-[var(--site-white-80)]",
  whiteText75: "text-[var(--site-white-75)]",
  whiteText65: "text-[var(--site-white-65)]",
  whiteBorder30: "border-[var(--site-white-30)]",
  whiteBorder15: "border-[var(--site-white-15)]",
  whiteBg10: "bg-[var(--site-white-10)]",
  whiteBg04: "bg-[var(--site-white-04)]",
  whiteBg: "bg-[var(--site-white)]",
  blackBg75: "bg-[var(--site-black-75)]",
  blackBg35: "bg-[var(--site-black-35)]",
  blackBg25: "bg-[var(--site-black-25)]",
  errorText: "text-[var(--site-error)]",
  shadow35: "shadow-[var(--site-black-35)]",
  shadow45: "shadow-[var(--site-black-45)]",
  shadow60: "shadow-[var(--site-black-60)]",
  shadow30: "shadow-[var(--site-black-30)]",
};

export const pageStyles = {
  errorText: siteColorClasses.errorText,
  loadingText: `text-center text-xl font-extralight ${siteColorClasses.whiteText65}`,
};

export const fadeStyles = {
  pageShell: "[background-image:var(--site-page-gradient)]",
  homeShell: "[background-image:var(--site-page-gradient)]",
  heroOverlay: "[background:var(--site-hero-overlay)]",
};

export const standardPaletteClasses = {
  background: siteColorClasses.surfaceBg,
  accentText: siteColorClasses.text,
  quietText: siteColorClasses.text55,
  highlightText: siteColorClasses.accentText,
};

export const headerStyles = {
  header: "relative",
  hero: "relative h-[460px] overflow-hidden",
  heroImage:
    "absolute inset-0 bg-[url('/images/background2.jpg')] bg-cover bg-center",
  heroOverlay: `absolute inset-0 ${fadeStyles.heroOverlay}`,
  heroContent:
    "relative z-10 mx-auto grid h-full w-full max-w-[1800px] grid-cols-1 items-start gap-12 px-5 sm:grid-cols-[1fr_520px]",
  heroText: "pt-[118px]",
  kicker: `text-3xl font-[200] leading-none ${siteColorClasses.text90}`,
  pageTitle: `mt-2 text-5xl font-[300] leading-none ${siteColorClasses.accentText} sm:text-6xl`,
  quote:
    `mt-20 max-w-3xl text-2xl font-[200] italic leading-snug ${siteColorClasses.text85} [&_span]:font-[600] [&_span]:text-[var(--site-white)]`,
  nav: "mx-auto w-full max-w-[1800px] px-5",
  navInner: "flex w-full items-center justify-between gap-6",
  navList:
    `flex items-center justify-start gap-5 py-5 text-2xl font-[300] ${siteColorClasses.accentText}`,
  navAction: "flex items-center justify-end py-5",
  navLinkBase:
    `flex h-8 min-w-11 items-center justify-center rounded-[6px] px-1.5 leading-none ${siteColorClasses.accentText} no-underline transition-colors hover:text-[var(--site-white)]`,
  navLinkActive:
    `${siteColorClasses.accentBg} font-[600] !text-[var(--site-inverse)] hover:!text-[var(--site-inverse)]`,
  navButton:
    `flex h-8 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-[6px] border-0 ${siteColorClasses.accentBg} px-3 text-2xl font-[500] leading-none ${siteColorClasses.inverseText} transition-colors hover:bg-[var(--site-text)] hover:text-[var(--site-surface)]`,
};

export const footerStyles = {
  footer: `${standardPaletteClasses.background} py-8`,
  signature: `text-center text-base ${standardPaletteClasses.quietText}`,
};

export const appStyles = {
  shell: `relative min-h-screen overflow-x-clip ${siteColorClasses.surfaceBg} ${siteColorClasses.text} ${fadeStyles.pageShell}`,
  overlay: "relative min-h-screen",
  contentBackground: "bg-transparent",
};

export const homeStyles = {
  sketchShell: `relative min-h-screen ${siteColorClasses.surfaceBg} ${siteColorClasses.accentText} ${fadeStyles.homeShell}`,
  sketchPhoto: "relative hidden w-full sm:block",
  sketchPhotoFrame: "relative aspect-[1.55/1] w-full overflow-hidden",
  sketchPhotoImage:
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
  sketchPhotoCaption: `mt-3 text-right text-base font-[300] ${siteColorClasses.whiteText}`,
  timelineGradientShell: "relative w-full",
};

export const skillStyles = {
  shell: `grid min-h-full grid-cols-1 items-stretch gap-3 ${standardPaletteClasses.accentText}`,
  controlColumn: "min-w-0",
  tagBase:
    "cursor-pointer border px-4 py-2 text-base font-[300] tracking-normal transition-all duration-300",
  tagSelected: `${siteColorClasses.accentBorder90} ${siteColorClasses.accentBg18} ${siteColorClasses.accentText}`,
  tagUnselected:
    `${siteColorClasses.textBorder35} bg-transparent ${siteColorClasses.text70} hover:border-[var(--site-accent-75)] hover:bg-[var(--site-accent-16)] hover:text-[var(--site-text)]`,
  groupTitle: `mb-4 text-lg font-[600] ${siteColorClasses.text}`,
  descriptionPanel: "min-h-[660px]",
  descriptionContent: `border-t ${siteColorClasses.accentBorder55} px-0 pt-2`,
  descriptionStrong: `text-lg font-[300] leading-relaxed ${siteColorClasses.text88}`,
  descriptionText: `text-base font-[300] leading-relaxed ${siteColorClasses.text68}`,
  descriptionLabel: `font-[600] ${siteColorClasses.text}`,
  loadingText: `mt-8 text-center ${siteColorClasses.text60}`,
  emptyText: `text-base font-[300] leading-relaxed ${siteColorClasses.text55}`,
};

export const glassStyles = {
  panel: `${siteColorClasses.panelBg14} shadow-2xl ${siteColorClasses.shadow35}`,
  softPanel: `${siteColorClasses.surfaceBg35} shadow-xl ${siteColorClasses.shadow30}`,
  title: `text-6xl font-[300] leading-none ${siteColorClasses.accentText} sm:text-7xl`,
  body: `text-xl font-extralight leading-relaxed ${siteColorClasses.text70}`,
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
  bubbleActive:
    "-translate-y-2 scale-110 shadow-2xl shadow-black/45 ring-2 ring-[#c8b895]/55",
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
  detailLayout:
    "grid w-full grid-cols-1 gap-12 px-4 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.8fr)] lg:items-stretch lg:gap-16 lg:px-8 lg:py-16",
  detailTimelineColumn: "min-w-0",
  detailPanelColumn: "min-w-0 lg:flex lg:items-start lg:self-stretch",
  detailPanel:
    "rounded-md bg-transparent px-7 py-8 shadow-none backdrop-blur-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:max-w-[440px] lg:overflow-y-auto",
  detailPanelHint: "text-xl font-extralight leading-relaxed text-[#d9d4c8]/65",
  detailPanelEyebrow:
    "text-base font-extralight uppercase tracking-[0.18em] text-[#d9d4c8]/55",
  detailPanelTitle:
    "mt-4 text-5xl font-[400] leading-none text-[#c8b895] sm:text-6xl",
  detailPanelRole: "mt-5 text-2xl font-[300] leading-snug text-white/88",
  detailPanelDuration: "mt-3 text-lg font-extralight text-[#d9d4c8]/60",
  detailPanelBody:
    "mt-8 text-xl font-extralight leading-relaxed text-[#d9d4c8]/72",
  detailPanelLink:
    "mt-9 inline-flex border border-[#c8b895]/30 px-5 py-3 text-lg font-[300] text-[#c8b895] no-underline transition-colors hover:border-[#c8b895]/70 hover:bg-[#c8b895]/10 hover:text-white",
};

export const showcaseStyles = {
  card: "group relative cursor-pointer transition-transform duration-300 hover:-translate-y-1",
  cardImageFrame: `overflow-hidden rounded-md ${siteColorClasses.panelBg18} shadow-2xl ${siteColorClasses.shadow35} transition-all duration-300 group-hover:bg-[var(--site-panel-26)] group-hover:shadow-[var(--site-black-45)]`,
  cardImage:
    "h-[280px] w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100",
  cardTitle:
    `mt-4 text-left text-3xl font-extralight leading-tight ${siteColorClasses.whiteText}`,
  detailImageContained:
    `max-h-[720px] w-full object-contain opacity-90 shadow-2xl ${siteColorClasses.shadow30}`,
  detailImageCover:
    `h-[640px] w-full object-cover object-left-top opacity-90 shadow-2xl ${siteColorClasses.shadow30}`,
  detailImageMobile:
    `aspect-[9/16] w-full object-cover object-left-top opacity-90 shadow-2xl ${siteColorClasses.shadow30}`,
  carouselButtonBase:
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center shadow-lg backdrop-blur-md transition-colors",
  carouselButton:
    `border ${siteColorClasses.whiteBorder15} ${siteColorClasses.blackBg25} ${siteColorClasses.whiteText75} hover:bg-[var(--site-white-10)] hover:text-[var(--site-white)]`,
  description: `text-xl font-extralight leading-relaxed ${siteColorClasses.whiteText65}`,
  detailTextStack: "mt-10 max-w-4xl space-y-8",
  detailTextSection: "space-y-3",
  detailTextTitle:
    `text-3xl font-[500] leading-tight ${siteColorClasses.accentText}`,
  githubLink:
    `mt-8 inline-flex items-center gap-3 border ${siteColorClasses.whiteBorder15} ${siteColorClasses.whiteBg04} px-5 py-3 text-lg font-extralight no-underline backdrop-blur-[41.5px] transition-all hover:border-[var(--site-white-30)] hover:bg-[var(--site-white-10)]`,
  link: `${siteColorClasses.whiteText80} hover:text-[var(--site-white)]`,
};

export const portfolioStyles = {
  section: "mb-24 px-5 py-16",
  categoryStack: "space-y-20",
  categoryTitle:
    `mb-7 text-4xl font-[300] leading-none ${siteColorClasses.accentText} sm:text-5xl`,
  grid: "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
};

export const cvModalStyles = {
  backdrop:
    `fixed inset-0 z-50 flex items-center justify-center ${siteColorClasses.blackBg75} px-4 py-6 backdrop-blur-sm`,
  panel:
    `relative h-full max-h-[70vh] w-full max-w-[1500px] ${siteColorClasses.surfaceBg} p-4 shadow-2xl ${siteColorClasses.shadow60} sm:p-6`,
  closeButton:
    `absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center border ${siteColorClasses.accentBorder70} ${siteColorClasses.surfaceBg95} text-xl font-[500] ${siteColorClasses.accentText} transition-colors hover:bg-[var(--site-accent)] hover:text-[var(--site-surface)]`,
  contentGrid:
    "grid h-full grid-cols-1 gap-6 overflow-y-auto pr-1 pt-12 lg:grid-cols-[minmax(420px,0.95fr)_minmax(360px,0.8fr)] lg:overflow-hidden lg:pt-0",
  frame: `min-h-[480px] w-full ${siteColorClasses.whiteBg} lg:h-full lg:min-h-0`,
  skillPane:
    `min-h-[360px] overflow-y-auto border-t ${siteColorClasses.accentBorder20} pt-6 lg:min-h-0 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0`,
};

export const contactStyles = {
  section: "mb-14 py-8 sm:mb-24 sm:py-16",
  cardGrid:
    "mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8",
  card: `mx-auto flex w-full max-w-[420px] flex-col items-center justify-center gap-4 rounded-md ${siteColorClasses.panelBg18} px-6 py-7 text-center shadow-2xl ${siteColorClasses.shadow35} sm:aspect-square sm:max-w-[540px] sm:gap-8 sm:px-14 sm:py-16`,
  action:
    "inline-flex max-w-full cursor-pointer items-center justify-center break-all px-4 py-3 text-base font-extralight no-underline transition-all duration-300 sm:px-6 sm:py-4 sm:text-xl",
  title: `text-4xl font-[300] leading-none ${siteColorClasses.accentText} sm:text-6xl`,
  body: `text-base font-extralight leading-relaxed ${siteColorClasses.text70} sm:text-xl`,
  iconEnvelope: `fas fa-envelope text-4xl ${siteColorClasses.accentText70} sm:text-6xl`,
  iconGithub: `fab fa-github text-4xl ${siteColorClasses.accentText70} sm:text-6xl`,
  button:
    `border ${siteColorClasses.accentBorder25} bg-transparent ${siteColorClasses.text85} hover:border-[var(--site-accent-55)] hover:bg-[var(--site-accent-10)] hover:text-[var(--site-white)]`,
  copiedText: `min-h-[1.75rem] text-base font-extralight transition-opacity duration-200 ${siteColorClasses.text65} sm:text-lg`,
};
