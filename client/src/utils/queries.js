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
  }
}
`;


export const GET_POSTS = gql`
query Posts {
  posts {
    _id
    postText
    image
    createdAt
    profile {
      username
    }
  }
}
`;

export const SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
    id
    createdAt
    image
    postText
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
    profile {
      username
    }
      }
    }
  }
`;

export const GET_COMMENTS = gql`
query {
  posts {
    comments {
      _id
      commentAuthor
      commentText
      createdAt
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