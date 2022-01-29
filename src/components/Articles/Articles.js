import React from "react";
import Article from "../Article/Article";

export default function Articles({ articles }) {
  return articles.map((article) => {
    return <Article article={article} key={article.id} />;
  });
}
