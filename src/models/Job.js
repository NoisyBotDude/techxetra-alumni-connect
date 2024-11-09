// models/Job.js
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  jobId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  company: String,
  location: String,
  postedBy: {
    type: String,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);