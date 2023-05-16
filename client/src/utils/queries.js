import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile($username: String!) {
    profile(username: $username) {
      _id
      profile
      email
      password
      posts
      profileCard
      bio
      profilePic
      location
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      _id
      createdAt
      postText
      image
      comments {
        _id
        commentText
        username {
          _id
          username
        }
      }
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

export const GET_POST = gql`
  query post($username: String!) {
    post(username: $username) {
      _id
      createdAt
      postText
      image
      comments
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