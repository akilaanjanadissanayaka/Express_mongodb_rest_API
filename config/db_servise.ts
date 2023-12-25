import mongoose from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(
      // take this
    );
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
