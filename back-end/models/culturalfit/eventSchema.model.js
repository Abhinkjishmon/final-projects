const mongoose = require("mongoose");

// Define the event schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "removed"],
    default: "active",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a 'User' model for the user who created the event
    required: true,
  },
  poster: {
    type: String, // Storing the URL or file path of the poster image
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for the Event
module.exports = mongoose.model("Event", eventSchema);
