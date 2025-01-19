const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    points: {
      type: Number,
      default: 100,
      min: 0,
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    attachments: {
      type: [String],
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    classroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", AssignmentSchema);
