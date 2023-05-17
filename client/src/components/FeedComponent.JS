import React, {useEffect} from 'react';
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
            <img className="profile-pic-img" src={posts.profilePic} alt="Profile"></img>
            <div className="username">{posts.username}</div>
          </div>
          <div className="image-post-container">
            <img className="post-img" src={posts.image} alt="Post"></img>
            <div className="info-container">
              <span className="caption">Caption goes here {posts.commentText}</span>
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
      <div className="comments-container">
        <div className="comment">
          <span className="comment-text">{Comment.commentText}</span>
          <span className="comment-date">{Comment.createdAt}</span>
        </div>
      </div>
    </main>
  );
}

export default FeedComponent;

