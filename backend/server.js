const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./config/database');
const simCardRoutes = require('./routes/routes');
const env = require('dotenv');

env.config(); // Ensure dotenv is configured at the top

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to database
connectDB();

// Use routes
app.use('/api', simCardRoutes);

// Main page route
app.get('/', (req, res) => {
  res.send('Welcome to the SIM card activation system!');
});

// Start server
const PORT =5000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
