import React from "react";
import "./App.scss";
import { Header, Main, Details, ErrorBoundry } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ErrorBoundry>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id/:name/details" component={Details} />
        </Switch>
      </ErrorBoundry>
    </Router>
  );
}

export default App;
