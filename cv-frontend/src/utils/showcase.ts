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

/** The grade letter: from the data, or from a "Karakter A" detail section. */
export const getShowcaseGrade = (showcase: IShowcase): string | null => {
  if (showcase.grade) return showcase.grade;
  const section = showcase.details?.find((detail) =>
    /^karakter\s+[a-f]\b/i.test(detail.title.trim()),
  );
  return section ? section.title.trim().slice(-1).toUpperCase() : null;
};

const imageVersion = "20260529";

/** Local file names live in /public/images; GitHub screenshots are full URLs. */
export const imageSrc = (image: string, cacheKey: string | number = "") =>
  /^(https?:)?\/\//.test(image) || image.startsWith("/")
    ? image
    : `/images/${image}?v=${cacheKey}-${imageVersion}`;

export const getThumbnailSrc = (showcase: IShowcase) =>
  imageSrc(showcase.image_Thumbnail, showcase.id);

/** Project URL: the repository name when there is one, else the legacy id. */
export const showcasePath = (showcase: IShowcase) =>
  `/showcase/${encodeURIComponent(showcase.slug ?? String(showcase.id))}`;

/** Matches both /showcase/<repository name> and legacy /showcase/8 links. */
export const matchesShowcaseParam = (showcase: IShowcase, param: string) =>
  String(showcase.id) === param || showcase.slug?.toLowerCase() === param.toLowerCase();

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
 * Main language for the facts strip: GitHub's primary language, or else the
 * first technology that is one of the programming languages in the skills list.
 */
export const getMainLanguage = (showcase: IShowcase, languages: string[]) =>
  showcase.language ?? showcase.tech?.find((tech) => languages.includes(tech)) ?? null;
