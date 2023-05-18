import React, { useEffect } from "react";
import "./styles/homeFeed.css";
import img from "./testIMG/apple-music-note.jpg";
import CreatePost from "./createPost";
import Comment from "./Comment";

import { GET_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function FeedComponent() {
  const { loading, data } = useQuery(GET_POSTS);

  const posts = data?.posts || [];
  useEffect(() => {
    console.log(posts);
    
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="feed">
      <CreatePost />
      {posts &&
        posts.map((post) => {
          return (
            <div className="feed-post">
              <div className="feed-post-container">
                <div className="profile-pic-container">
                  <img className="profile-pic-img" src={post.profile.profilePic }/>
                  <div className="username">
                    {post?.profile?.username ? post.profile.username : ""}
                  </div>
                </div>
                <div className="image-post-container">
                <img className="post-img" src={ post?.image || post.image }/>
                  <div className="info-container">
                    <span className="caption">{post.postText}</span>
                  </div>
                </div>
              </div>
              <Comment comments={post.comments} id={post._id} />
            </div>
          );
        })}
    </main>
  );
}

export default FeedComponent;