// models/Content.js
import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  contentId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: String,
  author: { type: String, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: String, ref: 'User' }],
});

export default mongoose.models.Content || mongoose.model('Content', ContentSchema);