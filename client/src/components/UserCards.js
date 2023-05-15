import React from "react";
import "./styles/userFeed.css";
import img from "./testIMG/apple-music-note.jpg";

// const UserCards = ({ cards }) => {
//   return cards.map((card) => (
//     <div key={card._id}>
//       <p>{card.text}</p>
//       <p>{card.instrument}</p>
//     </div>
//   ));
// };

const UserCards = () => {
  return (
    <main className="users">
      <div className="user-feed-post">
        <div className="post-container">
          <div className="image-container">
            <img className="profilecard-img" src={img}></img>
          </div>
          <div className="user-info-container">
            <h2 className="username">USERNAME</h2>
            <p className="info">Genres: TEST</p>

            <p className="info">Instruments: TEST</p>
            <p className="info">Location: TEST</p>
            <div className="about">
              <h3>About Me</h3>
              <p>Experience: TEST</p>
              <p>About section text goes here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserCards;
