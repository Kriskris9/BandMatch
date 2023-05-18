import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile {
    profile {
      username
      _id
      email
      password
      posts
      profileCard
      bio
    }
  }
`;

export const GET_POST = gql`
  query Post {
    post {
      _id
      createdAt
      postText
      image
      comments
      profile
    }
  }
`;

export const GET_POSTS = gql`
  query Posts {
    posts {
      _id
      postText
      createdAt
      profile {
        username
      }
      comments {
        _id
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query Query {
    comments {
      _id
      commentText
      createdAt
    }
  }
`;

export const QUERY_GET_PROFILE_CARDS = gql`
  query ProfileCards {
    profileCards {
      createdAt
      experience
      genres
      image
      text
      instrument
      location
      profile {
        username
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
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
