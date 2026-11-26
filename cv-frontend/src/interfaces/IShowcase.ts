export interface IShowcaseSection {
  title: string;
  body: string[];
  /** Render the body as a numbered list. */
  list?: boolean;
  /** For mixed sections: paragraph ("p"), bullet point ("li") or sub-heading ("h") per entry. */
  kinds?: ("p" | "li" | "h")[];
}

export interface IShowcase {
  /** Legacy numeric id (old /showcase/8 links) or the repository name. */
  id: number | string;
  /** Repository name; used in project URLs when present. */
  slug?: string;
  title: string;
  description: string;
  details?: IShowcaseSection[];
  /** File name in /public/images, or a full URL. */
  image: string;
  image_Thumbnail: string;
  images?: string[];
  gitHub_Link: string;
  category?: "work" | "personal" | "kristiania" | string;
  /** Technology chips (GitHub topics). */
  tech?: string[];
  /** Primary language reported by GitHub. */
  language?: string | null;
  /** Grade letter, when the project was graded. */
  grade?: string;
  /** Last push to the repository (ISO date). */
  updatedAt?: string;
  /** Shown on the home page's Prosjekter section. */
  featured?: boolean;
}
