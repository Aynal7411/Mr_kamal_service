import express from 'express';
import Profile from '../models/Profile.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
