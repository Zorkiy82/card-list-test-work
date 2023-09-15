export type TRequestCardData = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: "yes" | "no";
  Link: string;
  Category: string;
};

export type TCard = {
  api: string;
  description: string;
  auth: string;
  https: boolean;
  cors: "yes" | "no";
  link: string;
  category: string;
  isLike: boolean;
};
