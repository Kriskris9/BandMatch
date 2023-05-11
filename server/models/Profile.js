const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
      type: String,
      required: true,
    },
  lastName: {
      type: String,
      required: true,
    },
  experience: {
      type: String,
      required: true,
  },
  instruments: {
      type: String,
      required: true,
    },
  genres: {
      type: String,
      required: true,
    },
  bio: {
      type: String,
      required: true,
    },
  location: {
      type: String,
      required: true,
    },
  socialMedia: {
      type: String,
      required: true,
  } 
  
});

profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
