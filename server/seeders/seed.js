const db = require("../config/connection");
const { Profile, Post, Comment, profileCard } = require("../models");
const userSeeds = require("./userSeeds.json");
const userCardSeeds = require("./userCardSeeds.json");
const postSeeds = require("./postSeeds.json");
const commentSeeds = require("./commentSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    const profileId = [];
    for (let i = 0; i < userSeeds.length; i++) {
      const { _id } = await Profile.create(userSeeds[i]);
      profileId.push(_id);
    }

    for (let i = 0; i < userCardSeeds.length; i++) {
      const { _id } = await profileCard.create({
        ...userCardSeeds[i],
        profile: profileId[Math.floor(Math.random() * profileId.length)],
      });
    }

    const postIds = [];
    for (let i = 0; i < postSeeds.length; i++) {
      const { _id } = await Post.create({
        ...postSeeds[i],
        profile: profileId[Math.floor(Math.random() * profileId.length)],
      });
      postIds.push(_id);

      const numComments = Math.floor(Math.random() * 5);
      for (let j = 0; j < numComments; j++) {
        const randomProfileIndex = Math.floor(Math.random() * profileId.length);
        const randomProfile = await Profile.findById(
          profileId[randomProfileIndex]
        );

        const { _id: commentId } = await Comment.create({
          commentText: commentSeeds[j % commentSeeds.length].commentText,
          profile: randomProfile._id,
          post: _id,
        });

        // Update the comments array in the corresponding post
        await Post.findByIdAndUpdate(
          _id,
          { $push: { comments: commentId } },
          { new: true }
        );
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
