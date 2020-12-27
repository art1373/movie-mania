import React from "react";
import "./App.scss";
import { Header, Main, Details, NotFound } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id/:name/details" component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
