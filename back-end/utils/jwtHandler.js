const jwt = require("jsonwebtoken");

const createJwt = (playLoad, secretKey, expTime) => {
  return jwt.sign({playLoad}, secretKey, { expiresIn: expTime });
};

const verifyJWt = (token, secretKey) => {
  return jwt.verify(token, secretKey);
};

module.exports = { createJwt, verifyJWt };
