import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { GET_PROFILE_CARDS } from "../utils/mutations";
import Auth from "../utils/auth";

const Users = () => {
  const { loading, data } = useQuery(GET_PROFILE_CARDS);

  const usernames = data?.map((profile) => profile.username) || [];

  return (
    <div>
      {usernames.map((username) => (
        <div key={username}>{username}</div>
      ))}
    </div>
  );
};

export default Users;