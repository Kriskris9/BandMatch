import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
query profile {
  profile{
    username
    _id
    email
    password
    posts
    profileCard
    bio
    profilePic
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
      comments {
        _id
        createdAt
        commentText
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
  query Post {
    post {
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