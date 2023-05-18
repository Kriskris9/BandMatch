import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import "./styles/comment.css";



function CommentForm({ postId }) {
  const [commentText, setCommentText] = useState('');

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      
      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCommentText(value); 
  };

  return (

    <div className="comment-section">
      <h2>Comments</h2>
      {Auth.loggedIn() ? (
        <form className="comment-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            value={commentText}
            style={{ lineHeight: '1.5', resize: 'vertical' }}
            onChange={handleChange} />
          <button type="submit" className="comment-submit">
            Post
          </button>
        </form>

      ) : (


        <p>
          You need to be logged in to post a comment. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>

      )}
    </div>
      
  );
};


export default CommentForm;




