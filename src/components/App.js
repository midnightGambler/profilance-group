import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header/Header";

const MainPage = () => <h1>main page</h1>;
const NewsPage = () => <h1>news page</h1>;

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/news" exact component={NewsPage} />
    </Switch>
  </Router>
);
