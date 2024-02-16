const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');
const photoRoutes = require('./routes/photos');

app.use('/api/photos', photoRoutes);

// Define routes for CRUD operations here

module.exports = router;
