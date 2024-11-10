// models/Connection.js
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ConnectionSchema = new mongoose.Schema({
    connectionId: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    senderId: {
        type: String,
        ref: 'User',
        required: true,
    },
    receiverId: {
        type: String,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
        default: 'PENDING',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Connection || mongoose.model('Connection', ConnectionSchema);