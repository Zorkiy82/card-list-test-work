export type TCard = {
  API: string,
  Description: string,
  Auth: string,
  HTTPS: boolean,
  Cors: "yes"|"no";
  Link: string,
  Category: string,
  isLiked?: boolean,
};
