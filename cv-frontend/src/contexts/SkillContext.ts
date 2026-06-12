import { createContext } from "react";
import type { ISkillContext } from "../interfaces/contexts/ISkillContext";

export const SkillContext = createContext<ISkillContext | null>(null);
