import React from "react";
import "./styles/homeFeed.css";
import img from "./testIMG/apple-music-note.jpg";

const FeedComponent = () => {
  return (
    <main className="feed">
      <div className="feed-post">
        <div className="feed-post-container">
          <div className="profile-pic-container">
            <img className="profile-pic-img" src={img}></img>
            <div className="username">Username</div>
          </div>
          <div className="image-post-container">
            <img className="post-img" src={img}></img>
            <div className="info-container">
              <span className="caption">Caption goes here</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeedComponent;
