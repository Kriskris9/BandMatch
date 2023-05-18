const db = require("../config/connection");
const { Profile } = require("../models");
const userSeeds = require("./userSeeds.json");
const { profileCard } = require("../models");
const userCardSeeds = require("./userCardSeeds.json");
const { Comment } = require("../models");
const commentSeeds = require("./commentSeeds.json");
const { Post } = require("../models");
const postSeeds = require("./postSeeds.json");

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
      const { _id } = await Post.create(postSeeds[i]);
      postIds.push(_id);

      //THIS WILL MAKE THE POST ASSIGN TO THE CORRESPONDING PROFILE BASED ON INDEX LENGTH- NOT PICKING A RANDOMIZED ID
      const profileIndex = i % profileId.length;
      const profileToAssign = profileId[profileIndex];

      // FOR REFERENCE THIS IS THE OLD FOR LOOP w/ MATH.RANDOM
      // const postIdToUpdate =
      // postIds[Math.floor(Math.random() * postIds.length)];

      const postProfile = await Post.findOneAndUpdate(
        { _id: _id },
        {
          $set: { profile: profileToAssign }
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
