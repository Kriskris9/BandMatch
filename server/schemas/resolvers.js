const { AuthenticationError } = require("apollo-server-express");
const { Profile, Post, profileCard, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // profiles: async () => {
    //     return Profile.find().populate('posts');
    // },
    profile: async (parent,args,context) => {
      return Profile.findOne({ username:context.profile.username }).populate("posts").populate("profileCard");
      
    },
    // post: async (parent, { username }) => {
    //   return Post.findOne({ username }).populate("comments");
    // },
    posts: 
    async (parent, { username }) => {
      const params = username ? { username } : {}
      return Post.find(params).sort({ createdAt: -1 })
    },
    profileCards: async (parent, { username }) => {
      const params = username ? { username } : {};
      const profileCards = await profileCard.find(params).sort({ createdAt: -1 }).populate("profile")
    
      return profileCards;

    },
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id })
          .populate("post")
          .populate("profileCard");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    protectedQuery: (parent, args, context) => {
      // Access the authenticated user object
      const { user } = context;
      // Check if the user is authenticated
      if (!user) {
        throw new Error("Not authenticated");
      }
      // Perform some operation with the user
      console.log(user);
      // Return the result
      return "Protected query result";
    },
  },
  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({
        username,
        email,
        password,
      });
      const token = signToken(profile);
      return { token, profile };
    },
    updateProfile: async (parent, { bio, profilePic }, context) => {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: context.profile._id },
        { bio, profilePic },
        { new: true }
      );
      return updatedUser;
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No user found with this email");
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      console.log("logged-in");
      const token = signToken(profile);
      return { token, profile };
    },
    addPost: async (parent, { postText, image }, context) => {
      console.log(context.profile);
      if (context.profile) {
        const newPost = await Post.create({
          postText,
          image,
          username: context.profile.username,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { post: newPost._id } }
        );

        return newPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addProfileCard: async (parent, { postText, image }, context) => {
      if (context.profile) {
        const card = await profileCard.create({
          experience,
          instrument,
          genres,
          location,
          image,
          text,
          username: context.profile.username,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { post: card._id } }
        );

        return card;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.profile) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: {
                commentText,
                commentAuthor: context.profile.username,
              },
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
      if (context.profile) {
        const delPost = await Post.findOneAndDelete({
          _id: postId,
          username: context.profile.username,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $pull: { post: delPost._id } }
        );

        return delPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.profile) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                username: context.profile.username,
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