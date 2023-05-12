const { AuthenticationError } = require("apollo-server-express");
const { Profile, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        profile: async (parent, { username }) => {
            Profile.findOne({ username }).populate("post");
        },
        post: async (parent, { username }) => {
            return Post.findOne({ username }).populate("comments");
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("post");
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },

    Mutation: {
        addProfile: async (parent, { username, email, password, location, bio }) => {
            const user = await Profile.create({ username, email, password, location, bio });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await Profile.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
        addPost: async (
            parent,
            { skills, experience, instrument, genres, image },
            context
        ) => {
            if (context.user) {
                const newPost = await Post.create({
                    skills,
                    experience,
                    instrument,
                    genres,
                    image,
                    username: context.user.username,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { post: newPost._id } }
                );

                return newPost;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: context.user.username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                const delPost = await Post.findOneAndDelete({
                    _id: postId,
                    username: context.user.username,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { post: delPost._id } }
                );

                return delPost;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removeComment: async (parent, { postId, commentId }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $pull: {
                            comments: {
                                _id: commentId,
                                username: context.user.username,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers;
