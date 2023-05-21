import mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please Provide Unique username'],
    unique: [true, 'Username Exist'],
  },
  password: {
    type: String,
    required: [true, 'Please Provide  password'],
    unique: false,
  },
  email: {
    type: String,
    required: [true, 'Please Provide Unique email'],
    unique: false,
  },
  firstname: { type: String },
  lastname: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});
export default mongoose.model.Users || mongoose.model('User', UserSchema);
