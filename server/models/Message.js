const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema({
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
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        },
        });

const Message = model('Message', messageSchema);

module.exports = Message;
