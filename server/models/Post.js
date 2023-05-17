const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  displayName: {
    type: String,
    default: ''
  },
  postText: {
    type: String,
  },
  image: {
    type: String,
  },
  comments: [
    {
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    },
  ],
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
