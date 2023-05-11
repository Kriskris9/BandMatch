const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    experience: String
    instruments: String
    genres: String
    bio: String
    location: String
    socialMedia: String
  }
  

  type BandMember {
    _id: ID
    lookingForBand: Boolean
    skills: String
    userId: [Profile]
    createdAt: Date
    updatedAt: Date
  }

    type Message {
    _id: ID
    messageText: String
    createdAt: Date
    senderId: Profile
    receiverId: Profile
    }


  type Auth {
    token: ID!
    profile: Profile
  }

type Query {
    profiles: [Profile]
    profile(username: String!): Profile
    bandMembers: [BandMember]
    bandMember(_id: ID!): BandMember
    messages: [Message]
    message(_id: ID!): Message
    }

type Mutation {
    addProfile(
        username: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        experience: String!
        instruments: String!
        genres: String!
        bio: String!
        location: String!
        socialMedia: String!
    ): Auth
    addBandMember(
        lookingForBand: Boolean!
        skills: String!
    ): BandMember
    addMessage(
        messageText: String!
        senderId: ID!
        receiverId: ID!
    ): Message
    removeProfile(profileId: ID!): Profile
    removeBandMember(bandMemberId: ID!): BandMember
    removeMessage(messageId: ID!): Message
    updateProfile(
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
        experience: String
        instruments: String
        genres: String
        bio: String
        location: String
        socialMedia: String
    ): Profile
    updateBandMember(
        lookingForBand: Boolean
        skills: String
    ): BandMember
    updateMessage(
        messageText: String
        senderId: ID
        receiverId: ID
    ): Message
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
