import { TRequestCardData } from "../types";

export function getCards(): Promise<{
  count: number;
  entries: Array<TRequestCardData>;
}> {
  return fetch("https://api.publicapis.org/entries").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
}
