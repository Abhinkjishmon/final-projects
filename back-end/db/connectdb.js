const mongoose = require("mongoose");
const { mongoDBUrl } = require("../config/contents.js");

async function connectDb() {
  try {
    const connected = await mongoose.connect(mongoDBUrl);
    console.log(
      "DataBase Connected Successfully!! DB_HOST :",
      connected.connection.host
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILD > ", error);
    process.exit(1);
  }
}

module.exports = connectDb;
