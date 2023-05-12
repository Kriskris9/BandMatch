const cloudinary = require('cloudinary').v2;

const cloudName = CLOUD_NAME; 
const apiKey = API_KEY; 
const apiSecret = API_SECRET; 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;