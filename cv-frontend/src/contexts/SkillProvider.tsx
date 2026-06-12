import { useEffect, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { ISkill } from "../interfaces/ISkill";
import { getSkills } from "../services/CvService";
import type { ISkillResponseList } from "../interfaces/IServiceResponses";
import { SkillContext } from "./SkillContext";

export const SkillProvider: FC<IProviderProps> = ({ children }) => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [skillIsLoading, setSkillIsLoading] = useState<boolean>(true);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const initializeSkills = async () => {
      const response: ISkillResponseList = await getSkills();

      if (isCancelled) return;

      if (!response.success) {
        setInitError(response.error ?? "Failed to load skills");
        setSkillIsLoading(false);
        return;
      }

      setInitError(null);
      setSkills(response.data);
      setSkillIsLoading(false);
    };

    void initializeSkills();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <SkillContext.Provider
      value={{
        skills,
        skillIsLoading,
        initError,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
