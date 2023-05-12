const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const profileCardSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  experience: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});

const profileCard = model("profileCard", profileCardSchema);

module.exports = profileCard;
