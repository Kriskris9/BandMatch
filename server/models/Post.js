const { Schema, model, SchemaType } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// test

const postSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  postText: {
    type: String,
  },
  image: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
