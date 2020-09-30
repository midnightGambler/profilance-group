import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { MainPage } from "../pages/MainPage/MainPage";
import { NewsPage } from "../pages/MainPage/NewsPage";

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/news" exact component={NewsPage} />
    </Switch>
  </Router>
);
