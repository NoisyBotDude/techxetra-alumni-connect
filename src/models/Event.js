// models/Event.js
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const EventSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  eventId: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: uuidv4
  },
  title: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ['meetup', 'workshop', 'conference'],
    default: 'meetup',
  },
  format: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline',
  },
  description: String,
  language: {
    type: String,
    enum: ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ko'],
    default: 'en',
  },
  date: Date,
  location: String,
  timezone: String,
  attendees: [{
    userId: { type: String, ref: 'User' },
    status: { type: String, enum: ['interested', 'not-interested', 'going'], default: 'interested' },
  }],
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);