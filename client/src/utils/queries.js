import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
    query allProfiles {
        profiles {
            _id
            username
            email
            password
            firstName
            lastName
            experience
            instruments
            genres
            bio
            location
            socialMedia
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($username: String!) {
        profile(username: $username) {
            _id
            username
            email
            password
            firstName
            lastName
            experience
            instruments
            genres
            bio
            location
            socialMedia
        }
    }
`;

export const QUERY_BAND_MEMBERS = gql`
    query allBandMembers {
        bandMembers {
            _id
            lookingForBand
            skills
            userId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
            createdAt
            updatedAt
        }
    }
`;

export const QUERY_SINGLE_BAND_MEMBER = gql`
    query singleBandMember($bandMemberId: ID!) {
        bandMember(bandMemberId: $bandMemberId) {
            _id
            lookingForBand
            skills
            userId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
            createdAt
            updatedAt
        }
    }
`;

export const QUERY_MESSAGES = gql`
    query allMessages {
        messages {
            _id
            messageText
            createdAt
            senderId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
            receiverId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
        }
    }
`;

export const QUERY_SINGLE_MESSAGE = gql`
    query singleMessage($messageId: ID!) {
        message(messageId: $messageId) {
            _id
            messageText
            createdAt
            senderId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
            receiverId {
                _id
                username
                email
                password
                firstName
                lastName
                experience
                instruments
                genres
                bio
                location
                socialMedia
            }
        }
    }
`;
