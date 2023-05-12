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

  input ImageUploadInput {
    file: Upload!
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
    createdAt: String!
    experience: String
    instrument: String
    genres: String
    image: String
    text: String
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
    profileCards: [profileCard!]
    post(username: String!): Post
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth

    imageUpload(input: ImageUploadInput!): Profile!

    updateProfile(bio: String, image: String): Profile

    login(email: String!, password: String!): Auth

    addProfileCard(
      experience: String
      instrument: String
      genres: String
      image: String
      text: String
    ): profileCard

    

    addPost(postText: String!, image: String!): Post

    addComment(postId: ID!, commentText: String!): Comment

    removeProfileCard(profileCardId: ID!): profileCard

    removePost(postId: ID!): Post

    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;
