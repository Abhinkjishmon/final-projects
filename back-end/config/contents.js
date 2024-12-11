require("dotenv").config();

const PORT = process.env.PORT || 8000;

const db_userName = process.env.DB_USERNAME;
const db_passwword = process.env.DB_PASSWORD;

// const mongoDBUrl = `mongodb+srv://${db_userName}:${db_passwword}@cluster0.4pxty.mongodb.net/`;
const mongoDBUrl = `mongodb://localhost:27017/easyway`;

const accessSecritKey = process.env.ACCESS_SECRIT_KEY;
const refreshSecritKey = process.env.REFRESH_SECRIT_KEY;

const baseURl = "/api/v1";

module.exports = {
  PORT,
  mongoDBUrl,
  accessSecritKey,
  refreshSecritKey,
  baseURl,
};
