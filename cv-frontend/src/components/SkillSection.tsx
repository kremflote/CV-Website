import { useContext, useState, type FC } from "react";
import { SkillContext } from "../contexts/SkillContext";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import type { ISkill } from "../interfaces/ISkill";
import { skillStyles as s } from "../styles/styles";
import { formatInlineLinks } from "./common/FormattedText";

interface SkillSectionProps {
  /** Called when an inline project link is followed (the CV modal closes itself). */
  onInternalLinkClick?: () => void;
  /** "page": chips left, description right. "modal": stacked, for the CV modal's narrow pane. */
  layout?: "page" | "modal";
}

const groups = [
  { category: "Programming Languages", title: "Programmeringsspråk" },
  { category: "Technologies", title: "Teknologier" },
];

const SkillDescription: FC<{ skill: ISkill; onInternalLinkClick?: () => void }> = ({
  skill,
  onInternalLinkClick,
}) => {
  const [summary, courseText] = skill.description.split("Emnebeskrivelse:");

  return (
    <>
      <p className={s.descriptionText}>
        {formatInlineLinks(summary.trim(), onInternalLinkClick)}
      </p>
      {courseText && (
        <p className={s.descriptionSecondary}>
          <span className={s.descriptionLabel}>Emnebeskrivelse: </span>
          {formatInlineLinks(courseText.trim(), onInternalLinkClick)}
        </p>
      )}
    </>
  );
};

const SkillSection: FC<SkillSectionProps> = ({ onInternalLinkClick, layout = "page" }) => {
  const { skills, skillIsLoading, initError } = useContext(SkillContext) as ISkillContext;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (skillIsLoading) return <p className={s.status}>Laster …</p>;
  if (initError) return <p className={s.status}>{initError}</p>;

  const grouped = groups
    .map((group) => ({
      ...group,
      skills: skills.filter((skill) => skill.category === group.category),
    }))
    .filter((group) => group.skills.length > 0);
  const selected =
    skills.find((skill) => skill.id === selectedId) ?? grouped[0]?.skills[0];
  const descriptionId = `skill-description-${layout}`;

  return (
    <div className={layout === "page" ? s.pageLayout : s.modalLayout}>
      <div className={s.groups}>
        {grouped.map((group) => (
          <div key={group.category}>
            <h3 className={s.groupTitle}>{group.title}</h3>
            <div className={s.chips}>
              {group.skills.map((skill) => {
                const isSelected = skill.id === selected?.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    aria-pressed={isSelected}
                    aria-controls={descriptionId}
                    onClick={() => setSelectedId(skill.id)}
                    className={`${s.chip} ${isSelected ? s.chipSelected : s.chipIdle}`}
                  >
                    {skill.skill_Name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div id={descriptionId} className={s.description} aria-live="polite">
          <h3 className={layout === "page" ? s.skillName : s.skillNameSmall}>
            {selected.skill_Name}
          </h3>
          <SkillDescription skill={selected} onInternalLinkClick={onInternalLinkClick} />
        </div>
      )}
    </div>
  );
};

export default SkillSection;
