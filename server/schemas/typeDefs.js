const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bio: String!
    post: Post
    location: String!
    videos: [String]
  }

  type Post {
    _id: ID
    skills: String
    experience: String!
    instrument: String!
    genres: String!
    image: String!
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
    posts: [Post]
    post(username: String!): Post
    profile(username: String!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateProfile(
      bio: String
      post: ID
      location: String
      videos: [String]
    ): Profile
    addPost(
      skills: String
      experience: String!
      instrument: String!
      genres: String!
      image: String!
    ): Post
    addComment(postId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;
