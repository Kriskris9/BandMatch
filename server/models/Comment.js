const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
  messageText: {
    type: String,
    required: true,
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

const Comment = Types("Comment", commentSchema);

module.exports = Comment;
