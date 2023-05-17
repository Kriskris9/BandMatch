import React, {useEffect} from "react";
import "./styles/homeFeed.css";
import img from "./testIMG/apple-music-note.jpg";

import { GET_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";



function FeedComponent () {

  const { loading, data } = useQuery(GET_POSTS);
  
  const posts = data?.Post || [];
  useEffect(()=> {
  console.log(posts)
  })
  if (loading) {
    return <div>Loading...</div>;
  }

return (
    <main className="feed">
      <div className="feed-post">
        <div className="feed-post-container">
          <div className="profile-pic-container">
            <img className="profile-pic-img" src={img}></img>
            <div className="username">Username:{posts.commentAuthor}</div>
          </div>
          <div className="image-post-container">
            <img className="post-img" src={img}></img>
            <div className="info-container">
              <span className="caption">[SAMPLE POST TEXT] {posts.postText}</span>
            </div>
          </div>
        </div>
        <form className="comment-form">
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
          />
          <button type="submit" className="comment-submit">
            Post
          </button>
        </form>
      </div>
    </main>
)}

export default FeedComponent;
