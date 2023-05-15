import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($bio: String, $profilePic: String) {
    updateProfile(bio: $bio, profilePic: $profilePic) {
      _id
      bio
      profilePic
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PROFILE_CARD = gql`
  mutation addProfileCard(
    $experience: String
    $instrument: String
    $genres: String
    $image: String
    $text: String
  ) {
    addProfileCard(
      experience: $experience
      instrument: $instrument
      genres: $genres
      image: $image
      text: $text
    ) {
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

// Add a new post
export const ADD_POST = gql`
  mutation addPost($postText: String!, $image: String!) {
    addPost(postText: $postText, image: $image) {
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

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      commentText
      username {
        _id
        username
      }
    }
  }
`;

export const REMOVE_PROFILE_CARD = gql`
  mutation removeProfileCard($profileCardId: ID!) {
    removeProfileCard(profileCardId: $profileCardId) {
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

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
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

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      commentText
      username {
        _id
        username
      }
    }
  }
`;
