import React, { useEffect } from "react";
import "./styles/homeFeed.css";
import img from "./testIMG/apple-music-note.jpg";
import CommentFeed from "./Comments";
import CommentForm from "./CommentForm"
import { useParams } from 'react-router-dom';
import { SINGLE_POST } from "../utils/queries";
import { useQuery } from "@apollo/client";



function SinglePost() {
    const { postId } = useParams();
    const { loading, data } = useQuery(SINGLE_POST, {
        variables: { postId: postId },
    });

    const post = data?.post || [];
      useEffect(() => {
    console.log(post);
      })
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main className="feed">
            <div className="feed-post" >
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
            </div>
            <CommentFeed comments={post.comments} />
            <CommentForm postId={post.postId} />
        </main>
    )
}

export default SinglePost;