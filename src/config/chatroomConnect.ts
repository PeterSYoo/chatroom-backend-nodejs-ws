import mongoose from 'mongoose';
require('dotenv').config();

const DB_URL: string = process.env.MONGODB_URL as string;

const chatroomConnect = async (): Promise<boolean> => {
  try {
    const { connection } = await mongoose.connect(DB_URL);

    if (connection.readyState === 1) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default chatroomConnect;
