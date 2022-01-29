import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import CommentsSection from "../CommentsSection/CommentsSection";
import css from "./article.module.css";

export default function Article({ article }) {
  return (
    <article className={css.post}>
      <h2>{article.title}</h2>
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
      <LikeButton article={article} />
      <CommentsSection comments={article.comments} />
    </article>
  );
}
