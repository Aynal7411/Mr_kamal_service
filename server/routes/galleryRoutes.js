import express from 'express';
import Gallery from '../models/Gallery.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const item = await Gallery.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gallery item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
