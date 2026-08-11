import type { FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import { skills } from "../data/staticCvData";
import { SkillContext } from "./SkillContext";

export const SkillProvider: FC<IProviderProps> = ({ children }) => {
  return (
    <SkillContext.Provider
      value={{
        skills,
        skillIsLoading: false,
        initError: null,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
