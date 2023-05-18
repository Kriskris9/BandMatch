import React, { useEffect } from "react";
import "./styles/homeFeed.css";
import img from "./testIMG/apple-music-note.jpg";
import CreatePost from "./createPost";
import CommentForm from "./CommentForm";


import { GET_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";


function FeedComponent() {
  const { loading, data } = useQuery(GET_POSTS);
  const posts = data?.posts || [];
  useEffect(() => {
    console.log(posts)
  });

  if (loading) {
    return <div>Loading...</div>;
  };

  return (
<main className="feed">
      <CreatePost />
      {posts && posts.map((post) => {
        return (<div className="feed-post" >
          <div className="feed-post-container">
            <div className="profile-pic-container">
              <img className="profile-pic-img" src={img}></img>
              <div className="username">Username: {post?.profile?.username ? post.profile.username : ""}</div>
            </div>
            <div className="image-post-container">
              <img className="post-img" src={post?.image || post.image}></img>
              <div className="info-container">
                <span className="caption">Post: {post.postText}</span>
              </div>
            </div>
          </div>
        </div>)
      })}
     
      <CommentForm />
    </main>
  );
}

export default FeedComponent;
