const axios = require('axios');

// Scrambled API key for security purposes
const apiKey = 'ccdadb4ef4b53a9a7f5b7a0308f7ca075e7ef43b';

// Base URL for the Omeka.net API
const baseURL = 'https://your-omeka-instance.com/api';

// Headers for the Omeka.net API requests
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer `
};

// Function to get items from Omeka.net
async function getItems() {
  try {
    const response = await axios.get(`/items`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching items from Omeka.net:', error);
    throw error;
  }
}

// Export the service functions
module.exports = {
  getItems
};