const bcrypt = require("bcrypt");
const { createJwt } = require("../utils/jwtHandler");
const User = require("../models/user/user.model");
const { accessSecritKey, refreshSecritKey } = require("../config/contents");
const { SUCCESS } = require("../utils/statusCode");
const ResponseHandler = require("../utils/appSuccess");
const { uploadFiletoCloudinary } = require("../utils/cloudinayFileUpload");

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

      const accessToken = createJwt(user._id, accessSecritKey, "15d");
      const refreshToken = createJwt(user._id, refreshSecritKey, "15d");

      const options = {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
      };

      res
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options);

      ResponseHandler.sendSuccess(res, SUCCESS, "Login successful.", {
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        userId: user._id,
        profileImg: user.profileImg,
      });
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const {
        fullname,
        username,
        email,
        about,
        profileImg,
        coverImg,
        experience,
        socialMediaLinks,
        address
      } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (fullname) user.fullname = fullname;
      if (username) user.username = username;
      if (email) user.email = email;
      if (profileImg) user.profileImg = profileImg;
      if (coverImg) user.coverImg = coverImg;
      if (about) user.about = about;
      if (experience) user.experience = experience;

      // // Update social media links if provided
      // if (socialMediaLinks) {
      //   user.socialMediaLinks = {
      //     ...user.socialMediaLinks,
      //     ...socialMediaLinks,
      //   };
      // }

      // Save the updated user information
      const updatedUser = await user.save();
      if (updatedUser) {
        // Return the updated user as a response
        return res.status(200).json(updatedUser);
      }
    } catch (error) {
      console.error(error);
      return res 
        .status(500)
        .json({ message: "Server error while updating user" });
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

  getUserInfo: async (req, res) => {
    try {
      const { userId } = req.params;

      // Find the user by userId, excluding the password field
      const user = await User.findById(userId).select("-password"); // '-password' will exclude it from the result

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Send back the user data without password
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Server error while retrieving user info" });
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
