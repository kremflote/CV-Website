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

export const heroStyles = {
  section: "pt-14 pb-16 sm:pt-20 sm:pb-[88px]",
  label: "text-[13px] font-medium text-accent-text",
  title:
    "mt-3 font-display text-[clamp(40px,7.2vw,104px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  columns:
    "mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16",
  lead: "max-w-[30ch] text-[19px] leading-[1.45] text-muted sm:text-[22px]",
  emphasis: "font-semibold text-ink",
  actions: "mt-8 flex flex-wrap gap-3",
  summary: "self-end border-t border-line",
  summaryRow:
    "grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-line py-4",
  summaryLabel: "pt-0.5 text-[13px] text-muted",
  summaryValue: "text-base font-medium text-ink",
  summaryDetail: "mt-0.5 block text-sm font-normal text-muted",
};

export const sectionStyles = {
  band: "border-t border-line bg-band",
  plain: "border-t border-line",
  inner: "py-16 sm:py-[88px]",
  heading:
    "font-display text-[clamp(32px,3.6vw,50px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  headingRow: "mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14",
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
  status: "py-16 text-center text-muted",
  mobileOnly: "md:hidden",
  desktopOnly: "hidden md:block",
  /* Phone layout (CvTimelineMobile). */
  mList:
    "relative before:absolute before:top-8 before:bottom-8 before:left-[52px] before:w-px before:bg-line-strong",
  mRow: "relative grid min-h-[72px] w-full cursor-pointer grid-cols-[104px_minmax(0,1fr)_auto] items-center gap-3 py-2.5 text-left text-ink no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  mBubbleCell: "relative z-10 grid place-items-center",
  mBubble: "grid place-items-center rounded-full border transition-colors",
  mNextBubble:
    "border-dashed border-line-strong bg-band font-display text-xl font-semibold text-muted",
  mText: "flex min-w-0 flex-col gap-0.5 leading-tight",
  mCompany: "text-[15px] font-semibold text-ink",
  mRole: "text-[13px] text-muted",
  mChevron: "text-muted transition-transform",
  mPanel:
    "mb-3 relative z-10 min-[380px]:ml-[116px] rounded-card border border-line bg-surface p-4",
  /* Below ~1100px the track scrolls sideways (interim until the phone layout is approved). */
  scroller: "-mx-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8",
  track: "relative min-w-[1100px]",
  axis: "absolute inset-x-0 h-px bg-line-strong",
  ruler: "absolute inset-x-0 h-px bg-line-strong",
  tick: "absolute h-2 w-px -translate-x-1/2 bg-line-strong",
  tickLabel: "absolute font-mono text-xs text-muted",
  today:
    "absolute w-0 -translate-x-1/2 border-l border-dashed border-ink/60",
  todayLabel:
    "absolute top-0 left-2 whitespace-nowrap font-mono text-xs text-ink",
  stem: "absolute w-px -translate-x-1/2 bg-line-strong",
  stemSelected: "!bg-accent-text",
  bar: "absolute h-1.5 rounded-full bg-line-strong",
  barSelected: "!bg-accent-text",
  bubble:
    "absolute z-10 grid cursor-pointer place-items-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-text",
  bubbleIdle: "border-line-strong bg-surface hover:border-ink",
  bubbleSelected: "border-accent bg-accent",
  logo: "pointer-events-none max-h-[46%] max-w-[64%] object-contain",
  logoFallback: "px-2 text-center text-xs font-semibold",
  nextBubble:
    "absolute z-10 grid place-items-center rounded-full border border-dashed border-line-strong bg-bg font-display text-2xl font-semibold text-muted no-underline transition-colors hover:border-accent-text hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-text",
  label: "absolute flex flex-col gap-0.5 leading-tight",
  labelCompany: "text-sm font-semibold text-ink",
  labelRole: "text-[13px] text-muted",
  labelDuration: "font-mono text-xs text-muted",
  labelSelected: "!text-accent-text",
  panel:
    "mt-8 grid gap-6 rounded-card border border-line bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12",
  panelDates: "font-mono text-[13px] text-accent-text",
  panelCompany:
    "mt-2 font-display text-[28px] font-semibold leading-none tracking-[-0.045em] text-ink sm:text-[34px]",
  panelRole: "mt-2 text-lg text-muted",
  panelFacts: "mt-5 flex items-baseline gap-3",
  panelFactLabel: "text-[13px] text-muted",
  panelFactValue: "font-mono text-sm text-ink",
  panelBody: "text-base leading-[1.55] text-ink",
  panelActions: "mt-6 flex flex-wrap items-center gap-x-5 gap-y-3",
  panelLink: `text-sm font-medium text-accent-text underline underline-offset-4 hover:text-ink`,
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
