const express = require("express");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const {
  handleChat,
  getUserChats,
  checkEligibility,
} = require("../controllers/visaAndImmigrationController");
const router = express.Router();

router.post("/chat-assist", isAuthorizedUser, handleChat);
router.get("/get-chat", isAuthorizedUser, getUserChats);
router.post("/check-eligibility", isAuthorizedUser, checkEligibility);

module.exports = router;
