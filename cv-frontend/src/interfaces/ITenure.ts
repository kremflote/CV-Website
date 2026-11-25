export interface ITenure {
  id: number;
  companyName: string;
  workTitle: string;
  startDate: string;
  endDate: string;
  /** Text shown in the timeline's detail panel. */
  description?: string;
  /** Whether this is a study period (used for the hero's "Studerer" row). */
  isEducation?: boolean;
}
