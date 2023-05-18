import React from "react";
import { useQuery } from "@apollo/client";
import UserCards from "../components/UserCards";
import { QUERY_GET_PROFILE_CARDS } from "../utils/queries";

const Users = () => {
  const { loading, data } = useQuery(QUERY_GET_PROFILE_CARDS);
  const cards = data?.profileCards || [];
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <UserCards usercards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Users;