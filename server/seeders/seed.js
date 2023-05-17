const db = require('../config/connection');
const { Profile } = require('../models');
const userSeeds = require('./userSeeds.json');
const { profileCard } = require('../models');
const userCardSeeds = require('./userCardSeeds.json');
const { Comment } = require('../models')
const commentSeeds = require('./commentSeeds.json')
const { Post } = require('../models')
const postSeeds = require('./postSeeds.json')





db.once('open', async () => {
  try {
    await Profile.deleteMany({});

    await Post.deleteMany({});

    await profileCard.deleteMany({});

    await Comment.deleteMany({});

    const profileId = [];
    for(var i=0; i < userSeeds.length; i++ ){
      const {_id} = await Profile.create(userSeeds[i]);
      profileId.push(_id);
    }
    for(var i=0; i < userCardSeeds.length; i++ ){
      const {_id} = await profileCard.create({...userCardSeeds[i], profile: profileId[Math.floor(Math.random()*profileId.length)]});
    }
    await Post.create(postSeeds);

    await Comment.create(commentSeeds);

    

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
