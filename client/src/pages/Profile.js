import React, { useEffect } from "react";
// import { Navigate, useParams } from "react-router-dom";
import ProfileComponent from "../components/ProfileComponent";

import { GET_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";

// import SinglePost from "../components/SinglePost";

const Profile = () => {
  const { loading, data } = useQuery(GET_PROFILE);
  const profile = data?.profile || [];
  useEffect(() => {
    console.log(profile);
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ProfileComponent
            profile={profile.username}
            bio={profile.bio}
            posts={profile.posts}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
