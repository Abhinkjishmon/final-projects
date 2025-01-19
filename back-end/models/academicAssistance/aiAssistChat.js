const mongoose = require("mongoose");

const AccademicAiChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userMessage: { type: String, required: true },
  assistantResponse: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const AccademicAiChat = mongoose.model(
  "AccademicAiChat",
  AccademicAiChatSchema
);

module.exports = AccademicAiChat;
