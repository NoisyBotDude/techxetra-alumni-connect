// models/Event.js
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: Date,
  location: String,
  attendees: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['INTERESTED', 'GOING'], default: 'INTERESTED' },
  }],
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);