import React from "react";
import "./styles/userFeed.css";

// const UserCards = ({ cards }) => {
//   return cards.map((card) => (
//     <div key={card._id}>
//       <p>{card.text}</p>
//       <p>{card.instrument}</p>
//     </div>
//   ));
// };

// createdAt
// experience
// instrument
// genres
// image
// text

const UserCards = () => {
  return (
    <main className="users">
      <div className="feed-post">
        <div className="post-container">
          <div className="image-container">
            <img className="profilecard-img"></img>
          </div>
          <div className="info-container">
            <span className="username">USERNAME</span>
            <span className="info">Genres: TEST</span>
            <span className="info">Instruments: TEST</span>
            <span className="info">Location: TEST</span>
            <div className="about">
              <span>About Me</span>
              <p>About section text goes here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserCards;
