require("dotenv").config();

const PORT = process.env.PORT || 8000;

const db_userName = process.env.DB_USERNAME;
const db_passwword = process.env.DB_PASSWORD;

// const mongoDBUrl = `mongodb+srv://${db_userName}:${db_passwword}@cluster0.4pxty.mongodb.net/`;
const mongoDBUrl = `mongodb://localhost:27017/easyway`; 

const accessSecritKey = process.env.ACCESS_SECRIT_KEY;
const refreshSecritKey = process.env.REFRESH_SECRIT_KEY;

const geminiApiKey = process.env.GEMINI_API;

const baseURl = "/api/v1";
const frontEndURL = process.env.FRONT_END;

const corsOptions = {
  origin: frontEndURL,
  credentials: true,
};

const cloudinaryCred = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
};

module.exports = {
  PORT,
  mongoDBUrl,
  accessSecritKey,
  refreshSecritKey,
  baseURl,
  corsOptions,
  cloudinaryCred,
  geminiApiKey
};
