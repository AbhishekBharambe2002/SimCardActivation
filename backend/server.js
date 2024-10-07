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
//Deployment//

const __dirname1 = path.resolve();


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


//Deployment//
