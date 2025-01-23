const express = require("express");
const multer = require("multer");
const { logIn } = require("../controllers/authController");
const userController = require("../controllers/authController");
const {
  isRefreshTokenValid,
  isAuthorizedUser,
} = require("../middleware/verifyjwt");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/login", userController.login);
router.post("/register", userController.register);
router.put(
  "/update/:userId",
  upload.fields([
    { name: "profileImg", maxCount: 1 },
    { name: "coverImg", maxCount: 1 },
  ]),
  isAuthorizedUser,
  userController.updateUser
);
router.get("/logout", userController.logout);
router.get("/user/:userId", isAuthorizedUser, userController.getUserInfo);

router.get(
  "/refresh-token",
  isRefreshTokenValid,
  userController.generateNewToken
);

module.exports = router;
