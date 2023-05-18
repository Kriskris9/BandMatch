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
    $location: String
  ) {
    addProfileCard(
      experience: $experience
      instrument: $instrument
      genres: $genres
      image: $image
      text: $text
      location: $location
    ) {
      experience
      instrument
      genres
      image
      text
      location
      profile {
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $image: String!) {
    addPost(postText: $postText, image: $image) {
      postText
      image
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      commentText
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
      location
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
        commentAuthor {
          profile
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
    }
  }
`;
