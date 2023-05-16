import React from "react";
import "./styles/profile.css";
import img from "../assets/Drake.png";
import img2 from "../assets/1.png";


const UserCards = () => {
  return (
    <main className="profile">
      <div className="profile-header">
        <div className="profile-info">
          <img className="profile-pic" src={img2}></img>
          <div className="profile-text">
            <span className="profile-username">Username</span>
            <span className="profile-bio">This is my bio</span>
          </div>
        </div>
      </div>
      <div className="profile-post-containers">
        <div className="profile-post">
          <div className="feed-post">
            <div className="profile-feed-post-container">
              <div className="profile-image-post-container">
                <img className="profile-post-img" src={img}></img>
                <div className="profile-info-container">
                  <span className="profile-caption">Caption goes here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-post">
          <div className="feed-post">
            <div className="profile-feed-post-container">
              <div className="profile-image-post-container">
                <img className="profile-post-img" src={img}></img>
                <div className="profile-info-container">
                  <span className="profile-caption">Caption goes here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserCards;
