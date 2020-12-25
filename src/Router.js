import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PackageJson from "../package.json";
import Home from "./components/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <footer>
        <div className="content has-text-centered">
          <p>
            Build v{PackageJson.version}-
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              {process.env.REACT_APP_COMMIT_REF?.substring(0, 7)}
            </a>
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}
