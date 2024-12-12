const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: { // E.g., 'pdf', 'image', 'video'
    type: String,
    required: true,
  },
  url: { // The URL/path where the material is stored (could be a file path or a cloud URL)
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user who uploaded the material
    required: true,
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom', // Reference to the classroom this material belongs to
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StudyMaterial', studyMaterialSchema);
