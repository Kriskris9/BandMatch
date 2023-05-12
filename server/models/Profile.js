const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  bio: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  videos: {
    type: [String],
  },
});

profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model("Profile", profileSchema);

module.exports = Profile;
