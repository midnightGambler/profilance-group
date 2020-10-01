import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Header } from "./Header/Header";
import { MainPage } from "../pages/MainPage/MainPage";
import { NewsPage } from "../pages/NewsPage/NewsPage";

export const App = () => (
  <Provider store={store}>
    <Router basename="/">
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/news" exact component={NewsPage} />
      </Switch>
    </Router>
  </Provider>
);
