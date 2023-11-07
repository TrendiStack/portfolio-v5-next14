export interface Project {
  createdAt: string;
  description: string;
  featuredImage: {
    width: number;
    url: string;
    height: number;
  }[];
  frameworks: string;
  heading: string;
  hosting: string;
  id: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  language: string;
  publishedAt: string;
  services: string;
  slug: string;
  subheading: string;
  updatedAt: string;
}
