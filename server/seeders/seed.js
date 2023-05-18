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

    await profileCard.deleteMany({});

    await Comment.deleteMany({});

    const profileId = [];
    for (var i = 0; i < userSeeds.length; i++) {
      const { _id } = await Profile.create(userSeeds[i]);
      profileId.push(_id);
    }
    for (var i = 0; i < userCardSeeds.length; i++) {
      const { _id } = await profileCard.create({
        ...userCardSeeds[i],
        profile: profileId[Math.floor(Math.random() * profileId.length)],
        // username: (await Profile.findById(profileId)).username,
      });
    }


    const postIds = [];
    for (let i = 0; i < postSeeds.length; i++) {
      const { _id } = await Post.create({
        ...postSeeds[i]
      });
      postIds.push(_id);
    
      const profileIndex = i % profileId.length;
      const profileToAssign = profileId[profileIndex];
    
      const postProfile = await Post.findOneAndUpdate(
        { _id: _id },
        { $set: { profile: profileToAssign } }
      );

      const numComments = Math.floor(Math.random() * 3);
      for (let j = 0; j < numComments; j++) {
        const randomProfileIndex = Math.floor(Math.random() * profileId.length);
        const randomProfile = await Profile.findById(profileId[randomProfileIndex]);
    
        const { _id: commentId } = await Comment.create({
          commentText: commentSeeds[j % commentSeeds.length].commentText,
          profile: randomProfile._id,
          post: _id
        });
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
