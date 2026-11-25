export interface IShowcase {
  id: number;
  title: string;
  description: string;
  details?: {
    title: string;
    body: string[];
  }[];
  image: string;
  image_Thumbnail: string;
  images?: string[];
  gitHub_Link: string;
  category?: "work" | "personal" | "kristiania" | string;
  /** Technology chips on the card. Interim until they come from GitHub topics. */
  tech?: string[];
  /** Shown on the home page's Prosjekter section. */
  featured?: boolean;
}
