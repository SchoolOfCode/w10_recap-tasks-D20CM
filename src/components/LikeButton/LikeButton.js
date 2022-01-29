import React from "react";

export default function LikeButton({ article }) {
  function clickHandler(article) {
    //do something here
    console.log("Liked: " + article.title);
  }

  return (
    <button
      className="like-button"
      onClick={() => {
        clickHandler(article);
      }}
    >
      Like 👍
    </button>
  );
}
