import React from "react";
import Option from "../components/Option";
import "../styles/ProductsPage.css";
const ProductsPage = props => {
  const productsList = props.products.map(product => (
    <Option key={product.id} param={product} />
  ));
  return (
    <div className="productsPage">
      <h1>list of our products</h1>
      <ul>{productsList}</ul>
    </div>
  );
};
export default ProductsPage;
