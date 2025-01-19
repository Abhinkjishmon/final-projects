const express = require("express");
const {
  createAssignment,
  getAllAssignments,
  updateAssignment,
  deleteAssignment,
  submitAssignment,
  isAssignmentSubmitted,
} = require("../controllers/acadamicAssignmentController");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create an assignment
router.post("/assignments", isAuthorizedUser, createAssignment);
// Get all assignments
router.get("/assignments/:id", isAuthorizedUser, getAllAssignments);
// Update an assignment
router.put("/assignments/:id", isAuthorizedUser, updateAssignment);
// Delete an assignment
router.delete("/assignments/:id", isAuthorizedUser, deleteAssignment);
// submit assignment
router.post(
  "/assignments/submit",
  upload.single("file"),
  isAuthorizedUser,
  submitAssignment
);
// isAssignmentSubmitted
router.post(
  "/assignments/isAssignmentSubmitted/:classroomId",
  isAuthorizedUser,
  isAssignmentSubmitted
);

module.exports = router;
