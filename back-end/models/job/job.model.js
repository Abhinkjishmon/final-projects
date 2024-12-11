const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Internship"],
    required: true,
  },
  skills: [{ type: String, required: true }],
  qualifications: [{ type: String }],
  responsibilities: [{ type: String }],
  experienceRequired: { type: Number, required: true },
  status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  postedDate: { type: Date, default: Date.now },
  closingDate: { type: Date },
  category: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Job", jobSchema);
