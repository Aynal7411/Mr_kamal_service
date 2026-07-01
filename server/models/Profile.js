import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  mission: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  whatsapp: { type: String },
  facebook: { type: String },
  resumeUrl: { type: String }
}, { timestamps: true });

export default mongoose.model('Profile', profileSchema);
