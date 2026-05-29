import { useContext, useState, type FC } from "react";
import { SkillContext } from "../contexts/SkillProvider";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";
import type { ISkill } from "../interfaces/ISkill";

interface SkillTagProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SkillTag: FC<SkillTagProps> = ({ label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded border text-md transition-colors cursor-pointer
      ${
        isSelected
          ? "bg-wood text-white border-wood"
          : "bg-transparent text-wood-dark border-wood hover:bg-wood hover:text-white"
      }`}
  >
    {label}
  </button>
);

const formatDescription = (description: string) => {
  const parts = description.split("Emnebeskrivelse:");
  if (parts.length === 1)
    return (
      <p className="text-lg text-wood-dark font-semibold">{description}</p>
    );

  return (
    <>
      <p className="text-lg text-wood-dark font-semibold">{parts[0].trim()}</p>
      <br />
      <br />
      <p className="text-lg text-wood-dark">
        <span className="font-semibold">Emnebeskrivelse: </span>
        {parts[1].trim()}
      </p>
    </>
  );
};

const SkillSection: FC = () => {
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

  if (skillIsLoading) return <p className="text-center mt-12">Laster...</p>;
  if (initError)
    return <p className="text-center mt-12 text-red-500">{initError}</p>;

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
      <h1 className="mb-6 text-center text-wood text-4xl font-semibold">
        IT Kompetanse
      </h1>
      <hr className="mt-4 mb-8 border-wood" />

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">Programmeringsspråk</h3>
          <div className="flex flex-wrap gap-2">
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
          <h3 className="font-semibold text-lg mb-2">Andre teknologier</h3>
          <div className="flex flex-wrap gap-2">
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

      <hr className="border-wood mt-10" />

      <div className="mt-6">
        <div className=" ">
          <div className={!selectedSkill ? "invisible" : ""}>
            {selectedSkill && formatDescription(selectedSkill.description)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
