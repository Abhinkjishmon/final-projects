const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the User collection
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job", // References the Job collection
    required: true,
  },
  savedDate: {
    type: Date,
    default: Date.now, // Automatically sets the date when the job is saved
  },
});

// Ensure a user can't save the same job multiple times
savedJobSchema.index({ userId: 1, jobId: 1 }, { unique: true });

module.exports = mongoose.model("SavedJob", savedJobSchema);
