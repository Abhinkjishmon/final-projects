const express = require("express");
const { logIn } = require("../controllers/authController");
const userController = require("../controllers/authController");
const { isRefreshTokenValid } = require("../middleware/verifyjwt");

const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/logout", userController.logout);

router.get(
  "/refresh-token",
  isRefreshTokenValid,
  userController.generateNewToken
);

module.exports = router;
