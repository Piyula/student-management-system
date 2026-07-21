const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected!');
    return mongoose.connection;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    throw error;
  }
};

module.exports = { connectMongoDB };