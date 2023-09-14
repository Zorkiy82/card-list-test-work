import { TCard } from "../types";

export function getCards(): Promise<{
    count: number;
    entries: Array<TCard>
  }> {
  return fetch("https://api.publicapis.org/entries").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
}
