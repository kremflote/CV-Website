import type { FC } from "react";
import type { ITenure } from "../interfaces/ITenure";

interface TenureTimelineItemProps {
  tenure: ITenure;
  side: "left" | "right";
  barHeight: number;
  durationLabel: string;
  barColor: string;
  companyUrl?: string;
}

const TenureTimelineItem: FC<TenureTimelineItemProps> = ({
  tenure,
  side,
  barHeight,
  durationLabel,
  barColor,
  companyUrl,
}) => {
  const isLeft = side === "left";

  const bar = (
    <div
      className={`flex w-14 items-center justify-center rounded text-sm font-semibold text-white shadow-md ${barColor}`}
      style={{ height: `${barHeight}px` }}
    >
      <span className="-rotate-90 whitespace-nowrap">{durationLabel}</span>
    </div>
  );

  const details = (
    <div
      className={`max-w-44 rounded px-2 py-1 text-sm leading-tight text-gray-800 opacity-90 transition-all duration-300 group-hover:bg-white/30 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-marble/20 group-hover:backdrop-blur-xl ${
        isLeft
          ? "text-right group-hover:-translate-x-8 group-hover:scale-150"
          : "text-left group-hover:translate-x-8 group-hover:scale-150"
      }`}
    >
      <p className="font-semibold">{tenure.companyName}</p>
      <p className="text-xs text-gray-600">{tenure.workTitle}</p>
      <p className="mt-1 text-xs font-semibold text-wood-dark">
        {durationLabel}
      </p>
    </div>
  );

  const content = (
    <div
      className={`flex items-center gap-4 ${
        isLeft ? "justify-end" : "justify-start"
      }`}
    >
      {isLeft ? (
        <>
          {details}
          {bar}
        </>
      ) : (
        <>
          {bar}
          {details}
        </>
      )}
    </div>
  );

  const mobileContent = (
    <div className="flex items-center gap-4">
      {bar}
      <div className="max-w-48 rounded px-2 py-1 text-left text-sm leading-tight text-gray-800 opacity-90 transition-all duration-300 group-hover:translate-x-8 group-hover:scale-150 group-hover:bg-white/30 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-marble/20 group-hover:backdrop-blur-xl">
        <p className="font-semibold">{tenure.companyName}</p>
        <p className="text-xs text-gray-600">{tenure.workTitle}</p>
        <p className="mt-1 text-xs font-semibold text-wood-dark">
          {durationLabel}
        </p>
      </div>
    </div>
  );

  const item = (
    <div className="group grid grid-cols-[36px_1fr] items-center md:grid-cols-[1fr_48px_1fr]">
      <div className="hidden md:block">{isLeft && content}</div>

      <div className="relative flex items-center justify-center">
        <span className="h-px w-full bg-wood-dark/70" />
        <span className="absolute h-3 w-3 rounded-full border-2 border-wood-dark bg-concrete" />
      </div>

      <div className="md:hidden">{mobileContent}</div>
      <div className="hidden md:block">{!isLeft && content}</div>
    </div>
  );

  if (!companyUrl) {
    return item;
  }

  return (
    <a href={companyUrl} target="_blank" rel="noreferrer">
      {item}
    </a>
  );
};

export default TenureTimelineItem;
