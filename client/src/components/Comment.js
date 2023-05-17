import React from "react";
import "./styles/comment.css";

const Comment = () => {
  return (
    <div class="comment-section">
      <h2>Comments</h2>
      <div class="comment">
        <div class="comment-author">John Doe</div>
        <div class="comment-content">This is a great article!</div>
      </div>

      <form className="comment-form">
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
        />
        <button type="submit" className="comment-submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default Comment;
