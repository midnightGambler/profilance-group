import { FILTER_NEWS } from "./types";

export const filterNews = (filter) => ({
  type: FILTER_NEWS,
  filter,
});
