import React, { useState } from "react";
import "./styles/profile.css";
import img from "./testIMG/apple-music-note.jpg";
import Modal from "./Modal";
import Mod from "./bioModel"

const UserCards = ({ profile, bio, posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [showBio,setShowBio] = useState(false);
  

  const updateProfile=()=>{
    setShowBio(!showBio);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const redirectPage = () => {
    window.location.assign("/feed");
  };
  console.log(posts);

  return (
    <main className="profile">
      <div className="profile-header">
        <div className="profile-info">
          <img className="profile-pic" src={img}></img>
          <div className="profile-text">
            <span className="profile-username"> {profile}</span>
            <span className="profile-bio">bio: {bio}</span>
          </div>
        </div>

        <div>
          <button className="create-btn" onClick={updateProfile}>
            Update profile
          </button>
          <button className="create-btn" onClick={redirectPage}>
            Create Post
          </button>
          <button className="create-btn" onClick={toggleModal}>
            Create Card
          </button>
        </div>
      </div>
      {posts.map((post) => (
        <div className="profile-post-containers">
          <div className="profile-feed-post">
            <div className="profile-feed-post-container">
              <div className="profile-image-post-container">
                <img className="profile-post-img" src={img}></img>
                <div className="profile-info-container">
                  <span className="profile-caption">{post._id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showModal && <Modal toggle={toggleModal} />}
      {showBio && <Mod doggle={updateProfile} />}
    </main>
  );
};

export default UserCards;
