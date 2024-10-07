const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./config/database');
const path = require("path");
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
//Deployment//

/ Resolve path for different environments
const __dirname1 = path.resolve();   

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app's build folder
  app.use(express.static(path.join(__dirname1, "frontend", "build")));

  // Handle any requests that don't match an API route
  app.get("*", (req, res) => 
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  // Send a simple response in development mode
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

//Deployment//
