import mongoose from 'mongoose';

const repostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: 'User',
  },
  targetId: {
    type: String,
    required: true,
  },
  targetType: {
    type: String,
    required: true,
    enum: ['news', 'event', 'job'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Repost || mongoose.model('Repost', repostSchema);