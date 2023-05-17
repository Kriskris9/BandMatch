import React from "react";
import { Navigate,useParams } from "react-router-dom";
import ProfileComponent from "../components/ProfileComponent";

import { GET_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Profile = () => {
  const {loading,data} = useQuery(GET_PROFILE)
  const profile = data?.profile || [];
  return (
    <div className="container">
      <div className="row">
          <div className="col-4">
          <ProfileComponent 
            profile={profile}
          />
          </div>
      </div>
    </div>
  
  );
};

export default Profile;
