import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema({
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
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Share || mongoose.model('Share', shareSchema);