import React from "react";

export default function Comment({ comment }) {
  return (
    <div key={comment.id} className="comment">
      <h4>{comment.name} says:</h4>
      <p>{comment.text}</p>
    </div>
  );
}
