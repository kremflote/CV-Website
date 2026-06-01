import type { FC } from "react";
import type { ITenure } from "../interfaces/ITenure";
import { timelineStyles } from "../styles/styles";

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
      className={`w-14 rounded shadow-md ${barColor}`}
      style={{ height: `${barHeight}px` }}
    />
  );

  const details = (
    <div
      className={`max-w-44 rounded px-2 py-1 text-sm leading-tight ${timelineStyles.floatingDetails} ${
        isLeft
          ? "text-right group-hover:-translate-x-8 group-hover:scale-150"
          : "text-left group-hover:translate-x-8 group-hover:scale-150"
      }`}
    >
      <p className="font-semibold">{tenure.companyName}</p>
      <p className={`text-xs ${timelineStyles.mutedDetails}`}>
        {tenure.workTitle}
      </p>
      <p className={`mt-1 text-xs font-semibold ${timelineStyles.durationText}`}>
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
      <div
        className={`max-w-48 rounded px-2 py-1 text-left text-sm leading-tight group-hover:translate-x-8 group-hover:scale-150 ${timelineStyles.floatingDetails}`}
      >
        <p className="font-semibold">{tenure.companyName}</p>
        <p className={`text-xs ${timelineStyles.mutedDetails}`}>
          {tenure.workTitle}
        </p>
        <p className={`mt-1 text-xs font-semibold ${timelineStyles.durationText}`}>
          {durationLabel}
        </p>
      </div>
    </div>
  );

  const item = (
    <div className="group grid grid-cols-[36px_1fr] items-center md:grid-cols-[1fr_48px_1fr]">
      <div className="hidden md:block">{isLeft && content}</div>

      <div className="relative flex items-center justify-center">
        <span className={`h-px w-full ${timelineStyles.line}`} />
        <span
          className={`absolute h-3 w-3 rounded-full border-2 ${timelineStyles.dot}`}
        />
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
