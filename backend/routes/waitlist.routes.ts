import express from 'express';
import { Waitlist } from '../models/waitlist.model';

const router = express.Router();

router.post('/waitlist', async (req, res) => {
  try {
    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email: req.body.email });
    if (existingEntry) {
      return res.status(400).json({
        error: 'This email is already on the waitlist',
      });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      fullName: req.body.fullName,
      businessName: req.body.businessName,
      email: req.body.email,
      interests: req.body.interests || [], // Ensure interests is an array
      additionalInfo: req.body.additionalInfo,
    });

    const savedEntry = await waitlistEntry.save();

    return res.status(201).json({
      message: 'Successfully added to waitlist',
      data: savedEntry,
    });
  } catch (error: unknown) {
    console.error('Waitlist submission error:', error);
    const err = error as Error;
    return res.status(500).json({
      error: 'Failed to add to waitlist',
      details: err.message,
    });
  }
});

export default router;
