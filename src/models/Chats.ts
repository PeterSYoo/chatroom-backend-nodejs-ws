const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const momentTimezone = require('moment-timezone');

const chatSchema = new Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    chat: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      default: () => momentTimezone().tz('America/Los_Angeles').format(),
    },
  }
);

const Chats = mongoose.models.chat || mongoose.model('Chat', chatSchema);

export default Chats;
