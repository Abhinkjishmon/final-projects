const bcrypt = require("bcrypt");
const { createJwt } = require("../utils/jwtHandler");
const User = require("../models/user.model");
const { accessSecritKey, refreshSecritKey } = require("../config/contents");
const { SUCCESS } = require("../utils/statusCode");
const ResponseHandler = require("../utils/appSuccess");

const userController = {
  /**
   * Register a new user
   */
  register: async (req, res, next) => {
    try {
      const { fullname, username, email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        fullname,
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      ResponseHandler.sendSuccess(
        res,
        SUCCESS,
        "User registered successfully."
      );
    } catch (error) {
      next(error);
    }
  },

  /**
   * Log in a user
   */
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const accessToken = createJwt(user._id, accessSecritKey, "15m");
      const refreshToken = createJwt(user._id, refreshSecritKey, "15d");

      const options = { httpOnly: true, sameSite: "None", secure: true };

      res
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options);

      ResponseHandler.sendSuccess(res, SUCCESS, "Login successful.", {
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        userId: user._id,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * Log out a user
   */
  logout: async (req, res, next) => {
    try {
      // Invalidate the token (handled client-side)
      res.status(SUCCESS).json({ message: "Logout successful." });
    } catch (error) {
      next(error);
    }
  },
  /**
   * refresh token
   */
  generateNewToken: async (req, res, next) => {
    try {
      const accessToken = createJwt(req._id, accessSecritKey, "15m");
      const options = { httpOnly: true, sameSite: "None", secure: true };
      res.cookie("accessToken", accessToken, options);
      res.status(SUCCESS).json({ message: "Logout successful." });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
