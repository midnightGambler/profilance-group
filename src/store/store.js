import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/auth";
import { newsReducer } from "../reducers/news";

const reducers = combineReducers({ auth: authReducer, news: newsReducer });

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
