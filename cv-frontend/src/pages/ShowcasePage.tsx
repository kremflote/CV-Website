import { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../components/common/Container";
import Gallery from "../components/Gallery";
import { ExternalIcon } from "../components/TimelineParts";
import { ShowcaseContext } from "../contexts/ShowcaseContext";
import { SkillContext } from "../contexts/SkillContext";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import type { IShowcase } from "../interfaces/IShowcase";
import { formatInlineLinks } from "../components/common/FormattedText";
import NotFoundPage from "./NotFoundPage";
import {
  categoryLabels,
  getMainLanguage,
  getShowcaseCategory,
  getShowcaseGrade,
  listSectionPattern,
  matchesShowcaseParam,
  orderShowcases,
  showcasePath,
} from "../utils/showcase";
import { buttonStyles, projectStyles as s } from "../styles/styles";

type Section = NonNullable<IShowcase["details"]>[number];

/** A section's body: a numbered list, or paragraphs with runs of bullet points as lists. */
const SectionBody = ({ section }: { section: Section }) => {
  const isNumberedList =
    section.list || (!section.kinds && listSectionPattern.test(section.title.trim()));

  if (isNumberedList) {
    return (
      <ol className={s.list}>
        {section.body.map((item, i) => (
          <li key={item} className={s.listItem}>
            <span className={s.listNumber} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{formatInlineLinks(item)}</span>
          </li>
        ))}
      </ol>
    );
  }

  // Group consecutive bullet points into one list.
  const groups: { kind: "p" | "li" | "h"; items: string[] }[] = [];
  section.body.forEach((text, i) => {
    const kind = section.kinds?.[i] ?? "p";
    const last = groups[groups.length - 1];
    if (kind === "li" && last?.kind === "li") last.items.push(text);
    else groups.push({ kind, items: [text] });
  });

  return (
    <>
      {groups.map((group, i) =>
        group.kind === "li" ? (
          <ul key={i} className={s.bullets}>
            {group.items.map((item) => (
              <li key={item}>{formatInlineLinks(item)}</li>
            ))}
          </ul>
        ) : group.kind === "h" ? (
          <h3 key={i} className={s.subheading}>
            {formatInlineLinks(group.items[0])}
          </h3>
        ) : (
          <p key={i} className={s.paragraph}>
            {formatInlineLinks(group.items[0])}
          </p>
        ),
      )}
    </>
  );
};

const ShowcasePage = () => {
  const { id } = useParams<{ id: string }>();
  const { showcases, showcaseIsLoading } = useContext(ShowcaseContext)!;
  const { skills } = useContext(SkillContext) as ISkillContext;

  const ordered = useMemo(() => orderShowcases(showcases), [showcases]);
  const position = ordered.findIndex((showcase) => matchesShowcaseParam(showcase, id ?? ""));
  const showcase = ordered[position];

  if (showcaseIsLoading) {
    return (
      <Container>
        <p className={s.status}>Laster …</p>
      </Container>
    );
  }
  if (!showcase) return <NotFoundPage />;

  const previous = position > 0 ? ordered[position - 1] : null;
  const next = position < ordered.length - 1 ? ordered[position + 1] : null;
  const grade = getShowcaseGrade(showcase);
  const languages = skills
    .filter((skill) => skill.category === "Programming Languages")
    .map((skill) => skill.skill_Name);
  const mainLanguage = getMainLanguage(showcase, languages);
  const images =
    showcase.images && showcase.images.length > 0
      ? showcase.images
      : [showcase.image].filter(Boolean);
  const sections = (showcase.details ?? []).filter(
    (section) => !/^karakter\b/i.test(section.title.trim()),
  );
  const gradeSection = showcase.details?.find((section) =>
    /^karakter\b/i.test(section.title.trim()),
  );

  const facts = [
    { label: "Type", value: categoryLabels[getShowcaseCategory(showcase)].singular },
    mainLanguage && { label: "Hovedspråk", value: mainLanguage },
    showcase.updatedAt && {
      label: "Sist oppdatert",
      value: new Date(showcase.updatedAt).toLocaleDateString("nb-NO", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <Container>
      <article>
        <header className={s.header}>
          <Link to="/portfolio" className={s.back}>
            <span aria-hidden="true">←</span> Alle prosjekter
          </Link>
          <p className={s.category}>
            {categoryLabels[getShowcaseCategory(showcase)].singular}
          </p>
          <div className={s.titleRow}>
            <h1 className={s.title}>{showcase.title}</h1>
            <p className={s.lead}>{formatInlineLinks(showcase.description)}</p>
          </div>
        </header>

        <div className={s.facts}>
          <dl className={s.factList}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className={s.factLabel}>{fact.label}</dt>
                <dd className={s.factValue}>{fact.value}</dd>
              </div>
            ))}
            {grade && (
              <div>
                <dt className={s.factLabel}>Karakter</dt>
                <dd className={s.factValue}>
                  <span className={s.gradeBadge}>{grade}</span>
                </dd>
              </div>
            )}
          </dl>
          {showcase.gitHub_Link && (
            <a
              href={showcase.gitHub_Link}
              target="_blank"
              rel="noreferrer"
              className={`${buttonStyles.base} ${buttonStyles.primary}`}
            >
              Se koden på GitHub <ExternalIcon />
            </a>
          )}
        </div>

        <Gallery key={showcase.id} images={images} title={showcase.title} version={showcase.id} />

        <div className={s.body}>
          <div className={s.main}>
            {gradeSection && gradeSection.body.length > 0 && (
              <section className={s.section}>
                <h2 className={s.sectionTitle}>
                  Karakter <span className={s.gradeBadge}>{grade}</span>
                </h2>
                {gradeSection.body.map((paragraph) => (
                  <p key={paragraph} className={s.paragraph}>
                    {formatInlineLinks(paragraph)}
                  </p>
                ))}
              </section>
            )}
            {sections.map((section) => (
              <section key={section.title} className={s.section}>
                <h2 className={s.sectionTitle}>{section.title}</h2>
                <SectionBody section={section} />
              </section>
            ))}
          </div>

          <aside className={s.sidebar}>
            {showcase.tech && showcase.tech.length > 0 && (
              <div>
                <h2 className={s.sidebarTitle}>Teknologi</h2>
                <ul className={s.chips}>
                  {showcase.tech.map((tech) => (
                    <li key={tech} className={s.chip}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className={s.sidebarTitle}>Lenker</h2>
              <ul className={s.links}>
                {showcase.gitHub_Link && (
                  <li>
                    <a href={showcase.gitHub_Link} target="_blank" rel="noreferrer" className={s.link}>
                      Kildekode på GitHub <ExternalIcon />
                    </a>
                  </li>
                )}
                <li>
                  <Link to="/portfolio" className={s.link}>
                    Alle prosjekter
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <nav className={s.pager} aria-label="Andre prosjekter">
          {previous ? (
            <Link to={showcasePath(previous)} className={s.pagerLink}>
              <span className={s.pagerLabel}>← Forrige prosjekt</span>
              <span className={s.pagerTitle}>{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={showcasePath(next)} className={`${s.pagerLink} ${s.pagerNext}`}>
              <span className={s.pagerLabel}>Neste prosjekt →</span>
              <span className={s.pagerTitle}>{next.title}</span>
            </Link>
          )}
        </nav>
      </article>
    </Container>
  );
};

export default ShowcasePage;
