import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import "./styles/createPost.css";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function CreatePost() {
  const [captionText, setCaptionText] = useState("");
  const [captionIMG, setCaptionIMG] = useState("");

  const [addCaption, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCaption({
        variables: {
          postText: captionText,
          image: captionIMG,
        },
      });
      alert("Post created");

      setCaptionText("");
      setCaptionIMG("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "captionText") {
      setCaptionText(value);
    }
  };

  const handleIMG = (event) => {
    const { name, value } = event.target;

    if (name === "captionIMG") {
      setCaptionIMG(value);
    }
  };

  return (
    <div className="new-post-form">
      {Auth.loggedIn() ? (
        <>
          <form className="create-post-form" onSubmit={handleFormSubmit}>
            <div className="create-post-inputs">
              <div className="create-post-caption">
                <input
                  id="caption"
                  name="captionText"
                  placeholder="Enter your caption"
                  value={captionText}
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <button type="submit">Post</button>
                <button type="submit">Media</button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create a post. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default CreatePost;
