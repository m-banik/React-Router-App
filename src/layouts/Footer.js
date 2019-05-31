import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => (
  <div className="footer">
    <h2>footer</h2>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <h3>
            you're on <span>the main page</span>
          </h3>
        )}
      />
      <Route
        path="/:idPage/:idSubPage"
        render={props => (
          <Fragment>
            <h3>
              you're on <span>{props.match.params.idSubPage}</span>
            </h3>
            <h3>
              url: <span>{props.match.url}</span>
            </h3>
            <h3>
              pathname: <span>{props.match.path}</span>
            </h3>
          </Fragment>
        )}
      />
      <Route
        path="/:idPage"
        render={props => (
          <Fragment>
            <h3>
              you're on <span>{props.match.params.idPage}</span>
            </h3>
            <h3>
              url: <span>{props.match.url}</span>
            </h3>
            <h3>
              pathname: <span>{props.match.path}</span>
            </h3>
          </Fragment>
        )}
      />
    </Switch>
  </div>
);
export default Footer;
