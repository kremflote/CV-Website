import { useContext, useState, type FC } from "react";
import { SkillContext } from "../contexts/SkillContext";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import type { ISkill } from "../interfaces/ISkill";
import { pageStyles, skillStyles } from "../styles/styles";
import { formatInlineLinks } from "./common/FormattedText";

interface SkillTagProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

interface SkillSectionProps {
  onInternalLinkClick?: () => void;
}

const SkillTag: FC<SkillTagProps> = ({ label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`${skillStyles.tagBase} ${
      isSelected ? skillStyles.tagSelected : skillStyles.tagUnselected
    }`}
  >
    {label}
  </button>
);

const formatDescription = (
  description: string,
  onInternalLinkClick?: () => void,
) => {
  const parts = description.split("Emnebeskrivelse:");

  if (parts.length === 1) {
    return (
      <p className={skillStyles.descriptionStrong}>
        {formatInlineLinks(description, onInternalLinkClick)}
      </p>
    );
  }

  return (
    <>
      <p className={skillStyles.descriptionStrong}>
        {formatInlineLinks(parts[0].trim(), onInternalLinkClick)}
      </p>
      <p className={skillStyles.descriptionText}>
        <span className={skillStyles.descriptionLabel}>
          Emnebeskrivelse:{" "}
        </span>
        {formatInlineLinks(parts[1].trim(), onInternalLinkClick)}
      </p>
    </>
  );
};

const SkillSection: FC<SkillSectionProps> = ({ onInternalLinkClick }) => {
  const { skills, skillIsLoading, initError } = useContext(
    SkillContext,
  ) as ISkillContext;
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const handleClick = (skill: ISkill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  const programmingLanguages = skills.filter(
    (s) => s.category === "Programming Languages",
  );
  const technologies = skills.filter((s) => s.category === "Technologies");

  if (skillIsLoading) {
    return <p className={skillStyles.loadingText}>Laster...</p>;
  }

  if (initError) {
    return (
      <p className={`mt-12 text-center ${pageStyles.errorText}`}>{initError}</p>
    );
  }

  return (
    <section className={skillStyles.shell}>
      <div className={skillStyles.controlColumn}>
        <div className="space-y-5">
          <div>
            <h3 className={skillStyles.groupTitle}>Programmeringsspråk</h3>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((skill) => (
                <SkillTag
                  key={skill.id}
                  label={skill.skill_Name}
                  isSelected={selectedSkill?.id === skill.id}
                  onClick={() => handleClick(skill)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className={skillStyles.groupTitle}>Teknologier</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((skill) => (
                <SkillTag
                  key={skill.id}
                  label={skill.skill_Name}
                  isSelected={selectedSkill?.id === skill.id}
                  onClick={() => handleClick(skill)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={skillStyles.descriptionPanel}>
        <div className={skillStyles.descriptionContent}>
          {selectedSkill ? (
            <div className="space-y-5">
              {formatDescription(
                selectedSkill.description,
                onInternalLinkClick,
              )}
            </div>
          ) : (
            <p className={skillStyles.emptyText}>
              Trykk en knapp over for detaljer.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
