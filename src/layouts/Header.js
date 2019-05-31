import React from "react";
import { Switch, Route } from "react-router-dom";
const Header = props => {
  const { graphics } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <img src={graphics[0]} alt="Paris" />}
      />
      <Route
        path="/products"
        render={() => <img src={graphics[1]} alt="Wrocław" />}
      />
      <Route
        path="/contact"
        render={() => <img src={graphics[2]} alt="Asia" />}
      />
      <Route
        render={() => (
          <img
            src={graphics[Math.floor(Math.random() * graphics.length)]}
            alt="location"
          />
        )}
      />
    </Switch>
  );
};
export default Header;
