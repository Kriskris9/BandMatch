import React from "react";
import FeedComponent from "../components/FeedComponent";
import { GET_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Feed() {
  const { loading, data } = useQuery(GET_POSTS);

  const posts = data?.data?.Post || []; 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="feed-container">
      <FeedComponent posts={posts} /> {/* Pass the 'posts' prop */}
    </div>
  );
}


export default Feed;
