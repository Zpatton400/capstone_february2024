const mongoose = require('mongoose');

// Define the VRA Core  4.0 schema
const VraCoreSchema = new mongoose.Schema({
  // VRA Core  4.0 metadata fields go here
  // Example:
  title: String,
  description: String,
  dateCreated: Date,
  // ... other VRA Core  4.0 fields
});

// Define the Library of Congress Authorities schema
const LocAuthoritiesSchema = new mongoose.Schema({
  // Fields for Library of Congress Authorities integration
  // Example:
  lcControlNumber: String,
  lcClassification: String,
  // ... other LOC authority fields
});

// Combine the VRA Core and LOC Authorities schemas into the Photo schema
const PhotoSchema = new mongoose.Schema({
  vraCore: VraCoreSchema,
  locAuthorities: LocAuthoritiesSchema,
  // ... other photo-specific fields
});

module.exports = mongoose.model('Photo', PhotoSchema);