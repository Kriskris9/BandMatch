import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      createdAt
      postText
      image
      comments
    }
  }
`;

export const QUERY_PROFIILECARDS = gql`
  query profileCards {
    profileCards {
      _id
      createdAt
      experience
      instrument
      genres
      image
      text
    }
  }
`;

export const QUERY_USERPROFILE = gql`
  query profile {
    profile {
      _id
      username
      email
      password
      posts
      profileCard
      bio
      profilePic
    }
  }
`;
