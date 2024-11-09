import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const newsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    newsId: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    type: {
        type: String,
        enum: ['announcement', 'event', 'achievement', 'news'],
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    content: String,
    imageUrl: String,
    tags: [String],  // Tags for better contextual suggestion matching
    size: {
        type: String,
        enum: ['large', 'small'],
        default: 'small',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.News || mongoose.model('News', newsSchema);