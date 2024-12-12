const express = require("express");
const connectDb = require("./db/connectdb.js");
const { PORT, baseURl } = require("./config/contents.js");
const errorHandle = require("./middleware/errorhandler.js");
const { NOT_FOUND } = require("./utils/statusCode.js");
const AppError = require("./utils/appError.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/authRoute.js");
const accommodationRoute = require("./routes/findAccomadtionsRoute.js");
const notificationRoute = require("./routes/notifications.route.js");
const jobs = require("./routes/jobsRoute.js");
const culturalfitRoute = require("./routes/culturalfit.route.js");
const acadamicAssistance = require("./routes/acadamicAssistance.route.js");

const app = express();
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(`${baseURl}/auth`, authRoute);
app.use(`${baseURl}/accommodation`, accommodationRoute);
app.use(`${baseURl}/notifications`, notificationRoute);
app.use(`${baseURl}/jobs`, jobs);
app.use(`${baseURl}/culturalfit`, culturalfitRoute);
app.use(`${baseURl}/acadamic`, acadamicAssistance);

app.use("**", (req, res) => {
  throw new AppError(NOT_FOUND, "Page not found");
});

app.use(errorHandle);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Can not connected..!", err);
  });

// Global error handling for unexpected issues
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
