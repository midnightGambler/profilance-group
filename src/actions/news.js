import { ADD_NEWS, APPROVE_NEWS, FILTER_NEWS, REMOVE_NEWS } from "./types";

export const filterNews = (filter) => ({
  type: FILTER_NEWS,
  filter,
});

export const approveNews = (id) => ({
  type: APPROVE_NEWS,
  id,
});

export const addNews = (payload) => ({
  type: ADD_NEWS,
  payload,
});

export const deleteNews = (id) => ({
  type: REMOVE_NEWS,
  id,
});
