import mongoose from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:1333Akh@chaarikaapi.6epxgaj.mongodb.net/Node-API?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
