import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/AboutProductPage.css";
const AboutProductPage = props => {
  const product = props.product.text;
  return (
    <div className="productPage">
      <h1>Product page</h1>
      <h2>{product}</h2>
      <NavLink to="/products">Return to products list</NavLink>
    </div>
  );
};
export default AboutProductPage;
