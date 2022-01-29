import React from "react";
import Comment from "../Comment/Comment";
import css from "./commentsSection.module.css";

export default function CommentsSection({ comments }) {
  return (
    <div className={css.sectionBorderWrap}>
      <section className={css.commentsSection}>
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </section>
    </div>
  );
}
