const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

// Create a new photo
router.post('/', async (req, res) => {
  const newPhoto = new Photo(req.body);
  try {
    const savedPhoto = await newPhoto.save();
    res.status(201).json(savedPhoto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all photos
router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single photo by ID
router.get('/:id', getPhoto, (req, res) => {
  res.json(res.photo);
});

// Update a photo by ID
router.patch('/:id', getPhoto, async (req, res) => {
  if (req.body.title != null) {
    res.photo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.photo.description = req.body.description;
  }
  if (req.body.url != null) {
    res.photo.url = req.body.url;
  }
  try {
    const updatedPhoto = await res.photo.save();
    res.json(updatedPhoto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a photo by ID
router.delete('/:id', getPhoto, async (req, res) => {
  try {
    await res.photo.remove();
    res.json({ message: 'Deleted photo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a photo by ID
async function getPhoto(req, res, next) {
  let photo;
  try {
    photo = await Photo.findById(req.params.id);
    if (photo == null) {
      return res.status(404).json({ message: 'Cannot find photo' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.photo = photo;
  next();
}

module.exports = router;