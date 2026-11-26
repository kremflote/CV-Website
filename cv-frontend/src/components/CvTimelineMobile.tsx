import { useLayoutEffect, useRef, useState, type FC } from "react";
import { Link } from "react-router-dom";
import { today, type TimelinePeriod } from "../utils/tenure";
import { PeriodActions } from "./TimelineParts";
import { timelineStyles as s } from "../styles/styles";

/* Same sizing rule as the desktop track (area grows with duration), scaled to fit beside the text. */
const MAX_BUBBLE = 104;
const MIN_BUBBLE = 44;

const bubbleSize = (months: number, longest: number) =>
  Math.round(
    Math.min(MAX_BUBBLE, Math.max(MIN_BUBBLE, MAX_BUBBLE * Math.sqrt(months / longest))),
  );

const yearRange = (period: TimelinePeriod) => {
  const startYear = period.start.getFullYear();
  const endYear = period.end.getFullYear();
  return startYear === endYear ? `${startYear}` : `${startYear}–${endYear}`;
};

const isOngoing = (period: TimelinePeriod) =>
  period.start.getTime() <= today.getTime() && period.end.getTime() >= today.getTime();

const Chevron: FC<{ open: boolean }> = ({ open }) => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    className={`${s.mChevron} ${open ? "rotate-180" : ""}`}
  >
    <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CvTimelineMobileProps {
  periods: TimelinePeriod[];
  defaultOpenId: number;
}

/**
 * Phone layout: a vertical axis with the periods oldest first, text beside
 * each bubble, and the detail panel opening under the tapped period.
 */
const CvTimelineMobile: FC<CvTimelineMobileProps> = ({ periods, defaultOpenId }) => {
  const [openId, setOpenId] = useState<number | null>(defaultOpenId);
  // Closing a panel above the tapped row would make the row jump; keep it in place.
  const anchor = useRef<{ element: HTMLElement; top: number } | null>(null);

  useLayoutEffect(() => {
    if (!anchor.current) return;
    const { element, top } = anchor.current;
    anchor.current = null;
    const shift = element.getBoundingClientRect().top - top;
    if (shift !== 0) window.scrollBy({ top: shift, behavior: "instant" });
  }, [openId]);

  const toggle = (id: number, element: HTMLElement) => {
    anchor.current = { element, top: element.getBoundingClientRect().top };
    setOpenId((current) => (current === id ? null : id));
  };
  const longest = Math.max(1, ...periods.map((period) => period.months));

  return (
    <ol className={s.mList}>
      {periods.map((period) => {
        const isOpen = period.id === openId;
        const size = bubbleSize(period.months, longest);
        const panelId = `timeline-period-${period.id}`;
        return (
          <li key={period.id}>
            <button
              type="button"
              className={s.mRow}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={(event) => toggle(period.id, event.currentTarget)}
            >
              <span className={s.mBubbleCell}>
                <span
                  className={`${s.mBubble} ${isOpen ? s.bubbleSelected : s.bubbleIdle}`}
                  style={{ width: size, height: size }}
                >
                  {period.logoSrc ? (
                    <img
                      src={period.logoSrc}
                      alt=""
                      className={`${s.logo} ${isOpen ? "logo-mono-on-accent" : "logo-mono"}`}
                    />
                  ) : (
                    <span className={s.logoFallback}>{period.company}</span>
                  )}
                </span>
              </span>
              <span className={s.mText}>
                <span className={`${s.mCompany} ${isOpen ? s.labelSelected : ""}`}>
                  {period.company}
                </span>
                <span className={`${s.mRole} ${isOpen ? s.labelSelected : ""}`}>
                  {period.role}
                </span>
                <span className={`${s.labelDuration} ${isOpen ? s.labelSelected : ""}`}>
                  {yearRange(period)} · {period.durationLabel}
                  {isOngoing(period) && " · pågår"}
                </span>
              </span>
              <Chevron open={isOpen} />
            </button>

            {isOpen && (
              <div id={panelId} className={s.mPanel}>
                <p className={s.panelDates}>
                  {period.dateRangeLabel} · Varighet {period.durationLabel}
                </p>
                {period.description && (
                  <p className={`${s.panelBody} mt-2`}>{period.description}</p>
                )}
                <PeriodActions period={period} />
              </div>
            )}
          </li>
        );
      })}

      <li>
        <Link to={{ hash: "#kontakt" }} className={s.mRow}>
          <span className={s.mBubbleCell}>
            <span className={`${s.mBubble} ${s.mNextBubble}`} style={{ width: 56, height: 56 }}>
              ?
            </span>
          </span>
          <span className={s.mText}>
            <span className={s.mCompany}>Deg?</span>
            <span className={s.mRole}>Neste arbeidsplass</span>
          </span>
          <span aria-hidden="true" className={s.mChevron}>→</span>
        </Link>
      </li>
    </ol>
  );
};

export default CvTimelineMobile;
