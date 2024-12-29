const { cloudinaryCred } = require("../config/contents");

const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinaryConfig = () => {
  cloudinary.config(cloudinaryCred);
};

module.exports = cloudinaryConfig;
