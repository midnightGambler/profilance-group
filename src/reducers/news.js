import {
  ADD_NEWS,
  APPROVE_NEWS,
  FILTER_NEWS,
  REMOVE_NEWS,
} from "../actions/types";
import { news } from "../config";

const defaultState = {
  list: news,
};

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_NEWS: {
      const { filter } = action;

      if (!filter) return defaultState;

      const list = news.filter(({ title }) =>
        title.toLowerCase().includes(filter.toLowerCase())
      );

      return { list };
    }

    case APPROVE_NEWS: {
      const { id } = action;

      const list = state.list.map((article) => {
        if (article.id === id) return { ...article, approved: true };
        return article;
      });

      return { list };
    }

    case ADD_NEWS: {
      const { payload } = action;
      const newArticle = {
        ...payload,
        id: state.list.length,
        approved: false,
        createdAt: Date.now(),
      };

      return { list: [newArticle, ...state.list] };
    }

    case REMOVE_NEWS: {
      const { id } = action;
      const newList = state.list.filter((article) => article.id !== id);

      return { list: newList };
    }

    default:
      return state;
  }
};
