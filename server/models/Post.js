const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
updatedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    skills: {
        type: String,
        required: true,
    },
    userId: 
        {
          type: Schema.Types.ObjectId,
          ref: 'Profile',
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
    
});

const Post = model('Post', postSchema);

module.exports = Post;
