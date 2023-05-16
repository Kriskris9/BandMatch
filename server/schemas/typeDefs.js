const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [String]
    profileCard: String
    bio: String
    image: String
  }

  type Post {
    _id: ID
    createdAt: String!
    postText: String!
    image: String!
    comments: [String!]
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
    commentText: String!
    username: Profile!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profile(username: String!): Profile
    posts: [Post]
    profileCards: [profileCard]
    post(username: String!): Post
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