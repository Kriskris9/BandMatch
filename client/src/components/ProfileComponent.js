import React, { useState } from "react";
import "./styles/profile.css";
import img from "./testIMG/apple-music-note.jpg";
import Modal from "./Modal";


  
 

const UserCards = ({profile, bio}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const redirectPage = () => {
    window.location.assign("/feed");
  };

  return (
     <main className="profile">
        
        <div className="profile-header">
          <div className="profile-info">
            <img className="profile-pic" src={img}></img>
            <div className="profile-text">
              <span className="profile-username"> username: {profile}</span>
              <span className="profile-bio">bio: {bio}</span>
            </div>
          </div>
        </div>

        <div className="profile-post-containers">
          <div className="feed-post">
            <div className="profile-feed-post-container">
              <div className="profile-image-post-container">
                <img className="profile-post-img" src={img}></img>
                <div className="profile-info-container">
                  <span className="profile-caption">Caption goes here</span>
                </div>

        <div>
          <button className="create-btn" onClick={redirectPage}>
            Create Post
          </button>
          <button className="create-btn" onClick={toggleModal}>
            Create Card
          </button>
        </div>
      </div>
      <main className="profile-post-containers">
        <div className="profile-feed-post">
          <div className="profile-feed-post-container">
            <div className="profile-image-post-container">
              <img className="profile-post-img" src={img}></img>
              <div className="profile-info-container">
                <span className="profile-caption">Caption goes here</span>

                {showModal && <Modal toggle={toggleModal} />}
              </div>
            </div>
          </div>
          </div>
        </div>
    </main>
  );
};

export default UserCards;
