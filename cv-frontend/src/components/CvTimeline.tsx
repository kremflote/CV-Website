import {
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type PointerEvent,
} from "react";
import { Link } from "react-router-dom";
import { TenureContext } from "../contexts/TenureContext";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";
import { buildTimelinePeriods, today, type TimelinePeriod } from "../utils/tenure";
import { timelineStyles as s } from "../styles/styles";
import { PeriodActions } from "./TimelineParts";
import CvTimelineMobile from "./CvTimelineMobile";

/* The axis runs from January 2018 to January 2028: one year is 10% of the track. */
const AXIS_START = new Date(2018, 0, 1).getTime();
const AXIS_END = new Date(2028, 0, 1).getTime();
const YEARS = Array.from({ length: 11 }, (_, index) => 2018 + index);

/* Vertical layout of the track, in px. */
const MAX_BUBBLE = 200;
const MIN_BUBBLE = 56;
const NEXT_BUBBLE = 72;
const AXIS_Y = 28 + MAX_BUBBLE / 2;
const LABEL_TOP = AXIS_Y + MAX_BUBBLE / 2 + 24;
const LABEL_ROW_GAP = 76;
const LABEL_WIDTH = 168;
const RULER_Y = LABEL_TOP + LABEL_ROW_GAP + 96;
const TRACK_HEIGHT = RULER_Y + 40;
const DEFAULT_SELECTED_ROLE = "kundebehandler";

const toFraction = (date: Date) =>
  Math.min(1, Math.max(0, (date.getTime() - AXIS_START) / (AXIS_END - AXIS_START)));

/** Diameter grows with duration by area, clamped to 56–200px. */
const bubbleSize = (months: number, longest: number) =>
  Math.round(
    Math.min(MAX_BUBBLE, Math.max(MIN_BUBBLE, MAX_BUBBLE * Math.sqrt(months / longest))),
  );

interface PlacedItem {
  key: string;
  x: number;
  size: number;
  labelLeft: number;
  labelRow: number;
  labelAlign: string;
}

/** Places labels in up to two rows so neighbouring labels never overlap. */
const placeLabels = (items: { key: string; x: number; size: number }[], width: number) => {
  const lastRight = [-Infinity, -Infinity];
  return items.map<PlacedItem>((item) => {
    const labelLeft = Math.min(
      Math.max(item.x - LABEL_WIDTH / 2, 0),
      width - LABEL_WIDTH,
    );
    const row = labelLeft >= lastRight[0] + 8 ? 0 : 1;
    lastRight[row] = labelLeft + LABEL_WIDTH;
    const centred = Math.abs(labelLeft - (item.x - LABEL_WIDTH / 2)) < 1;
    const labelAlign = centred
      ? "items-center text-center"
      : labelLeft === 0
        ? "items-start text-left"
        : "items-end text-right";
    return { ...item, labelLeft, labelRow: row, labelAlign };
  });
};

const useElementWidth = <T extends HTMLElement>(fallback: number) => {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(fallback);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => setWidth(element.clientWidth || fallback);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [fallback]);

  return [ref, width] as const;
};

const DetailPanel: FC<{ period: TimelinePeriod }> = ({ period }) => (
  <div className={s.panel} id="timeline-detail" aria-live="polite">
    <div>
      <p className={s.panelDates}>{period.dateRangeLabel}</p>
      <h3 className={s.panelCompany}>{period.company}</h3>
      <p className={s.panelRole}>{period.role}</p>
      <dl className={s.panelFacts}>
        <dt className={s.panelFactLabel}>Varighet</dt>
        <dd className={s.panelFactValue}>{period.durationLabel}</dd>
      </dl>
    </div>
    <div>
      {period.description && <p className={s.panelBody}>{period.description}</p>}
      <PeriodActions period={period} />
    </div>
  </div>
);

const CvTimeline: FC = () => {
  const { tenures, tenureIsLoading, initError } = useContext(
    TenureContext,
  ) as ITenureContext;
  const periods = useMemo(() => buildTimelinePeriods(tenures), [tenures]);
  const [trackRef, width] = useElementWidth<HTMLDivElement>(1176);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected =
    periods.find((period) => period.id === selectedId) ??
    periods.find((period) => period.role.toLowerCase() === DEFAULT_SELECTED_ROLE) ??
    periods[0];

  const placed = useMemo(() => {
    const longest = Math.max(1, ...periods.map((period) => period.months));
    const items = periods.map((period) => ({
      key: String(period.id),
      x: ((toFraction(period.start) + toFraction(period.end)) / 2) * width,
      size: bubbleSize(period.months, longest),
    }));
    const lastEnd = Math.max(...periods.map((period) => toFraction(period.end)));
    items.push({
      key: "next",
      x: Math.min(((lastEnd + 1) / 2) * width, width - NEXT_BUBBLE / 2),
      size: NEXT_BUBBLE,
    });
    return new Map(placeLabels(items, width).map((item) => [item.key, item]));
  }, [periods, width]);

  if (tenureIsLoading) return <p className={s.status}>Laster …</p>;
  if (initError) return <p className={s.status}>{initError}</p>;
  if (!selected) return null;

  const todayX = toFraction(today) * width;
  const next = placed.get("next")!;

  const selectOnHover = (id: number) => (event: PointerEvent) => {
    if (event.pointerType === "mouse") setSelectedId(id);
  };

  return (
    <>
    <div className={s.mobileOnly}>
      <CvTimelineMobile periods={periods} defaultOpenId={selected.id} />
    </div>
    <div className={s.desktopOnly}>
      <div className={s.scroller}>
        <div
          ref={trackRef}
          className={s.track}
          style={{ height: TRACK_HEIGHT }}
        >
          {/* Axis line through the bubbles, and the ruler with year ticks. */}
          <div className={s.axis} style={{ top: AXIS_Y }} aria-hidden="true" />
          <div className={s.ruler} style={{ top: RULER_Y }} aria-hidden="true" />
          {YEARS.map((year, index) => {
            const x = (index / (YEARS.length - 1)) * width;
            const align =
              index === 0 ? "translate-x-0" : index === YEARS.length - 1 ? "-translate-x-full" : "-translate-x-1/2";
            return (
              <div key={year} aria-hidden="true">
                <span className={s.tick} style={{ left: x, top: RULER_Y }} />
                <span className={`${s.tickLabel} ${align}`} style={{ left: x, top: RULER_Y + 14 }}>
                  {year}
                </span>
              </div>
            );
          })}

          {/* "I dag" marker. */}
          <div className={s.today} style={{ left: todayX, top: 0, height: RULER_Y }} aria-hidden="true">
            <span className={s.todayLabel}>I dag</span>
          </div>

          {periods.map((period) => {
            const item = placed.get(String(period.id))!;
            const isSelected = period.id === selected.id;
            const labelTop = LABEL_TOP + item.labelRow * LABEL_ROW_GAP;
            return (
              <div key={period.id}>
                {/* Stem from the axis to the label. */}
                <span
                  className={`${s.stem} ${isSelected ? s.stemSelected : ""}`}
                  style={{ left: item.x, top: AXIS_Y, height: labelTop - AXIS_Y - 6 }}
                  aria-hidden="true"
                />
                {/* Period bar on the ruler, from real start to real end. */}
                <span
                  className={`${s.bar} ${isSelected ? s.barSelected : ""}`}
                  style={{
                    left: toFraction(period.start) * width,
                    width: Math.max(4, (toFraction(period.end) - toFraction(period.start)) * width),
                    top: RULER_Y - 3,
                  }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className={`${s.bubble} ${isSelected ? s.bubbleSelected : s.bubbleIdle}`}
                  style={{
                    left: item.x - item.size / 2,
                    top: AXIS_Y - item.size / 2,
                    width: item.size,
                    height: item.size,
                  }}
                  aria-label={`${period.company}, ${period.role}, ${period.durationLabel}`}
                  aria-pressed={isSelected}
                  aria-controls="timeline-detail"
                  onClick={() => setSelectedId(period.id)}
                  onPointerEnter={selectOnHover(period.id)}
                >
                  {period.logoSrc ? (
                    <img
                      src={period.logoSrc}
                      alt=""
                      className={`${s.logo} ${isSelected ? "logo-mono-on-accent" : "logo-mono"}`}
                    />
                  ) : (
                    <span className={s.logoFallback}>{period.company}</span>
                  )}
                </button>
                <div
                  className={`${s.label} ${item.labelAlign}`}
                  style={{ left: item.labelLeft, top: labelTop, width: LABEL_WIDTH }}
                  aria-hidden="true"
                >
                  <span className={`${s.labelCompany} ${isSelected ? s.labelSelected : ""}`}>
                    {period.company}
                  </span>
                  <span className={`${s.labelRole} ${isSelected ? s.labelSelected : ""}`}>
                    {period.role}
                  </span>
                  <span className={`${s.labelDuration} ${isSelected ? s.labelSelected : ""}`}>
                    {period.durationLabel}
                  </span>
                </div>
              </div>
            );
          })}

          {/* The next workplace: links to the contact block. */}
          <span
            className={s.stem}
            style={{
              left: next.x,
              top: AXIS_Y,
              height: LABEL_TOP + next.labelRow * LABEL_ROW_GAP - AXIS_Y - 6,
            }}
            aria-hidden="true"
          />
          <Link
            to={{ hash: "#kontakt" }}
            className={s.nextBubble}
            style={{
              left: next.x - next.size / 2,
              top: AXIS_Y - next.size / 2,
              width: next.size,
              height: next.size,
            }}
            aria-label="Deg? Neste arbeidsplass – ta kontakt"
          >
            ?
          </Link>
          <div
            className={`${s.label} ${next.labelAlign}`}
            style={{
              left: next.labelLeft,
              top: LABEL_TOP + next.labelRow * LABEL_ROW_GAP,
              width: LABEL_WIDTH,
            }}
            aria-hidden="true"
          >
            <span className={s.labelCompany}>Deg?</span>
            <span className={s.labelRole}>Neste arbeidsplass</span>
          </div>
        </div>
      </div>

      <DetailPanel period={selected} />
    </div>
    </>
  );
};

export default CvTimeline;
