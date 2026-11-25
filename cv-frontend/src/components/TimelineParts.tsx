import type { FC } from "react";
import type { TimelinePeriod } from "../utils/tenure";
import { buttonStyles, timelineStyles as s } from "../styles/styles";

const KRISTIANIA_PROGRAM_URL =
  "https://www.kristiania.no/globalassets/programbeskrivelser/hoyskole/2024/seit/bachelor-i-informasjonsteknologi-frontend-og-mobilutvikling-kull-2024.pdf";

export const ExternalIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 3h7v7M13 3 4 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** "Besøk nettside" and, for Kristiania, the programme description link. */
export const PeriodActions: FC<{ period: TimelinePeriod }> = ({ period }) => (
  <div className={s.panelActions}>
    {period.url && (
      <a
        href={period.url}
        target="_blank"
        rel="noreferrer"
        className={`${buttonStyles.base} ${buttonStyles.outline} ${buttonStyles.small}`}
      >
        Besøk nettside <ExternalIcon />
      </a>
    )}
    {period.companyKey === "kristiania" && (
      <a
        href={KRISTIANIA_PROGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className={s.panelLink}
      >
        Se programbeskrivelse
      </a>
    )}
  </div>
);
