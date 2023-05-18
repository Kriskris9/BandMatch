import React from "react";
import "./styles/comment.css";

const CommentForm = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments &&
        comments.map((comment) => (
          <div className="comment">
            <div className="comment-author">{comment.profile.username}</div>
            <div className="comment-content">{comment.commentText}</div>
          </div>
        ))}

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

export default CommentForm;




