import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import "./styles/createPost.css";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import UploadFile from "./UploadFile";

function CreatePost() {
  const [captionText, setCaptionText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImg, setUploadedImg] = useState(true);

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText: captionText,
          image: imageUrl,
        },
      });

      alert("Post created");
      console.log(data);

      setCaptionText("");
      setImageUrl("");
      setUploadedImg(false);
      window.location.assign("/feed");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCaptionChange = (event) => {
    setCaptionText(event.target.value);
  };

  const handleImageUpload = (imageUrl) => {
    setImageUrl(imageUrl);
    alert("File Uploaded");
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
                  onChange={handleCaptionChange}
                />
              </div>
            </div>
            <div className="buttons">
              <UploadFile
                handleImageUpload={handleImageUpload}
                uploadedImg={uploadedImg}
              />
              <button className="upload-btn" type="submit">
                Post
              </button>
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
