const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discriptions: {
    type: String,
  },                                                        
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
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
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StudyMaterial", studyMaterialSchema);
