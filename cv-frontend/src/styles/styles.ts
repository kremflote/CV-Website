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

export const themeToggleStyles = {
  group:
    "inline-flex items-center rounded-card border border-line-strong p-0.5 text-sm",
  option:
    "cursor-pointer rounded-[8px] px-2.5 py-1 sm:px-3 font-medium leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  optionActive: "bg-ink text-bg",
  optionIdle: "text-muted hover:text-ink",
};

export const inlineTextStyles = {
  link: `text-accent-text underline underline-offset-4 transition-colors hover:text-ink`,
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

export const cardStyles = {
  card: "group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-line-strong has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-text",
  imageFrame: "relative aspect-[16/10] overflow-hidden border-b border-line bg-band",
  image: "h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]",
  imagePlaceholder:
    "grid h-full place-items-center p-6 text-center font-display text-2xl font-semibold tracking-[-0.03em] text-muted",
  grade:
    "absolute top-3 left-3 rounded-chip bg-accent px-2.5 py-1 text-[13px] font-semibold text-accent-ink",
  body: "flex flex-1 flex-col p-5 sm:p-6",
  category: "text-[13px] font-medium text-accent-text",
  title:
    "mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink",
  /* Stretched link: the ::after covers the whole card, so the card is one tab stop. */
  link: "text-ink no-underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none",
  description: "mt-2 line-clamp-2 text-[15px] leading-[1.5] text-muted",
  chips: "mt-auto flex flex-wrap gap-1.5 pt-4",
  chip: "rounded-chip border border-line-strong px-2 py-0.5 font-mono text-xs text-muted",
};

export const featuredStyles = {
  status: "py-8 text-muted",
  inlineLink: "text-accent-text underline underline-offset-4 hover:text-ink",
  grid: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
  allLink:
    "inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-accent-text no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
};

export const galleryStyles = {
  gallery: "mt-10",
  frame: "aspect-[16/10] overflow-hidden rounded-card border border-line bg-band",
  image: "h-full w-full",
  imageCover: "object-cover object-top",
  imageContain: "object-contain",
  controls:
    "mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
  thumbs: "-m-1 flex gap-2 overflow-x-auto p-1",
  thumb:
    "h-14 w-[88px] shrink-0 cursor-pointer overflow-hidden rounded-chip border-2 bg-band transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  thumbActive: "border-accent-text",
  thumbIdle: "border-transparent opacity-70 hover:opacity-100",
  thumbImage: "h-full w-full object-cover object-top",
  counterRow: "flex items-center gap-3 self-end sm:self-auto",
  counter: "min-w-[96px] text-center font-mono text-[13px] text-muted",
  arrow:
    "grid h-10 w-10 cursor-pointer place-items-center rounded-card border border-line-strong text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
};

export const projectStyles = {
  status: "py-16 text-muted",
  header: "pt-10 pb-10 sm:pt-14",
  back: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  category: "mt-6 text-[13px] font-medium text-accent-text",
  titleRow:
    "mt-3 grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-12",
  title:
    "font-display text-[clamp(40px,6vw,80px)] font-semibold leading-none tracking-[-0.045em] text-ink break-words",
  lead: "text-lg leading-[1.5] text-muted md:pb-1",
  facts:
    "flex flex-col gap-5 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between",
  factList: "flex flex-wrap gap-x-10 gap-y-4",
  factLabel: "text-[13px] text-muted",
  factValue: "mt-0.5 text-base font-medium text-ink",
  body: "mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16",
  main: "min-w-0 space-y-12",
  section: "max-w-[68ch]",
  sectionTitle:
    "flex items-center gap-3 font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-ink",
  gradeBadge:
    "inline-block rounded-chip bg-accent px-2.5 py-0.5 font-sans text-sm font-semibold tracking-normal text-accent-ink",
  paragraph: "mt-4 text-base leading-[1.55] text-ink break-words",
  list: "mt-4 border-t border-line",
  listItem:
    "grid grid-cols-[40px_minmax(0,1fr)] gap-2 border-b border-line py-3.5 text-base leading-[1.55] text-ink break-words",
  listNumber: "pt-0.5 font-mono text-[13px] text-accent-text",
  subheading: "mt-6 text-base font-semibold leading-snug text-ink",
  bullets:
    "mt-3 list-disc space-y-1.5 pl-5 text-base leading-[1.55] text-ink marker:text-accent-text",
  sidebar:
    "self-start space-y-8 rounded-card border border-line bg-surface p-6 lg:sticky lg:top-24",
  sidebarTitle: "text-[13px] font-medium text-muted",
  chips: "mt-3 flex flex-wrap gap-1.5",
  chip: "rounded-chip border border-line-strong px-2 py-0.5 font-mono text-xs text-ink",
  links: "mt-3 space-y-2",
  link: "inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-text underline underline-offset-4 hover:text-ink",
  pager: "mt-20 mb-16 grid grid-cols-2 gap-4 border-t border-line pt-8",
  pagerLink:
    "flex min-w-0 flex-col gap-1 rounded-card p-2 -m-2 no-underline focus-visible:outline-2 focus-visible:outline-accent-text",
  pagerNext: "col-start-2 items-end text-right",
  pagerLabel: "text-[13px] text-muted",
  pagerTitle:
    "font-display text-lg font-semibold tracking-[-0.03em] text-ink sm:text-2xl",
};

export const notFoundStyles = {
  section: "py-24 sm:py-32",
  label: "text-[13px] font-medium text-accent-text",
  title:
    "mt-3 font-display text-[clamp(40px,7.2vw,104px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  body: "mt-6 max-w-[56ch] text-lg text-muted",
  actions: "mt-10 flex flex-wrap gap-3",
};

export const skillStyles = {
  status: "py-8 text-muted",
  pageLayout:
    "grid gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-16",
  modalLayout: "grid gap-8",
  groups: "space-y-8",
  groupTitle: "mb-3 text-[13px] font-medium text-muted",
  chips: "flex flex-wrap gap-2",
  chip: "min-h-10 cursor-pointer rounded-chip border px-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  chipIdle: "border-line-strong bg-transparent text-ink hover:border-ink",
  chipSelected: "border-accent bg-accent text-accent-ink",
  /* The descriptions share one grid cell, so the area keeps the height of the longest. */
  description: "grid self-start",
  /* The CV modal keeps an accent rule under the descriptions; the home page has none. */
  descriptionModalRule: "border-b-2 border-accent-text pb-6",
  descriptionItem: "[grid-area:1/1]",
  skillName:
    "font-display text-[28px] font-semibold leading-none tracking-[-0.045em] text-ink sm:text-[34px]",
  skillNameSmall:
    "font-display text-2xl font-semibold leading-none tracking-[-0.045em] text-ink",
  descriptionText: "mt-4 text-lg leading-[1.55] text-ink",
  descriptionSecondary: "mt-4 text-base leading-[1.55] text-muted",
  descriptionLabel: "font-semibold text-ink",
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
  /* Between the phone layout (below 768px) and ~1100px the track scrolls sideways. */
  scroller: "-mx-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8",
  track: "relative min-w-[1100px]",
  axis: "absolute inset-x-0 h-px bg-line-strong",
  ruler: "absolute inset-x-0 h-px bg-line-strong",
  tick: "absolute h-2 w-px -translate-x-1/2 bg-line-strong",
  tickLabel: "absolute font-mono text-xs text-muted",
  stem: "absolute w-px -translate-x-1/2 bg-line-strong",
  stemSelected: "!bg-accent-text",
  /* Square ends, so bars of consecutive periods join into one line. */
  bar: "absolute h-1.5 bg-line-strong",
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

export const portfolioStyles = {
  header: "pt-14 pb-12 sm:pt-20 sm:pb-16",
  label: "text-[13px] font-medium text-accent-text",
  title:
    "mt-3 font-display text-[clamp(40px,7.2vw,104px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  intro: "mt-6 max-w-[56ch] text-lg text-muted",
  status: "py-8 text-muted",
  group: "border-t border-line py-12 sm:py-16",
  groupTitle:
    "mb-8 flex items-baseline gap-3 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none tracking-[-0.045em] text-ink",
  count: "font-mono text-sm font-normal tracking-normal text-muted",
};

export const cvModalStyles = {
  /* The backdrop is a neutral scrim; the handover has no token for it. */
  dialog:
    "m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-black/60 sm:h-[min(92dvh,1000px)] sm:w-[min(94vw,1400px)]",
  panel:
    "flex h-full flex-col overflow-hidden bg-surface sm:rounded-card sm:border sm:border-line",
  header:
    "flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6",
  title: "font-display text-xl font-semibold tracking-[-0.03em] text-ink",
  headerActions: "flex items-center gap-2 sm:gap-4",
  textLink:
    "inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-medium text-accent-text underline underline-offset-4 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  closeButton:
    "grid h-11 w-11 cursor-pointer place-items-center rounded-card border border-line-strong text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text",
  content:
    "grid min-h-0 flex-1 content-start overflow-y-auto lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:content-stretch lg:overflow-hidden",
  /* Phone browsers rarely render a PDF inline; they get the "Åpne PDF" link instead. */
  frame: "hidden h-[70dvh] w-full border-0 bg-white md:block lg:h-full",
  skillPane:
    "min-h-0 p-5 sm:p-6 md:border-t md:border-line lg:overflow-y-auto lg:border-t-0 lg:border-l",
};

export const contactStyles = {
  section: "bg-contact-bg text-contact-ink",
  inner: "py-20 sm:py-28",
  headline:
    "max-w-[16ch] font-display text-[clamp(36px,5vw,72px)] font-semibold leading-none tracking-[-0.045em]",
  actions: "mt-10 flex flex-wrap gap-3",
  primary:
    "inline-flex min-h-12 max-w-full cursor-pointer items-center gap-2.5 rounded-card bg-contact-btn-bg px-5 text-[15px] font-semibold break-all text-contact-btn-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-contact-ink",
  outline:
    "inline-flex min-h-12 items-center gap-2 rounded-card border border-contact-ink px-5 text-[15px] font-semibold text-contact-ink no-underline transition-colors hover:bg-contact-ink hover:text-contact-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-contact-ink",
  status: "mt-4 min-h-6 text-sm",
};
