import React from "react";
import Comment from "../Comment/Comment";

export default function CommentsSection({ comments }) {
  return (
    <section className="comment-section">
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </section>
  );
}
