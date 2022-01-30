import React from "react";
import css from "./likeButton.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
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
      Like <ThumbUpIcon className={css.thumbUp}>ThumbUp</ThumbUpIcon>
    </button>
  );
}
