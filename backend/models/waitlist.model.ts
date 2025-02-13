import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  interests: {
    type: [String],
    default: [],
  },
  additionalInfo: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Waitlist = mongoose.model('Waitlist', waitlistSchema);
