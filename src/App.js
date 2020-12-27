import React from "react";
import "./App.scss";
import { Header, Main, Details } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id/:name/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
