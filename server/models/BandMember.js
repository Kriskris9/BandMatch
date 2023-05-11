const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bandMemberSchema = new Schema({
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
    lookingForBand: {
        type: Boolean,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    userId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Profile',
        },
      ],
    
});

const BandMember = model('BandMember', bandMemberSchema);

module.exports = BandMember;
