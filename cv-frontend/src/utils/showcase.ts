import type { IShowcase } from "../interfaces/IShowcase";

export type ShowcaseCategory = "work" | "personal" | "kristiania";

export const categoryLabels: Record<ShowcaseCategory, { singular: string; plural: string }> = {
  work: { singular: "Arbeid", plural: "Arbeid" },
  personal: { singular: "Sideprosjekt", plural: "Sideprosjekter" },
  kristiania: { singular: "Kristiania", plural: "Kristiania" },
};

const academicPattern =
  /kristiania|eksamen|exam|pgr|pg\d|bachelor|frontend|mobil|algoritm|datastruktur|java|linux|semester|database/i;

export const getShowcaseCategory = (showcase: IShowcase): ShowcaseCategory => {
  const category = showcase.category?.toLowerCase();
  if (category === "work" || category === "personal" || category === "kristiania") {
    return category;
  }
  return academicPattern.test(`${showcase.title} ${showcase.description}`)
    ? "kristiania"
    : "personal";
};

/** The grade letter from a "Karakter A" detail section, if there is one. */
export const getShowcaseGrade = (showcase: IShowcase): string | null => {
  const section = showcase.details?.find((detail) =>
    /^karakter\s+[a-f]\b/i.test(detail.title.trim()),
  );
  return section ? section.title.trim().slice(-1).toUpperCase() : null;
};

const thumbnailVersion = "20260529";

export const getThumbnailSrc = (showcase: IShowcase) =>
  `/images/${showcase.image_Thumbnail}?v=${showcase.id}-${thumbnailVersion}`;

export const categoryOrder: ShowcaseCategory[] = ["work", "personal", "kristiania"];

/** Projects grouped by category in display order; empty groups are left out. */
export const groupShowcases = (showcases: IShowcase[]) =>
  categoryOrder
    .map((category) => ({
      category,
      showcases: showcases.filter((showcase) => getShowcaseCategory(showcase) === category),
    }))
    .filter((group) => group.showcases.length > 0);

/** All projects in the order the portfolio page shows them (used for previous/next). */
export const orderShowcases = (showcases: IShowcase[]) =>
  groupShowcases(showcases).flatMap((group) => group.showcases);

/** Detail sections whose paragraphs are really list items. */
export const listSectionPattern = /^(funksjoner|teknologi|arkitektur|tjenester)$/i;

/**
 * Main language for the facts strip: the first technology that is one of
 * the programming languages in the skills list. Interim until it comes from GitHub.
 */
export const getMainLanguage = (showcase: IShowcase, languages: string[]) =>
  showcase.tech?.find((tech) => languages.includes(tech)) ?? null;
