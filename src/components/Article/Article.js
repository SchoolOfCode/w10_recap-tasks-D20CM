import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import CommentsSection from "../CommentsSection/CommentsSection";

export default function Article({ article }) {
  return (
    <article className="post">
      <h2>{article.title}</h2>
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
      <LikeButton article={article} />
      <CommentsSection comments={article.comments} />
    </article>
  );
}
