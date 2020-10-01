import { FILTER_NEWS } from "../actions/types";
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

    default:
      return state;
  }
};
