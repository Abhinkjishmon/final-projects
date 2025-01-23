const bcrypt = require("bcrypt");
const { createJwt } = require("../utils/jwtHandler");
const User = require("../models/user/user.model");
const { accessSecritKey, refreshSecritKey } = require("../config/contents");
const { SUCCESS } = require("../utils/statusCode");
const ResponseHandler = require("../utils/appSuccess");
const { uploadFiletoCloudinary } = require("../utils/cloudinayFileUpload");
const convertToBase64 = require("../helper/fileToBase64");

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
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
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
        experience,
        socialMediaLinks,
        address,
      } = req.body;
      console.log(socialMediaLinks);
      const profileImg = req.files?.profileImg?.[0];
      const coverImg = req.files?.coverImg?.[0];

      let profileImgUrl = null;
      let coverImgUrl = null;

      if (profileImg) {
        const profileImgBase64 = convertToBase64(
          profileImg.buffer,
          profileImg.mimetype
        );
        if (profileImgBase64) {
          profileImgUrl = await uploadFiletoCloudinary(profileImgBase64);
        }
      }

      if (coverImg) {
        const coverImgBase64 = convertToBase64(
          coverImg.buffer,
          coverImg.mimetype
        );
        if (coverImgBase64) {
          coverImgUrl = await uploadFiletoCloudinary(coverImgBase64);
        }
      }

      const user = await User.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ message: "User not found", status: "FAILED" });
      }

      if (fullname) user.fullname = fullname;
      if (username) user.username = username;
      if (email) user.email = email;
      if (profileImgUrl) user.profileImg = profileImgUrl.secure_url;
      if (coverImgUrl) user.coverImg = coverImgUrl.secure_url;
      if (about) user.about = about;
      if (experience) user.experience = experience;
      if (address) {
        user.address = {
          ...user.address,
          ...address,
        };
      }
      if (socialMediaLinks && Array.isArray(socialMediaLinks)) {
        user.socialMediaLinks = {
          ...(user.socialMediaLinks || {}), 
          ...Object.fromEntries(
            socialMediaLinks.map((link) => [link.platform, link.url]) 
          ),
        };
      }
      const updatedUser = await user.save();

      return res.status(200).json({
        message: "User updated successfully",
        status: "SUCCESS",
        data: updatedUser,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({
        message: "Server error while updating user",
        status: "FAILED",
      });
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
      const user = await User.findById(userId).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
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
