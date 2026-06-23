export interface IShowcase {
  id: number;
  title: string;
  description: string;
  image: string;
  image_Thumbnail: string;
  gitHub_Link: string;
  category?: "work" | "personal" | "kristiania" | string;
}
