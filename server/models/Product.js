import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  details: { type: String },
  catalogueUrl: { type: String }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
