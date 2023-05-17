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
query Post {
    posts {
      _id
      createdAt
      postText
      image
      profile {
        username
      }
      comments {
        _id
        createdAt
        commentText
        commentAuthor
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