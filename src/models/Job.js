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
  description: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "Remote",
  },
  salary: {
    type: String,
    default: "N/A",
  },
  jobType: {
    type: String,
    enum: ["Temporary", "Internship", "Contract", "Full-time", "Part-time"],
    default: "Full-time",
  },
  employmentType: {
    type: String,
    enum: ["Remote", "On-site", "Hybrid"],
    default: "Remote",
  },
  postedBy: {
    type: String,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);