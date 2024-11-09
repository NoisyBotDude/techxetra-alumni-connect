import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
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
  commentText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);