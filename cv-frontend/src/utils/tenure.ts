import type { ITenure } from "../interfaces/ITenure";
import { companyMeta, type CompanyKey } from "../styles/styles";

/** One bubble on the timeline: a tenure, with the Kristiania study years merged. */
export interface TimelinePeriod {
  id: number;
  companyKey: CompanyKey;
  company: string;
  role: string;
  start: Date;
  end: Date;
  months: number;
  durationLabel: string;
  dateRangeLabel: string;
  description?: string;
  isEducation: boolean;
  logoSrc?: string;
  logoAlt?: string;
  url?: string;
}

/** The current date, taken once per page load. */
export const today = new Date();

const monthIndexes: Record<string, number> = {
  januar: 0,
  jan: 0,
  februar: 1,
  feb: 1,
  mars: 2,
  mar: 2,
  april: 3,
  apr: 3,
  mai: 4,
  juni: 5,
  jun: 5,
  juli: 6,
  jul: 6,
  august: 7,
  aug: 7,
  september: 8,
  sep: 8,
  oktober: 9,
  okt: 9,
  november: 10,
  nov: 10,
  desember: 11,
  des: 11,
};

const monthLabels = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember",
];

export const parseTenureDate = (value: string): Date => {
  const normalized = value.trim().toLowerCase();
  const currentDate = new Date();

  if (["present", "current", "now", "nå", "d.d.", "dd"].includes(normalized)) {
    return currentDate;
  }

  const norwegianDate = normalized.match(
    /^([a-zæøå]+)\s+(\d{4})$|^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,
  );

  if (norwegianDate?.[1] && norwegianDate[2]) {
    return new Date(Number(norwegianDate[2]), monthIndexes[norwegianDate[1]] ?? 0);
  }

  if (norwegianDate?.[3] && norwegianDate[4] && norwegianDate[5]) {
    return new Date(
      Number(norwegianDate[5]),
      Number(norwegianDate[4]) - 1,
      Number(norwegianDate[3]),
    );
  }

  const isoDate = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoDate) {
    // Parse as local time so month arithmetic is not shifted by time zones.
    return new Date(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]));
  }

  const parsedDate = new Date(value);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate;
  }

  const year = normalized.match(/\d{4}/)?.[0];
  return year ? new Date(Number(year), 0) : currentDate;
};

/** Counts months inclusively, as the old timeline did (April–May is 2 months). */
export const getDurationMonths = (startDate: Date, endDate: Date): number => {
  const calendarMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth();

  if (calendarMonths > 0 && calendarMonths % 12 === 0) {
    return calendarMonths;
  }

  const inclusiveMonths = calendarMonths + 1;

  if (inclusiveMonths >= 10 && inclusiveMonths < 12) {
    return 12;
  }

  return Math.max(1, inclusiveMonths);
};

/** Whole years once a period is a year or longer ("4 år"); months below that ("6 mnd"). */
export const formatDuration = (months: number): string =>
  months < 12 ? `${months} mnd` : `${Math.round(months / 12)} år`;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const formatMonthYear = (date: Date): string =>
  `${capitalize(monthLabels[date.getMonth()])} ${date.getFullYear()}`;

export const getCompanyKey = (companyName: string): CompanyKey => {
  const name = companyName.toLowerCase();

  if (name.includes("power")) return "power";
  if (name.includes("würth") || name.includes("wurth")) return "wurth";
  if (name.includes("kristiania")) return "kristiania";
  if (name.includes("ihlang")) return "ihlang";

  return "default";
};

/** The three Kristiania study years are shown as one period. */
const combineKristianiaTenures = (tenures: ITenure[]): ITenure[] => {
  const kristiania = tenures
    .filter((tenure) => getCompanyKey(tenure.companyName) === "kristiania")
    .sort(
      (a, b) =>
        parseTenureDate(a.startDate).getTime() -
        parseTenureDate(b.startDate).getTime(),
    );

  if (kristiania.length <= 1) {
    return tenures;
  }

  const titles = [
    ...new Set(kristiania.map((tenure) => tenure.workTitle.trim()).filter(Boolean)),
  ];

  return [
    ...tenures.filter((tenure) => getCompanyKey(tenure.companyName) !== "kristiania"),
    {
      ...kristiania[0],
      companyName: "Kristiania",
      workTitle: titles.join(" / "),
      endDate: kristiania[kristiania.length - 1].endDate,
    },
  ];
};

export const buildTimelinePeriods = (tenures: ITenure[]): TimelinePeriod[] =>
  combineKristianiaTenures(tenures)
    .map((tenure) => {
      const start = parseTenureDate(tenure.startDate);
      const end = parseTenureDate(tenure.endDate);
      const months = getDurationMonths(start, end);
      const companyKey = getCompanyKey(tenure.companyName);
      const meta = companyMeta[companyKey];

      return {
        id: tenure.id,
        companyKey,
        company: tenure.companyName,
        role: tenure.workTitle,
        start,
        end,
        months,
        durationLabel: formatDuration(months),
        dateRangeLabel: `${formatMonthYear(start)} – ${formatMonthYear(end)}`,
        description: tenure.description,
        isEducation: tenure.isEducation ?? false,
        logoSrc: meta.logoSrc,
        logoAlt: meta.logoAlt,
        url: meta.url,
      };
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime());
