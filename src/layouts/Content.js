import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutProductPage from "../pages/AboutProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
const Content = props => {
  const { products, articles, isLogged, users, handleLogin } = props;
  const Routes = products.map(product => (
    <Route
      key={product.id}
      path={product.path}
      render={() => <AboutProductPage product={product} />}
    />
  ));
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage articles={articles} />} />
      <Route
        exact
        path="/products"
        render={() => <ProductsPage products={products} />}
      />
      {Routes}
      <Route exact path="/contact" component={ContactPage} />
      <Route
        exact
        path="/admin"
        render={() => (
          <AdminPage isLogged={isLogged} handleLogin={handleLogin} />
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <LoginPage
            users={users}
            isLogged={isLogged}
            handleLogin={handleLogin}
          />
        )}
      />
      <Route component={ErrorPage} />
    </Switch>
  );
};
export default Content;
