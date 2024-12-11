const express = require("express");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const {
  markNotificationsAsViewed,
  getAllNotifications,
} = require("../controllers/notificationsController");

const router = express.Router();

router.put("/viewed", isAuthorizedUser, markNotificationsAsViewed);
router.get("/",isAuthorizedUser, getAllNotifications);

module.exports = router;
