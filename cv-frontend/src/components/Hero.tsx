import { useContext, useMemo, type FC } from "react";
import { Link } from "react-router-dom";
import { TenureContext } from "../contexts/TenureContext";
import { SkillContext } from "../contexts/SkillContext";
import type { ITenureContext } from "../interfaces/contexts/ITenureContext";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import { Container } from "./common/Container";
import { buildTimelinePeriods, formatDuration, today } from "../utils/tenure";
import { buttonStyles, heroStyles } from "../styles/styles";

const siteName = "Marius Kristensen";

const joinNorwegian = (items: string[]) =>
  items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} og ${items[items.length - 1]}`;

interface SummaryRow {
  label: string;
  value: string;
  detail?: string;
}

const Hero: FC = () => {
  const { tenures } = useContext(TenureContext) as ITenureContext;
  const { skills } = useContext(SkillContext) as ISkillContext;

  const rows = useMemo<SummaryRow[]>(() => {
    const periods = buildTimelinePeriods(tenures);
    const now = today.getTime();
    const result: SummaryRow[] = [];

    const currentStudy = periods.find(
      (period) =>
        period.isEducation &&
        period.start.getTime() <= now &&
        period.end.getTime() >= now,
    );
    if (currentStudy) {
      result.push({
        label: "Studerer",
        value: currentStudy.role,
        detail: `${currentStudy.company}, ${currentStudy.start.getFullYear()}–${currentStudy.end.getFullYear()}`,
      });
    }

    // Employers with at least a year in total, longest first.
    const work = periods.filter((period) => !period.isEducation);
    const monthsByCompany = new Map<string, number>();
    work.forEach((period) =>
      monthsByCompany.set(
        period.company,
        (monthsByCompany.get(period.company) ?? 0) + period.months,
      ),
    );
    const mainEmployers = [...monthsByCompany.entries()]
      .filter(([, months]) => months >= 12)
      .sort((a, b) => b[1] - a[1])
      .map(([company]) => company);
    const workMonths = work.reduce((sum, period) => sum + period.months, 0);
    if (mainEmployers.length > 0) {
      result.push({
        label: "Bakgrunn",
        value: joinNorwegian(mainEmployers),
        detail: `${formatDuration(workMonths)} arbeidserfaring`,
      });
    }

    const languages = skills
      .filter((skill) => skill.category === "Programming Languages")
      .map((skill) => skill.skill_Name);
    if (languages.length > 0) {
      result.push({ label: "Koder i", value: languages.join(", ") });
    }

    return result;
  }, [tenures, skills]);

  return (
    <section className={heroStyles.section} aria-labelledby="hero-title">
      <Container>
        <p className={heroStyles.label}>Digital CV</p>
        <h1 id="hero-title" className={heroStyles.title}>
          {siteName}
        </h1>

        <div className={heroStyles.columns}>
          <div>
            <p className={heroStyles.lead}>
              En <strong className={heroStyles.emphasis}>nystartet utvikler</strong>{" "}
              og tidligere kundebehandler med{" "}
              <strong className={heroStyles.emphasis}>
                bakgrunn i salg og relasjonsbygging.
              </strong>
            </p>
            <div className={heroStyles.actions}>
              <Link
                to={{ hash: "#prosjekter" }}
                className={`${buttonStyles.base} ${buttonStyles.primary}`}
              >
                Se prosjekter
              </Link>
              <Link
                to={{ hash: "#kontakt" }}
                className={`${buttonStyles.base} ${buttonStyles.outline}`}
              >
                Ta kontakt
              </Link>
            </div>
          </div>

          <dl className={heroStyles.summary}>
            {rows.map((row) => (
              <div key={row.label} className={heroStyles.summaryRow}>
                <dt className={heroStyles.summaryLabel}>{row.label}</dt>
                <dd className={heroStyles.summaryValue}>
                  {row.value}
                  {row.detail && (
                    <span className={heroStyles.summaryDetail}>{row.detail}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
