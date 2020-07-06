import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AddFriend from "./AddFriend";

const GET_FRIEND = gql`
  query getOneFriend($id: ID!) {
    getOneFriend(id: $id) {
      id
      firstName
      lastName
      language
      gender
      age
      email
    }
  }
`;

export default function FindFriend() {
  const [id, setId] = useState("");
  const [getFriend, { loading, error, data }] = useLazyQuery(GET_FRIEND);

  const fetchFriend = () => {
    // if (id === "" || id.length !== 24) {
    //   return;
    // }
    getFriend({variables:{id}})
  };

  return (
    <div>
      ID:
      <input
        type="txt"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      &nbsp; <button onClick={fetchFriend}>Find Friend</button>
      <br />
      <br />
      <h2>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error while fetching friend...</h2>}
        {data && <AddFriend initialFriend={data.getOneFriend} />}
      </h2>
    </div>
  );
}
