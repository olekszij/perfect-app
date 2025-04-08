import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://olekszijk:yMsSJomaQoxqt7WU@clusterperfect.jlp339m.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB; 