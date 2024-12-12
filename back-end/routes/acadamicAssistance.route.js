const express = require("express");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const {
  createClassroom,
  joinClassroom,
  leaveClassroom,
  addStudyMaterial,
  deleteStudyMaterial,
  getClassroomDetails,
  getAllClassrooms,
  getStudyMaterialsForClassroom,
  deleteClassroom,
} = require("../controllers/acadamicAssistanceController");

const router = express.Router();
// Route to get all classrooms
router.get("/classrooms", isAuthorizedUser, getAllClassrooms);
// Route to get a classroom with study materials and participants
router.get("/classrooms/:classroomId", isAuthorizedUser, getClassroomDetails);

router.post("/new-classroom", isAuthorizedUser, createClassroom);
// Route to join a classroom
router.post("/classrooms/:classroomId/join", isAuthorizedUser, joinClassroom);
// Route to leave a classroom
router.post("/classrooms/:classroomId/leave", isAuthorizedUser, leaveClassroom);
// Route to add study material
router.post(
  "/classrooms/:classroomId/study-material",
  isAuthorizedUser,
  addStudyMaterial
);
// Route to delete study material
router.delete(
  "/classrooms/:classroomId/study-material/:studyMaterialId",
  isAuthorizedUser,
  deleteStudyMaterial
);
// Route to get all study materials for a specific classroom
router.get(
  "/classrooms/:classroomId/study-materials",
  isAuthorizedUser,
  getStudyMaterialsForClassroom
);

// Route to delete a specific classroom
router.delete("/classrooms/:classroomId", isAuthorizedUser, deleteClassroom);

module.exports = router;
