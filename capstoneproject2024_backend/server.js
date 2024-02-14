//Set up the Server:  Created a file and set up a basic Express server:
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes here

const PORT = process.env.PORT ||  5000;
app.listen(PORT, () => console.log(`Server running on port `));