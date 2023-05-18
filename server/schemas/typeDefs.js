const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
    profileCard: String
    bio: String
    profilePic: String
  }

  type Post {
    _id: ID!
    createdAt: String!
    postText: String!
    image: String
    comments: [Comment]
    profile: Profile
  }

  type profileCard {
    _id: ID
    profile: Profile
    createdAt: String!
    experience: String
    instrument: String
    genres: String
    image: String
    text: String
    location: String
  }

  type Comment {
    _id: ID!
    createdAt: String!
    commentText: String
    profile: Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profile: Profile
    post(postId: ID!): Post!
    posts: [Post]
    comment: Comment
    profileCards: [profileCard]
    me: Profile
    protectedQuery: String
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    updateProfile(bio: String, profilePic: String): Profile

    addProfileCard(
      experience: String
      instrument: String
      genres: String
      image: String
      text: String
      location: String
    ): profileCard

    addPost(postText: String!, image: String!): Post

    addComment(postId: ID!, commentText: String!): Comment

    removeProfileCard(profileCardId: ID!): profileCard

    removePost(postId: ID!): Post

    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;