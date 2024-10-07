const mongoose = require('mongoose');
const env = require('dotenv')
env.config();

// Use environment variables for MongoDB connection string
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Unable to connect to MongoDB:', err);
  }
};

module.exports = connectDB;
