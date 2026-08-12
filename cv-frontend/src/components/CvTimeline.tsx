import {
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type FC,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { TenureContext } from "../contexts/TenureContext";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";
import type { ITenure } from "../interfaces/ITenure";
import {
  companyMeta,
  type CompanyKey,
  pageStyles,
  timelineStyles,
} from "../styles/styles";

type TimelineSide = "left" | "right";
type TimelineStyle = CSSProperties & { "--timeline-x": string };

const CONTACT_BUBBLE_SIZE = 224;
const TIMELINE_START_DOT_TOP = 38;
const TIMELINE_START_DOT_SIZE = 14;

interface TimelineMarker {
  tenure: ITenure;
  companyKey: CompanyKey;
  textSide: TimelineSide;
  durationMonths: number;
  durationLabel: string;
  top: number;
  size: number;
}

interface CvTimelineProps {
  showDetailPanel?: boolean;
}

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
  const calendarMonths = yearDifference * 12 + monthDifference;

  if (calendarMonths > 0 && calendarMonths % 12 === 0) {
    return calendarMonths;
  }

  const inclusiveMonths = calendarMonths + 1;

  if (inclusiveMonths >= 10 && inclusiveMonths < 12) {
    return 12;
  }

  return Math.max(1, inclusiveMonths);
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

  return `${years} år og ${remainingMonths} mnd`;
};

const getCompanyKey = (companyName: string): CompanyKey => {
  const normalizedCompanyName = companyName.toLowerCase();

  if (normalizedCompanyName.includes("power")) return "power";
  if (
    normalizedCompanyName.includes("würth") ||
    normalizedCompanyName.includes("wurth")
  ) {
    return "wurth";
  }
  if (normalizedCompanyName.includes("kristiania")) return "kristiania";
  if (normalizedCompanyName.includes("ihlang")) return "ihlang";

  return "default";
};

const getTextSide = (companyKey: CompanyKey, index: number): TimelineSide => {
  if (companyKey === "wurth") return "right";
  if (companyKey === "power" || companyKey === "kristiania") return "left";
  if (companyKey === "ihlang") return "right";

  return index % 2 === 0 ? "left" : "right";
};

const getMarkerSize = (
  durationMonths: number,
  longestDuration: number,
  companyKey: CompanyKey,
): number => {
  const minSize = 78;
  const maxSize = 214;
  const scale = durationMonths / longestDuration;
  const size = minSize + (maxSize - minSize) * scale;

  if (companyKey === "ihlang") {
    return Math.min(92, Math.round(size));
  }

  return Math.round(size);
};

const combineKristianiaTenures = (tenures: ITenure[]): ITenure[] => {
  const kristianiaTenures = tenures.filter(
    (tenure) => getCompanyKey(tenure.companyName) === "kristiania",
  );

  if (kristianiaTenures.length <= 1) {
    return tenures;
  }

  const nonKristianiaTenures = tenures.filter(
    (tenure) => getCompanyKey(tenure.companyName) !== "kristiania",
  );
  const sortedKristianiaTenures = [...kristianiaTenures].sort(
    (a, b) =>
      parseTenureDate(a.startDate).getTime() -
      parseTenureDate(b.startDate).getTime(),
  );
  const uniqueTitles = [
    ...new Set(
      sortedKristianiaTenures
        .map((tenure) => tenure.workTitle.trim())
        .filter(Boolean),
    ),
  ];

  return [
    ...nonKristianiaTenures,
    {
      ...sortedKristianiaTenures[0],
      companyName: "Kristiania",
      workTitle: uniqueTitles.join(" / "),
      startDate: sortedKristianiaTenures[0].startDate,
      endDate:
        sortedKristianiaTenures[sortedKristianiaTenures.length - 1].endDate,
    },
  ];
};

const buildMarkers = (tenures: ITenure[]): TimelineMarker[] => {
  const tenuresWithDuration = combineKristianiaTenures(tenures)
    .map((tenure) => {
      const startDate = parseTenureDate(tenure.startDate);
      const endDate = parseTenureDate(tenure.endDate);
      const durationMonths = getDurationMonths(startDate, endDate);

      return { tenure, startDate, durationMonths };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  const longestDuration = Math.max(
    1,
    ...tenuresWithDuration.map(({ durationMonths }) => durationMonths),
  );

  return tenuresWithDuration.map(({ tenure, durationMonths }, index) => {
    const companyKey = getCompanyKey(tenure.companyName);

    return {
      tenure,
      companyKey,
      durationMonths,
      durationLabel: formatDuration(durationMonths),
      textSide: getTextSide(companyKey, index),
      top: 72 + index * 178,
      size: getMarkerSize(durationMonths, longestDuration, companyKey),
    };
  });
};

const getExperienceNote = (marker: TimelineMarker): string => {
  if (marker.companyKey === "power") {
    return "Kundeorientert arbeid, salg og teamansvar ga meg et tydelig blikk for brukerbehov, kommunikasjon og praktisk problemløsning.";
  }

  if (marker.companyKey === "wurth") {
    return "Direkte kundekontakt og løsningssalg styrket evnen til å forstå behov raskt og forklare valg på en enkel måte.";
  }

  if (marker.companyKey === "kristiania") {
    return "Studietiden samlet frontend, mobilutvikling, universell utforming, algoritmer og systemnære fag til et bredt teknisk fundament.";
  }

  if (marker.companyKey === "ihlang") {
    return "Tidlig arbeidserfaring med ansvar, gjennomføring og praktisk samarbeid.";
  }

  return "En erfaring som bidrar til helheten i profilen min.";
};

const LogoContent: FC<{ marker: TimelineMarker; size: number }> = ({
  marker,
  size,
}) => {
  const meta = companyMeta[marker.companyKey];
  const logoImageClass = "max-h-[62%] max-w-[72%] object-contain";

  if (meta.logoSrc) {
    return (
      <img
        src={meta.logoSrc}
        alt={meta.logoAlt ?? marker.tenure.companyName}
        className={
          marker.companyKey === "kristiania"
            ? "max-h-[68%] max-w-[68%] object-contain"
            : marker.companyKey === "ihlang"
              ? "max-h-[76%] max-w-[76%] object-contain"
              : logoImageClass
        }
      />
    );
  }

  return (
    <span
      className="max-w-[72%] text-center font-black uppercase leading-none text-black/75"
      style={{ fontSize: Math.max(12, size * 0.12) }}
    >
      {marker.tenure.companyName}
    </span>
  );
};

const TimelineText: FC<{ marker: TimelineMarker }> = ({ marker }) => {
  const style: CSSProperties = {
    top: `${marker.top + marker.size / 2}px`,
    [marker.textSide === "left" ? "right" : "left"]:
      "calc(var(--timeline-x) + 18px)",
  };

  return (
    <div
      className={`${timelineStyles.textWrapper} ${
        marker.textSide === "left"
          ? "origin-right text-right"
          : "origin-left text-left"
      }`}
      style={style}
    >
      <p className={timelineStyles.companyText}>{marker.tenure.companyName}</p>
      <p className={timelineStyles.detailText}>{marker.tenure.workTitle}</p>
      <p className={timelineStyles.detailText}>{marker.durationLabel}</p>
    </div>
  );
};

const TimelineBubbleLink: FC<{
  marker: TimelineMarker;
  className: string;
  style: CSSProperties;
  onActivate?: () => void;
  children: ReactNode;
}> = ({ marker, className, style, onActivate, children }) => {
  const markerUrl = companyMeta[marker.companyKey].url;

  if (!markerUrl) {
    return (
      <div
        className={className}
        style={style}
        onMouseEnter={onActivate}
        onFocus={onActivate}
      >
        {children}
      </div>
    );
  }

  return (
    <a
      href={markerUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Besok ${marker.tenure.companyName}`}
      className={className}
      style={style}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      {children}
    </a>
  );
};

const TimelineCircle: FC<{
  marker: TimelineMarker;
  isActive: boolean;
  onActivate: () => void;
}> = ({ marker, isActive, onActivate }) => {
  const circleLeft =
    marker.textSide === "left"
      ? `calc(var(--timeline-x) + ${marker.companyKey === "power" ? 34 : 28}px)`
      : `calc(var(--timeline-x) - ${marker.size + 26}px)`;

  return (
    <TimelineBubbleLink
      marker={marker}
      className={`${timelineStyles.bubbleBase} ${timelineStyles.bubbleDesktop} ${
        isActive ? timelineStyles.bubbleActive : ""
      }`}
      onActivate={onActivate}
      style={{
        top: `${marker.top}px`,
        left: circleLeft,
        width: `${marker.size}px`,
        height: `${marker.size}px`,
        backgroundColor: companyMeta[marker.companyKey].color,
        opacity: 0.58,
      }}
    >
      <LogoContent marker={marker} size={marker.size} />
    </TimelineBubbleLink>
  );
};

const TimelineDesktopItem: FC<{
  marker: TimelineMarker;
  isActive: boolean;
  onActivate: () => void;
}> = ({ marker, isActive, onActivate }) => (
  <div className="pointer-events-none absolute inset-0">
    <TimelineCircle
      marker={marker}
      isActive={isActive}
      onActivate={onActivate}
    />
    <TimelineText marker={marker} />
  </div>
);

const ExperienceDetailPanel: FC<{ marker?: TimelineMarker }> = ({ marker }) => {
  if (!marker) {
    return (
      <aside className={timelineStyles.detailPanel}>
        <p className={timelineStyles.detailPanelHint}>
          Hold over et punkt i tidslinjen for å se mer.
        </p>
      </aside>
    );
  }

  const meta = companyMeta[marker.companyKey];

  return (
    <aside className={timelineStyles.detailPanel}>
      <p className={timelineStyles.detailPanelEyebrow}>
        {marker.tenure.startDate} - {marker.tenure.endDate}
      </p>
      <h2 className={timelineStyles.detailPanelTitle}>
        {marker.tenure.companyName}
      </h2>
      <p className={timelineStyles.detailPanelRole}>
        {marker.tenure.workTitle}
      </p>
      <p className={timelineStyles.detailPanelDuration}>
        Varighet: {marker.durationLabel}
      </p>
      <p className={timelineStyles.detailPanelBody}>
        {getExperienceNote(marker)}
      </p>
      {meta.url && (
        <a
          href={meta.url}
          target="_blank"
          rel="noreferrer"
          className={timelineStyles.detailPanelLink}
        >
          Besøk nettside
        </a>
      )}
    </aside>
  );
};

const ContactBubble: FC<{ top: number }> = ({ top }) => {
  return (
    <Link
      to="/kontakt"
      className={`${timelineStyles.contactDesktop} ${timelineStyles.contactBubble}`}
      style={{
        top: `${top}px`,
        left: `calc(var(--timeline-x) - ${CONTACT_BUBBLE_SIZE / 2}px)`,
        width: `${CONTACT_BUBBLE_SIZE}px`,
        height: `${CONTACT_BUBBLE_SIZE}px`,
      }}
    >
      <span className="whitespace-nowrap text-sm font-[300] leading-tight text-white/70">
        Kanskje du er
        <br />
        min neste arbeidsplass?
      </span>
    </Link>
  );
};

const MobileTimelineBubble: FC<{
  marker: TimelineMarker;
  mobileSize: number;
}> = ({ marker, mobileSize }) => {
  return (
    <TimelineBubbleLink
      marker={marker}
      className={`${timelineStyles.bubbleBase} ${timelineStyles.bubbleMobile}`}
      style={{
        width: `${mobileSize}px`,
        height: `${mobileSize}px`,
        backgroundColor: companyMeta[marker.companyKey].color,
        opacity: 0.58,
      }}
    >
      <LogoContent marker={marker} size={mobileSize} />
    </TimelineBubbleLink>
  );
};

const CvTimeline: FC<CvTimelineProps> = ({ showDetailPanel = false }) => {
  const { tenures, tenureIsLoading, initError } = useContext(
    TenureContext,
  ) as ITenureContext;
  const markers = useMemo(() => buildMarkers(tenures), [tenures]);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const activeMarker =
    markers.find((marker) => marker.tenure.id === activeMarkerId) ?? markers[0];
  const contactTop =
    markers.length > 0
      ? Math.max(...markers.map((marker) => marker.top + marker.size)) + 88
      : 220;
  const timelineHeight = Math.max(
    720,
    ...markers.map((marker) => marker.top + marker.size + 96),
    contactTop + CONTACT_BUBBLE_SIZE + 96,
  );
  const timelineLineTop = TIMELINE_START_DOT_TOP + TIMELINE_START_DOT_SIZE;
  const timelineLineHeight =
    contactTop + CONTACT_BUBBLE_SIZE / 2 - timelineLineTop;

  const timeline = (
    <div
      className={timelineStyles.shell}
      style={
        {
          "--timeline-x": "50%",
          minHeight: `${timelineHeight}px`,
        } as TimelineStyle
      }
    >
      <div
        className={`${timelineStyles.axisDot} ${timelineStyles.axisDesktop}`}
        style={{
          top: `${TIMELINE_START_DOT_TOP}px`,
          left: `calc(var(--timeline-x) - ${TIMELINE_START_DOT_SIZE / 2}px)`,
          width: `${TIMELINE_START_DOT_SIZE}px`,
          height: `${TIMELINE_START_DOT_SIZE}px`,
        }}
      />
      <div
        className={`${timelineStyles.axisLine} ${timelineStyles.axisDesktop}`}
        style={{
          top: `${timelineLineTop}px`,
          left: "var(--timeline-x)",
          height: `${timelineLineHeight}px`,
        }}
      />

      {tenureIsLoading && (
        <p className={timelineStyles.loadingText}>Laster...</p>
      )}

      {initError && (
        <p className={`relative py-16 text-center ${pageStyles.errorText}`}>
          {initError}
        </p>
      )}

      {!tenureIsLoading && !initError && markers.length === 0 && (
        <p className={timelineStyles.emptyText}>
          Ingen erfaring er lagt inn enda.
        </p>
      )}

      <div className="hidden sm:block">
        {markers.map((marker) => (
          <TimelineDesktopItem
            key={marker.tenure.id}
            marker={marker}
            isActive={activeMarker?.tenure.id === marker.tenure.id}
            onActivate={() => setActiveMarkerId(marker.tenure.id)}
          />
        ))}
        {!tenureIsLoading && !initError && markers.length > 0 && (
          <ContactBubble top={contactTop} />
        )}
      </div>

      <div className={timelineStyles.mobileList}>
        <span className={timelineStyles.mobileAxisDot} aria-hidden="true" />
        <span className={timelineStyles.mobileAxisLine} aria-hidden="true" />
        {markers.map((marker) => {
          const mobileSize = Math.min(marker.size, 104);
          const bubbleSide =
            marker.textSide === "left"
              ? timelineStyles.mobileBubbleRight
              : timelineStyles.mobileBubbleLeft;
          const textSide =
            marker.textSide === "left"
              ? timelineStyles.mobileTextLeft
              : timelineStyles.mobileTextRight;

          return (
            <div
              key={`${marker.tenure.id}-mobile`}
              className={timelineStyles.mobileItem}
            >
              <div className={bubbleSide}>
                <MobileTimelineBubble marker={marker} mobileSize={mobileSize} />
              </div>
              <div className={textSide}>
                <p className={timelineStyles.companyText}>
                  {marker.tenure.companyName}
                </p>
                <p className={timelineStyles.mobileDetailText}>
                  {marker.tenure.workTitle}
                </p>
                <p className={timelineStyles.mobileDetailText}>
                  {marker.durationLabel}
                </p>
              </div>
            </div>
          );
        })}
        {!tenureIsLoading && !initError && markers.length > 0 && (
          <Link
            to="/kontakt"
            className={`${timelineStyles.contactMobile} ${timelineStyles.contactBubble}`}
          >
            <span className="block text-base font-[300] leading-tight text-white/70">
              Kanskje du er min neste arbeidsplass?
            </span>
            <span className="mt-1 block text-xl font-[400] leading-tight text-[#E3CD9F]">
              Ta Kontakt
            </span>
          </Link>
        )}
      </div>
    </div>
  );

  if (!showDetailPanel) {
    return timeline;
  }

  return (
    <section className={timelineStyles.detailLayout}>
      <div className={timelineStyles.detailTimelineColumn}>{timeline}</div>
      <div className={timelineStyles.detailPanelColumn}>
        <ExperienceDetailPanel marker={activeMarker} />
      </div>
    </section>
  );
};

export default CvTimeline;
