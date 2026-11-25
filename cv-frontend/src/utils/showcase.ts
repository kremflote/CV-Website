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
