export type CompanyKey =
  | "ihlang"
  | "power"
  | "wurth"
  | "kristiania"
  | "default";

export const companyMeta: Record<
  CompanyKey,
  {
    logoSrc?: string;
    logoAlt?: string;
    url?: string;
  }
> = {
  power: {
    logoSrc: "/images/Power_logo.png",
    logoAlt: "POWER",
    url: "https://www.power.no/",
  },
  wurth: {
    logoSrc: "/images/wuerth-logo.svg",
    logoAlt: "Würth",
    url: "https://www.wuerth.no/no/forside.php",
  },
  kristiania: {
    logoSrc: "/images/kristiania_logo.png",
    logoAlt: "Kristiania",
    url: "https://www.kristiania.no/",
  },
  ihlang: {
    logoSrc: "/images/fjellsprengern.png",
    logoAlt: "Fjellsprengern Leif Ihlang AS",
    url: "https://www.fjellsprengern.no/",
  },
  default: {},
};

/*
 * Colour classes mapped onto the theme tokens in src/index.css.
 * Interim mapping for step 1 of the redesign; later steps replace the
 * per-component styles below with the new layouts.
 */
const siteColorClasses = {
  surfaceBg: "bg-bg",
  surfaceBg35: "bg-surface",
  surfaceBg95: "bg-surface",
  text: "text-ink",
  text90: "text-ink",
  text88: "text-ink",
  text85: "text-ink",
  text80: "text-ink",
  text75: "text-muted",
  text70: "text-muted",
  text68: "text-muted",
  text65: "text-muted",
  text60: "text-muted",
  text55: "text-muted",
  textBorder35: "border-line-strong",
  accentText: "text-accent-text",
  accentText70: "text-accent-text",
  accentBg: "bg-accent",
  accentBg18: "bg-accent",
  accentBg10: "bg-surface",
  accentBorder90: "border-accent",
  accentBorder70: "border-line-strong",
  accentBorder55: "border-accent-text",
  accentBorder25: "border-line-strong",
  accentBorder20: "border-line",
  panelBg18: "bg-surface border border-line",
  panelBg14: "bg-surface border border-line",
  inverseText: "text-accent-ink",
  whiteText: "text-ink",
  whiteText80: "text-ink",
  whiteText75: "text-ink",
  whiteText65: "text-muted",
  whiteBorder15: "border-line",
  whiteBg04: "bg-surface",
  whiteBg: "bg-white",
  blackBg75: "bg-black/60",
  blackBg25: "bg-surface",
  errorText: "text-accent-text",
  shadow35: "",
  shadow60: "",
  shadow30: "",
};

export const themeToggleStyles = {
  group:
    "inline-flex items-center rounded-card border border-line-strong p-0.5 text-sm",
  option:
    "cursor-pointer rounded-[8px] px-2.5 py-1 sm:px-3 font-medium leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  optionActive: "bg-ink text-bg",
  optionIdle: "text-muted hover:text-ink",
};

export const pageStyles = {
  errorText: siteColorClasses.errorText,
  loadingText: `text-center text-xl font-extralight ${siteColorClasses.whiteText65}`,
};

export const inlineTextStyles = {
  link: `text-accent-text underline underline-offset-4 transition-colors hover:text-ink`,
};

export const standardPaletteClasses = {
  background: siteColorClasses.surfaceBg,
  accentText: siteColorClasses.text,
  quietText: siteColorClasses.text55,
};

export const layoutStyles = {
  /* Content container: max-width 1240px, 32px side padding (20px on phones). */
  container: "mx-auto w-full max-w-[1240px] px-5 sm:px-8",
  section: "border-t border-line py-16 sm:py-[88px]",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text";

export const buttonStyles = {
  base: `inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-card px-5 text-[15px] font-semibold leading-none no-underline transition-colors ${focusRing}`,
  primary: "bg-accent text-accent-ink hover:bg-ink hover:text-bg",
  outline: "border border-ink text-ink hover:bg-ink hover:text-bg",
  small: "min-h-9 px-3.5 text-sm",
};

export const headerStyles = {
  // Hero styles are interim until the hero is rebuilt in step 3.
  hero: "relative w-full px-5",
  heroContent: "mx-auto w-full max-w-[1240px] sm:px-3",
  heroText: "pt-16 pb-16 sm:pt-20",
  kicker: `text-3xl font-[200] leading-none ${siteColorClasses.text90}`,
  pageTitle: `mt-2 text-5xl font-display font-semibold tracking-[-0.045em] leading-none ${siteColorClasses.accentText} sm:text-6xl`,
  quote: `mt-14 max-w-3xl text-xl font-[200] italic leading-snug ${siteColorClasses.text85} sm:mt-20 sm:text-2xl [&_span]:font-[600] [&_span]:text-ink`,

  nav: "sticky top-0 z-40 border-b border-line bg-bg",
  navInner:
    "grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-0 pt-2.5 pb-1 md:grid-cols-[auto_1fr_auto] md:gap-x-10 md:pt-0 md:pb-0",
  wordmark: `col-start-1 row-start-1 justify-self-start rounded-[4px] font-display text-[17px] min-[380px]:whitespace-nowrap font-semibold tracking-[-0.03em] text-ink no-underline sm:text-xl ${focusRing}`,
  navList:
    "col-span-2 row-start-2 -mx-2 flex items-center gap-1 overflow-x-auto md:col-span-1 md:col-start-2 md:row-start-1 md:mx-0 md:gap-2 md:py-0",
  navLink: `inline-flex min-h-10 items-center border-b-2 border-transparent px-2 text-sm font-medium text-muted no-underline transition-colors hover:text-ink md:min-h-16 ${focusRing}`,
  navLinkActive: "!border-accent-text !text-ink",
  navActions: "flex items-center justify-end gap-2 sm:gap-3",
  cvButton: "min-h-9 px-3.5 text-sm",
};

export const footerStyles = {
  footer: "border-t border-line",
  inner: "flex items-center justify-between py-8 text-sm text-muted",
};

export const appStyles = {
  shell: "flex min-h-screen flex-col bg-bg text-ink",
  main: "flex-1",
};

export const notFoundStyles = {
  section: "py-24 sm:py-32",
  label: "text-[13px] font-medium text-accent-text",
  title:
    "mt-3 font-display text-[clamp(40px,7.2vw,104px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  body: "mt-6 max-w-[56ch] text-lg text-muted",
  actions: "mt-10 flex flex-wrap gap-3",
};

export const homeStyles = {
  shell: "",
};

export const skillStyles = {
  shell: `grid grid-cols-1 content-start gap-3 ${standardPaletteClasses.accentText}`,
  controlColumn: "min-w-0",
  tagBase:
    "cursor-pointer border px-4 py-2 text-base font-[300] tracking-normal transition-all duration-300",
  tagSelected: `${siteColorClasses.accentBorder90} ${siteColorClasses.accentBg18} ${siteColorClasses.accentText}`,
  tagUnselected: `${siteColorClasses.textBorder35} bg-transparent ${siteColorClasses.text70} hover:border-ink hover:text-ink`,
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
  panel: `${siteColorClasses.panelBg14} ${siteColorClasses.shadow35}`,
  softPanel: `${siteColorClasses.surfaceBg35} ${siteColorClasses.shadow30}`,
  title: `break-words text-5xl font-display font-semibold tracking-[-0.045em] leading-none ${siteColorClasses.accentText} sm:text-7xl`,
};

export const timelineStyles = {
  shell: "relative w-full bg-transparent",
  axisDot:
    "absolute rounded-full border border-line-strong bg-line-strong",
  axisLine: "absolute w-px bg-line-strong",
  axisDesktop: "hidden sm:block",
  bubbleBase:
    "relative grid shrink-0 place-items-center rounded-full border border-line-strong bg-surface transition-transform duration-300",
  bubbleDesktop:
    "peer pointer-events-auto absolute hover:-translate-y-2 hover:scale-110 ",
  bubbleActive:
    "-translate-y-2 scale-110 ring-2 ring-accent",
  bubbleMobile: "hover:-translate-y-1 hover:scale-105",
  textWrapper:
    "absolute w-[190px] -translate-y-1/2 transition-transform duration-300 peer-hover:scale-125",
  companyText: "text-base font-extralight leading-tight text-ink",
  detailText: "text-base font-extralight leading-tight text-muted",
  mobileDetailText: "text-base font-extralight leading-tight text-muted",
  mobileList: "relative space-y-12 px-2 py-12 min-[380px]:px-4 sm:hidden",
  mobileAxisDot:
    "absolute top-14 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-line-strong bg-line-strong",
  mobileAxisLine:
    "absolute top-[70px] bottom-[18rem] left-1/2 w-px -translate-x-1/2 bg-line-strong",
  mobileItem:
    "relative z-10 grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] items-center gap-x-3 min-[380px]:gap-x-5",
  mobileBubbleLeft: "col-start-1 justify-self-end",
  mobileBubbleRight: "col-start-3 justify-self-start",
  mobileTextLeft: "col-start-1 row-start-1 pr-1 text-right",
  mobileTextRight: "col-start-3 row-start-1 pl-1 text-left",
  loadingText: "relative py-16 text-center text-muted",
  emptyText: "relative py-16 text-center text-muted",
  contactBubble:
    "rounded-full border border-dashed border-line-strong bg-transparent text-center text-ink transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:border-accent-text ",
  contactDesktop: "absolute flex flex-col items-center justify-center px-12",
  contactMobile:
    "mx-auto flex h-56 w-56 flex-col items-center justify-center px-10",
  detailLayout:
    "grid w-full grid-cols-1 gap-12 px-4 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.8fr)] lg:items-stretch lg:gap-16 lg:px-8 lg:py-16",
  detailTimelineColumn: "min-w-0",
  detailPanelColumn: "hidden min-w-0 lg:flex lg:items-start lg:self-stretch",
  detailPanel:
    "rounded-md bg-transparent px-7 py-8 backdrop-blur-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:max-w-[440px] lg:overflow-y-auto",
  detailPanelHint: "text-xl font-extralight leading-relaxed text-muted",
  detailPanelEyebrow:
    "text-base font-extralight uppercase tracking-[0.18em] text-muted",
  detailPanelTitle:
    "mt-4 font-display text-5xl font-semibold tracking-[-0.045em] leading-none text-accent-text sm:text-6xl",
  detailPanelRole: "mt-5 text-2xl font-[300] leading-snug text-ink",
  detailPanelDuration: "mt-3 text-lg font-extralight text-muted",
  detailPanelBody:
    "mt-8 text-xl font-extralight leading-relaxed text-muted",
  detailPanelInlineLink:
    "mt-5 inline-flex max-w-full break-words text-lg font-[300] leading-relaxed text-accent-text underline underline-offset-4 transition-colors hover:text-ink",
  detailPanelLink:
    "mt-9 inline-flex border border-line-strong px-5 py-3 text-lg font-[300] text-accent-text no-underline transition-colors hover:border-ink hover:text-ink",
};

export const showcaseStyles = {
  card: `group relative cursor-pointer overflow-hidden rounded-md ${siteColorClasses.panelBg18} p-3 ${siteColorClasses.shadow35} transition-all duration-300 hover:-translate-y-1 hover:border-line-strong`,
  cardImageFrame: "overflow-hidden rounded-[4px]",
  cardImage:
    "h-[280px] w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100",
  cardTitle: `px-1 pt-4 pb-1 text-left text-3xl font-extralight leading-tight ${siteColorClasses.whiteText}`,
  detailImageContained: `max-h-[720px] w-full max-w-full object-contain opacity-90 ${siteColorClasses.shadow30}`,
  carouselButtonBase:
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center backdrop-blur-md transition-colors",
  carouselButton: `border ${siteColorClasses.whiteBorder15} ${siteColorClasses.blackBg25} ${siteColorClasses.whiteText75} hover:text-accent-text`,
  description: `break-words text-lg font-extralight leading-relaxed ${siteColorClasses.whiteText65} sm:text-xl`,
  detailTextStack: "mt-10 max-w-4xl space-y-8 break-words",
  detailTextSection: "space-y-3",
  detailTextTitle: `break-words text-2xl font-[500] leading-tight ${siteColorClasses.accentText} sm:text-3xl`,
  detailGradeA: "text-accent-text",
  detailGradeB: "text-accent-text",
  githubLink: `mt-8 inline-flex max-w-full items-center gap-3 break-words border ${siteColorClasses.whiteBorder15} ${siteColorClasses.whiteBg04} px-5 py-3 text-lg font-extralight no-underline transition-all hover:border-line-strong`,
  link: `${siteColorClasses.whiteText80} hover:text-ink`,
};

export const portfolioStyles = {
  section: "mb-24 px-5 py-16",
  categoryStack: "space-y-20",
  categoryTitle: `mb-7 text-4xl font-display font-semibold tracking-[-0.045em] leading-none ${siteColorClasses.accentText} sm:text-5xl`,
  grid: "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
};

export const cvModalStyles = {
  backdrop: `fixed inset-0 z-50 flex items-center justify-center ${siteColorClasses.blackBg75} px-4 py-3 backdrop-blur-sm`,
  panel: `relative max-h-[88vh] w-full max-w-[1760px] overflow-hidden ${siteColorClasses.surfaceBg} p-4 ${siteColorClasses.shadow60} sm:p-6`,
  closeButton: `absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center border ${siteColorClasses.accentBorder70} ${siteColorClasses.surfaceBg95} text-xl font-[500] ${siteColorClasses.accentText} transition-colors hover:bg-accent hover:text-accent-ink`,
  contentGrid:
    "grid max-h-[calc(88vh-2rem)] min-h-0 grid-cols-1 gap-6 overflow-hidden pt-12 lg:grid-cols-[minmax(560px,1.2fr)_minmax(420px,0.8fr)] lg:pt-0",
  frame: `h-[74vh] min-h-[460px] w-full ${siteColorClasses.whiteBg} lg:h-[calc(88vh-3rem)] lg:min-h-0`,
  skillPane: `min-h-0 overflow-y-auto border-t ${siteColorClasses.accentBorder20} pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0`,
};

export const contactStyles = {
  section:
    "border-t border-line px-5 py-16 sm:py-[88px]",
  cardGrid:
    "mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8",
  card: `mx-auto flex w-full max-w-[420px] flex-col items-center justify-center gap-4 rounded-md ${siteColorClasses.panelBg18} px-6 py-7 text-center ${siteColorClasses.shadow35} sm:aspect-square sm:max-w-[540px] sm:gap-8 sm:px-14 sm:py-16`,
  action:
    "inline-flex max-w-full cursor-pointer items-center justify-center break-all px-4 py-3 text-base font-extralight no-underline transition-all duration-300 sm:px-6 sm:py-4 sm:text-xl",
  title: `text-4xl font-[300] leading-none ${siteColorClasses.accentText} sm:text-6xl`,
  body: `text-base font-extralight leading-relaxed ${siteColorClasses.text70} sm:text-xl`,
  iconEnvelope: `fas fa-envelope text-4xl ${siteColorClasses.accentText70} sm:text-6xl`,
  iconGithub: `fab fa-github text-4xl ${siteColorClasses.accentText70} sm:text-6xl`,
  button: `border ${siteColorClasses.accentBorder25} bg-transparent ${siteColorClasses.text85} hover:border-ink hover:text-ink`,
  copiedText: `min-h-[1.75rem] text-base font-extralight transition-opacity duration-200 ${siteColorClasses.text65} sm:text-lg`,
};
