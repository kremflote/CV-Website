import type { ITenure } from "./ITenure";
import type { ISkill } from "./ISkill";
import type { IShowcase } from "./IShowcase";

export interface ITenureResponseList {
  success: boolean;
  data: ITenure[];
  error?: string;
}

export interface ISkillResponseList {
  success: boolean;
  data: ISkill[];
  error?: string;
}

export interface IShowcaseResponseList {
  success: boolean;
  data: IShowcase[];
  error?: string;
}
