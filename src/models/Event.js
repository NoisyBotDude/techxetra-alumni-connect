// models/Event.js
import mongoose from 'mongoose';

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
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: Date,
  location: String,
  attendees: [{
    userId: { type: String, ref: 'User' },
    status: { type: String, enum: ['INTERESTED', 'GOING'], default: 'INTERESTED' },
  }],
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);