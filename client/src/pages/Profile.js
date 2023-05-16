import React from "react";
import { Navigate,useParams } from "react-router-dom";
import ProfileComponent from "../components/ProfileComponent";

import { GET_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";
const Profile = () => {
  const {loading, data} = useQuery(GET_PROFILE)
  const user = data?.user || {};
  return (
    <>
      <ProfileComponent
        username ={user.username}
        bio = {user.bio}

      />
    </>
  );
};

export default Profile;
