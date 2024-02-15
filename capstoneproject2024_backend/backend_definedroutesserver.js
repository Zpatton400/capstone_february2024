// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Express module and create an Express application
const express = require('express');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
const cors = require('cors');
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers
app.use(express.json());

// Connect to MongoDB using the connection string from the environment variables
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Import the routes from the routes_photos.js file
const photoRoutes = require('./routes_photos');

// Use the imported routes with the app
app.use('/api/photos', photoRoutes);

// Define the port number for the server to listen on
// Default to   5000 if the PORT environment variable is not set
const PORT = process.env.PORT ||   5000;

// Start the server and listen on the specified port
// Log a message to the console once the server is running
app.listen(PORT, () => console.log(`Server running on port `));