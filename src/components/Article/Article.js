import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import CommentsSection from "../CommentsSection/CommentsSection";
import css from "./article.module.css";
import Rating from "@mui/material/Rating";

export default function Article({ article }) {
  return (
    <article className={css.post}>
      <h2>{article.title}</h2>
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
      <div className={css.feedbackWrapper}>
        <LikeButton article={article} />
        <div className={css.rating}>
          Rate this article: <Rating />
        </div>
      </div>
      <CommentsSection comments={article.comments} />
    </article>
  );
}
