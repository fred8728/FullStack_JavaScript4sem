import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { NoUnusedFragmentsRule } from "graphql";

const ALL_FRIENDS = gql`
  {
    allFriends {
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
const ADD_FRIEND = gql`
  mutation createFriend($input: FriendInput!) {
    createFriend(input: $input) {
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

const AddFriend = ({ initialFriend, allowEdit }) => {
  const EMPTY_FRIEND = {
    firstName: "",
    lastName: "",
    language: "",
    gender: "OTHER",
    age: "",
    email: "",
  };
  let newFriend = initialFriend ? initialFriend : { ...EMPTY_FRIEND };

  const [friend, setFriend] = useState({ ...newFriend });
  const [readOnly, setReadOnly] = useState(!allowEdit);

  const [createFriend, { data }] = useMutation(ADD_FRIEND, {
    update(cache, { data }) {
      const newFriend = data.createFriend;
      const p = cache.readQuery({ query: ALL_FRIENDS });
      const { allFriends } = p;
      allFriends.push(newFriend);
      cache.writeQuery({
        query: ALL_FRIENDS,
        data: { allFriends: [...allFriends] },
      });
    },
  });

  const handleChange = (event) => {
    const id = event.target.id;
    friend[id] = event.target.value;
    setFriend({ ...friend });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createFriend({
      variables: {
        input: {
          id: friend.id,
          firstName: friend.firstName,
          lastName: friend.lastName,
          language: friend.language,
          gender: friend.gender,
          age: Number(friend.age),
          email: friend.email,
        },
      },
    });

    setFriend({ ...EMPTY_FRIEND });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName
        <br />
        <input
          type="text"
          readOnly={readOnly}
          id="firstName"
          value={friend.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        LastName <br />
        <input
          readOnly={readOnly}
          type="text"
          id="lastName"
          value={friend.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Language
        <br />
        <input
          type="text"
          readOnly={readOnly}
          id="language"
          value={friend.language}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender &nbsp;
        <select
          disabled={readOnly}
          id="gender"
          value={friend.gender}
          onChange={handleChange}
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
      </label>
      <br />
      <label>
        Age <br />
        <input
          readOnly={readOnly}
          type="number"
          id="age"
          value={friend.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email
        <br />
        <input
          type="text"
          readOnly={readOnly}
          id="email"
          value={friend.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      {!readOnly && <input type="submit" value="Submit" />}
    </form>
  );
};

export default AddFriend;
