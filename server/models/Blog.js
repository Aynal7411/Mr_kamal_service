import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: 'General' },
  tags: [{ type: String }],
  image: { type: String }
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
