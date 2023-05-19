import React from "react";
import { GET_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import FeedComponents from "../components/FeedComponents";

function Feed() {
  const { loading, data } = useQuery(GET_POSTS);

  const posts = data?.data?.Post || []; 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="feed-container">
      <FeedComponents posts={posts} /> 
    </div>
  );
}


export default Feed;
