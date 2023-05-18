import React, { useState, useEffect } from "react";
import "./styles/comment.css";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";

const Comment = ({ comments, id }) => {
  const [commentText, setCommentText] = useState("");
  const [addComment, { error }] = useMutation(ADD_COMMENT);
  useEffect(() => {
    console.log(commentText, id);
  });
  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(commentText);
      await addComment({
        variables: {
          commentText: commentText,
          postId: id,
        },
      });
      window.location.assign("/feed");
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments &&
        comments.map((comment) => (
          <div className="comment" key={comment._id}>
            <div className="comment-author">{comment.profile.username}</div>
            <div className="comment-content">{comment.commentText}</div>
          </div>
        ))}

      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit" className="comment-submit">
          Post
        </button>
      </form>
      {error && <div className="error-message">{error.message}</div>}
    </div>
  );
};

export default Comment;



