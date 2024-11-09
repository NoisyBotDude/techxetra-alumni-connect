// models/User.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        index : true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    description: {
        type: String,
        required: false,
        default: '',
    },
    profileImage: {
        type: String,
        default: '',
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    skills: {
        type: [String],
        default: [],
    },
    interests: {
        type: [String],
        default: [],
    },
    professionalJourney: {
        currentRole: String,
        company: String,
        experienceYears: Number,
        industry: String,
    },
    socialLinks: {
        linkedIn: String,
        twitter: String,
        github: String,
        website: String,
    },
    isMentor: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['ALUMNI', 'STUDENT', 'ADMIN'],
        default: 'ALUMNI',
    },
    eventsRSVP: [{
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
        status: { type: String, enum: ['INTERESTED', 'GOING'], default: 'INTERESTED' },
    }],
    jobPostings: [{
        jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    }],
    donations: [{
        amount: Number,
        date: { type: Date, default: Date.now },
        purpose: String,
    }],
    contentContributions: [{
        contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
    }],
    profileStats: {
        profileViewers: {
            type: Number,
            default: 0,
        },
        postImpressions: {
            type: Number,
            default: 0,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);