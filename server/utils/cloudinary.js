const cloudinary = require('cloudinary').v2;

const cloudName = process.env.CLOUD_NAME; 
const apiKey = process.env.API_KEY; 
const apiSecret = process.env.API_SECRET; 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;