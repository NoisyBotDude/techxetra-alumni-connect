import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
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

export default mongoose.models.Like || mongoose.model('Like', likeSchema);