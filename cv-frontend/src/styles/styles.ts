export const colors = {
  pageBackground: "bg-concrete",
  surfaceDark: "bg-marble",
  brandText: "text-travertine",
  headingText: "text-wood",
  bodyText: "text-gray-800",
  mutedText: "text-gray-600",
  secondaryText: "text-gray-700",
  accentText: "text-wood-dark",
  divider: "border-wood",
  dangerText: "text-red-500",
  inverseText: "text-white",
  footerText: "text-gray-400",
  overlayDark: "bg-black/60",
  overlayBrand: "bg-marble/30",
  controlOverlay: "bg-marble/60",
  controlOverlayHover: "hover:bg-marble",
  glassPanel: "bg-white/30",
  glassHover: "group-hover:bg-white/30",
  glassNav: "bg-white/10",
  glassNavHover: "hover:bg-white/10",
  glassActiveText: "text-white",
  transparent: "bg-transparent",
  contactGradient: "bg-gradient-to-b from-marble via-stone-500 to-concrete",
};

export const companyColors = {
  power: "bg-orange-600",
  kristiania: "bg-rose-700",
  wurth: "bg-red-900",
  ihlang: "bg-orange-400",
  default: "bg-wood",
};

export const pageStyles = {
  main: colors.pageBackground,
  title: `text-center ${colors.headingText} text-4xl font-semibold`,
  titleLeft: `${colors.headingText} text-4xl font-semibold`,
  headingText: colors.headingText,
  divider: `${colors.divider}`,
  bodyText: colors.bodyText,
  mutedText: colors.mutedText,
  secondaryText: colors.secondaryText,
  accentText: colors.accentText,
  errorText: colors.dangerText,
};

export const headerStyles = {
  header: `py-2 ${colors.surfaceDark}`,
  nav: "flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-28",
  logo: `text-center ${colors.brandText} hover:text-white sm:text-left`,
  logoFirstName: "font-nunito text-4xl sm:text-5xl lg:text-6xl",
  logoLastName:
    "-mt-2 block font-nunito text-2xl sm:ml-10 sm:text-3xl lg:ml-16 lg:text-4xl",
  navList:
    "flex items-center justify-center gap-1 overflow-x-auto text-lg sm:justify-end lg:text-2xl",
  navLinkBase:
    `flex h-11 min-w-11 items-center justify-center rounded px-3 ${colors.brandText} transition-colors hover:bg-white/10 hover:text-white`,
  navLinkActive: `${colors.glassNav} ${colors.glassActiveText}`,
};

export const footerStyles = {
  footer: `py-16 ${colors.surfaceDark}`,
  signature: `text-center text-sm ${colors.footerText}`,
};

export const interactionStyles = {
  floatingGlass:
    "opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-marble/20 group-hover:backdrop-blur-xl",
};

export const skillStyles = {
  tagBase: "cursor-pointer rounded border px-3 py-1 text-md transition-colors",
  tagSelected: "border-wood bg-wood text-white",
  tagUnselected:
    "border-wood bg-transparent text-wood-dark hover:bg-wood hover:text-white",
  descriptionStrong: `text-lg ${colors.accentText} font-semibold`,
  descriptionText: `text-lg ${colors.accentText}`,
};

export const timelineStyles = {
  line: "bg-wood-dark/70",
  dot: "border-wood-dark bg-concrete",
  contactBar: `${colors.contactGradient} shadow-md`,
  floatingDetails: `${colors.bodyText} ${interactionStyles.floatingGlass} ${colors.glassHover}`,
  mutedDetails: colors.mutedText,
  durationText: colors.accentText,
};

export const showcaseStyles = {
  cardOverlay: colors.overlayBrand,
  cardTitle: `${colors.overlayDark} ${colors.inverseText}`,
  carouselButton: `${colors.controlOverlay} ${colors.inverseText} ${colors.controlOverlayHover}`,
  description: colors.secondaryText,
  link: colors.headingText,
};

export const contactStyles = {
  button:
    "border-wood text-wood-dark hover:bg-wood hover:text-white",
  copiedText: colors.accentText,
};
