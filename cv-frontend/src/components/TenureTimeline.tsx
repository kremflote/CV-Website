import { useContext, type FC } from "react";
import { Link } from "react-router-dom";
import { TenureContext } from "../contexts/TenureProvider";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";
import type { ITenure } from "../interfaces/ITenure";
import TenureTimelineItem from "./TenureTimelineItem";

interface TimelineTenure {
  tenure: ITenure;
  durationMonths: number;
  startDate: Date;
}

const getBarColor = (companyName: string): string => {
  const normalizedCompanyName = companyName.toLowerCase();

  if (normalizedCompanyName.includes("power")) {
    return "bg-orange-600";
  }

  if (normalizedCompanyName.includes("kristiania")) {
    return "bg-rose-700";
  }

  if (
    normalizedCompanyName.includes("würth") ||
    normalizedCompanyName.includes("wurth")
  ) {
    return "bg-red-900";
  }

  if (normalizedCompanyName.includes("ihlang")) {
    return "bg-orange-400";
  }

  return "bg-wood";
};

const getCompanyUrl = (companyName: string): string | undefined => {
  const normalizedCompanyName = companyName.toLowerCase();

  if (normalizedCompanyName.includes("power")) {
    return "https://www.power.no/";
  }

  if (normalizedCompanyName.includes("kristiania")) {
    return "https://www.kristiania.no/";
  }

  if (
    normalizedCompanyName.includes("würth") ||
    normalizedCompanyName.includes("wurth")
  ) {
    return "https://www.wuerth.no/";
  }

  if (normalizedCompanyName.includes("ihlang")) {
    return "https://www.proff.no/selskap/fjellsprengern-leif-ihlang-as/skogbygda/bygg-og-anleggsleverand%C3%B8rer/IF99YAI0CVG";
  }

  return undefined;
};

const monthNames: Record<string, number> = {
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

const parseTenureDate = (value: string): Date => {
  const normalized = value.trim().toLowerCase();
  const currentDate = new Date();

  if (["present", "current", "now", "nå", "d.d.", "dd"].includes(normalized)) {
    return currentDate;
  }

  const norwegianDate = normalized.match(
    /^([a-zæøå]+)\s+(\d{4})$|^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,
  );

  if (norwegianDate?.[1] && norwegianDate[2]) {
    return new Date(
      Number(norwegianDate[2]),
      monthNames[norwegianDate[1]] ?? 0,
    );
  }

  if (norwegianDate?.[3] && norwegianDate[4] && norwegianDate[5]) {
    return new Date(
      Number(norwegianDate[5]),
      Number(norwegianDate[4]) - 1,
      Number(norwegianDate[3]),
    );
  }

  const parsedDate = new Date(value);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate;
  }

  const year = normalized.match(/\d{4}/)?.[0];
  return year ? new Date(Number(year), 0) : currentDate;
};

const getDurationMonths = (startDate: Date, endDate: Date): number => {
  const yearDifference = endDate.getFullYear() - startDate.getFullYear();
  const monthDifference = endDate.getMonth() - startDate.getMonth();

  return Math.max(1, yearDifference * 12 + monthDifference + 1);
};

const formatDuration = (months: number): string => {
  if (months < 12) {
    return `${months} mnd`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} år`;
  }

  return `${years} år ${remainingMonths} mnd`;
};

const getBarHeight = (durationMonths: number, longestDuration: number) => {
  const minHeight = 72;
  const maxHeight = 260;
  const scale = durationMonths / longestDuration;

  return Math.round(minHeight + (maxHeight - minHeight) * scale);
};

const TenureTimeline: FC = () => {
  const { tenures, tenureIsLoading, initError } = useContext(
    TenureContext,
  ) as ITenureContext;

  if (tenureIsLoading) {
    return <p className="py-12 text-center text-wood-dark">Laster...</p>;
  }

  if (initError) {
    return <p className="py-12 text-center text-red-500">{initError}</p>;
  }

  const timelineTenures: TimelineTenure[] = tenures
    .map((tenure) => {
      const startDate = parseTenureDate(tenure.startDate);
      const endDate = parseTenureDate(tenure.endDate);

      return {
        tenure,
        durationMonths: getDurationMonths(startDate, endDate),
        startDate,
      };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  const longestDuration = Math.max(
    1,
    ...timelineTenures.map(({ durationMonths }) => durationMonths),
  );

  if (timelineTenures.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-16">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-0 bottom-0 left-[18px] w-px -translate-x-1/2 bg-wood-dark/70 md:left-1/2" />

        <div className="relative space-y-8">
          {timelineTenures.map(({ tenure, durationMonths }, index) => (
            <TenureTimelineItem
              key={tenure.id}
              tenure={tenure}
              side={index % 2 === 0 ? "right" : "left"}
              barHeight={getBarHeight(durationMonths, longestDuration)}
              durationLabel={formatDuration(durationMonths)}
              barColor={getBarColor(tenure.companyName)}
              companyUrl={getCompanyUrl(tenure.companyName)}
            />
          ))}

          <Link
            to="/kontakt"
            className="group grid grid-cols-[36px_1fr] items-center md:grid-cols-[1fr_48px_1fr]"
          >
            <div className="hidden items-center justify-end gap-4 md:flex">
              <div className="max-w-48 rounded px-2 py-1 text-right text-sm leading-tight text-gray-800 opacity-90 transition-all duration-300 group-hover:-translate-x-8 group-hover:scale-150 group-hover:bg-white/30 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-marble/20 group-hover:backdrop-blur-xl">
                <p className="font-semibold">Kontakt meg</p>
                <p className="text-xs text-gray-600">Neste kapittel?</p>
              </div>
              <div className="h-32 w-14 rounded bg-gradient-to-b from-marble via-stone-500 to-concrete shadow-md" />
            </div>
            <div className="relative flex items-center justify-center">
              <span className="h-px w-full bg-wood-dark/70" />
              <span className="absolute h-3 w-3 rounded-full border-2 border-wood-dark bg-concrete" />
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <div className="h-32 w-14 rounded bg-gradient-to-b from-marble via-stone-500 to-concrete shadow-md" />
              <div className="max-w-48 rounded px-2 py-1 text-left text-sm leading-tight text-gray-800 opacity-90 transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150 group-hover:bg-white/30 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-marble/20 group-hover:backdrop-blur-xl">
                <p className="font-semibold">Kontakt meg</p>
                <p className="text-xs text-gray-600">Neste kapittel?</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TenureTimeline;
