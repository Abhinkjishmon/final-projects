const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const { UNAUTHORIZED } = require("../utils/statusCode");
const { verifyJWt, createJwt } = require("../utils/jwtHandler");
const { accessSecritKey, refreshSecritKey } = require("../config/contents");

const isAuthorizedUser = (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;
    const playLoad = verifyJWt(accessToken, accessSecritKey);
    req.body.userId = playLoad.playLoad;
    next();
  } catch (error) {
    throw new AppError(UNAUTHORIZED, {
      message: "unauthorized access..!,login againe.",
    });
  }
};

const isRefreshTokenValid = (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    const playLoad = verifyJWt(refreshToken, refreshSecritKey);
    const accessToken = createJwt(playLoad.playLoad, accessSecritKey, "15m");
    res.cookie("accessToken", accessToken, options);
    next();
  } catch (error) {
    throw new AppError(UNAUTHORIZED, {
      message: "unauthorized access..!,login againe.",
    });
  }
};

module.exports = { isAuthorizedUser, isRefreshTokenValid };
