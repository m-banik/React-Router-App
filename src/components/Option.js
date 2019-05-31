import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Option = props => {
  const { text, path } = props.param;
  return (
    <li>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <NavLink
              exact
              to={path}
              className={path === "/admin" ? "active" : null}
            >
              {text}
            </NavLink>
          )}
        />
        <Route
          render={() => (
            <NavLink exact to={path}>
              {text}
            </NavLink>
          )}
        />
      </Switch>
    </li>
  );
};
export default Option;
