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
    professionalJourney: [{
        role: String,
        companyName: String,
        duration: String,
        description: String,
        location: String,
        initials: String,
    }],
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
        eventId: { type: String, ref: 'Event' },
        status: { type: String, enum: ['INTERESTED', 'GOING'], default: 'INTERESTED' },
    }],
    jobPostings: [{
        jobId: { type: String, ref: 'Job' },
    }],
    donations: [{
        amount: Number,
        date: { type: Date, default: Date.now },
        purpose: String,
    }],
    contentContributions: [{
        contentId: { type: String, ref: 'Content' },
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
    followers: { type: Number, default: 0 },
    posts: { type: Number, default: 0 },
    connections: [{
        userId: { type: String, ref: 'User' },
        status: { type: String, enum: ['PENDING', 'CONNECTED', 'REJECTED'], default: 'PENDING' },
        createdAt: { type: Date, default: Date.now },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    age: {
        type: String,
        default: '',
    },
    experience: {
        type: String,
        default: '',
    },
    ctc: {
        type: String,
        default: '',
    },
    location: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);