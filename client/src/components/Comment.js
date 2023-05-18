import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { Link } from "react-router-dom";


import "./styles/comment.css";
import Auth from "../utils/auth";


const Comment = () => {
  
  const [inputText, setCommentText] = useState("");
  // const [uploadComment, setNewComment]= useState(true)
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          commentText: inputText,
        },
      });
      alert("Your comment was added successfully");
      console.log(data.addComment.comments);

      setCommentText("");
      
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleTextChange = (event) => {
    setCommentText(event.target.value);
  };


  return (
    <div className="comment-section">
      {Auth.loggedIn() ? (
        <>
      <h2>Comments</h2>
      <div className="comment">
        <div className="comment-author">John Doe</div>
        <div className="comment-content">This is a great article!</div>
      </div> 

      <form className="comment-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={inputText}
          onChange={handleTextChange}
        />
        <button type="submit" className="comment-submit" >
          Post
        </button>
      </form>
      </>
      ) : (
        <p>
          You need to be logged in to post a comment. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Comment;
