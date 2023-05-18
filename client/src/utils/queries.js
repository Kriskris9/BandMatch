import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile {
    profile {
      username
      _id
      email
      password
      bio
      profilePic
      posts {
        _id
        postText
        image
      }
    }
  }
`;

export const SINGLE_POST = gql`
query post($postId: ID!) {
  post(postId: $postId) {
  createdAt
  image
  postText
  comments {
    _id
    commentAuthor
    commentText
    createdAt
  profile {
    username
      }
    }
  }
}
`;


export const GET_POSTS = gql`
  query Posts {
    posts {
      _id
      postText
      createdAt
      image
      profile {
        username
        profilePic
      }
      comments {
        commentText
        profile {
          username
        }
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
      profileCard
      bio
      profilePic
      posts {
        _id
      }
    }
  }
`;
