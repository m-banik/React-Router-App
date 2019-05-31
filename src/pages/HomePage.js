import React from "react";
import Article from "../components/Article";
import "../styles/HomePage.css";
const HomePage = props => {
  const paragraphs = props.articles.map(article => (
    <Article key={article.id} params={article} />
  ));
  return <div className="homePage">{paragraphs}</div>;
};
export default HomePage;
