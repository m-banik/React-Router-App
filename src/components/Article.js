import React from "react";
const Article = props => {
  const { title, author, content } = props.params;
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{content}</p>
    </article>
  );
};
export default Article;
