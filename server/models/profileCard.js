const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const profileCardSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  location: {
    type: String,
  },
  experience: {
    type: String,
  },
  // username: {
  //   type: String,
  // },
  instrument: {
    type: String,
  },
  genres: {
    type: String,
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
