import React from "react";
import css from "./likeButton.module.css";

export default function LikeButton({ article }) {
  function clickHandler(article) {
    //do something here
    console.log("Liked: " + article.title);
  }

  return (
    <button
      className={css.likeButton}
      onClick={() => {
        clickHandler(article);
      }}
    >
      Like 👍
    </button>
  );
}
