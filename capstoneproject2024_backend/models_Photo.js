const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  // Other fields as needed
});

module.exports = mongoose.model('Photo', PhotoSchema);