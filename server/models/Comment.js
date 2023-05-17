const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
    default: ' ',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  commentAuthor: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
