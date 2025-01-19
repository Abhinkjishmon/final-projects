const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  candidateName: { type: String, required: true },
  candidateEmail: { type: String, required: true },
  candidatePhone: { type: String },
  resume: { type: String, required: true },
  coverLetter: { type: String },
  skills: [{ type: String }],
  experience: { type: Number },
  status: {
    type: String,
    enum: ["Shortlisted", "Interviewed", "Rejected", "Selected"],
    default: "Applied",
  },
  applicationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
