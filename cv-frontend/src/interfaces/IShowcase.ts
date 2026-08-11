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
}
