import React from "react";
import { useQuery } from "@apollo/client";
import UserCards from "../components/UserCards";
import { QUERY_GET_PROFILE_CARDS } from "../utils/queries";

// const Users = () => {
//   const { loading, data } = useQuery(QUERY_GET_PROFILE_CARDS);
//   const cards = data?.profileCards || [];

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <UserCards cards={cards} />
//     </div>
//   );
// };

const Users = () => {
  return (
    <div>
      <UserCards />
    </div>
  );
};

export default Users;
