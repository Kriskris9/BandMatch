import React from "react";
import "./styles/userFeed.css";
import img from "./testIMG/apple-music-note.jpg";
import { QUERY_GET_PROFILE_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Users = () => {
  const { loading, data } = useQuery(QUERY_GET_PROFILE_CARDS);
  const cards = data?.profileCards || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="users">
      {cards.map((user) => (
        <div className="user-feed-post" key={user._id}>
          <div className="post-container">
            <div className="image-container">
              <img
                className="profilecard-img"
                src={user.profilePic || img}
                alt="profile pic"
              />
            </div>
            <div className="user-info-container">
              <h2 className="name">Username {user.username}</h2>
              <p className="info">Genres: {user.genres}</p>
              <p className="info">Instruments: {user.instrument}</p>
               <p className="info">Location: {user.location}</p>
         
              <div className="about">
                <h3>About Me</h3>
                <p>Experience: {user.experience}</p>
                <p>{user.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Users;