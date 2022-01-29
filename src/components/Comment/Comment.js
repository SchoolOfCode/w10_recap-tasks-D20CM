import React from "react";
import css from "./comment.module.css";

export default function Comment({ comment }) {
  return (
    <div key={comment.id} className={css.comment}>
      <h4>{comment.name} says:</h4>
      <p>{comment.text}</p>
    </div>
  );
}
