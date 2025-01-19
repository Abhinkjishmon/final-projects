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
  acadamicAIChat,
  getAcademicAIChats,
  createSession,
  getSessionsByClassroom,
  getChatsByClassroom,
  getClassroomsByUser,
  getParticipantClassrooms,
} = require("../controllers/acadamicAssistanceController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();
// Route to get all classrooms
router.get("/classrooms", isAuthorizedUser, getAllClassrooms);
// Route to get a classroom with study materials and participants
router.get("/classrooms/:classroomId", isAuthorizedUser, getClassroomDetails);

router.post(
  "/new-classroom",
  upload.single("coverVideo"),
  isAuthorizedUser,
  createClassroom
);
// Route to join a classroom
router.post("/classrooms/:classroomId/join", isAuthorizedUser, joinClassroom);
// Route to leave a classroom
router.post("/classrooms/:classroomId/leave", isAuthorizedUser, leaveClassroom);
// Route to add study material
router.post(
  "/classrooms/:classroomId/study-material",
  upload.single("file"),
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

// Route to chat boat
router.post("/classrooms/AIChat", isAuthorizedUser, acadamicAIChat);
//get previous chats
router.get("/previouschat", isAuthorizedUser, getAcademicAIChats);

// Route to create a live session
router.post(
  "/createlive/:classroomId",
  upload.single("thumbnail"),
  isAuthorizedUser,
  createSession
);
// Route to fetch all sessions related to a specific classroom by classroomId
router.get("/get-live/:classroomId", isAuthorizedUser, getSessionsByClassroom);

// Fetch all chat messages for a specific classroom
router.get(
  "/classroom/group-chat/:classroomId",
  isAuthorizedUser,
  getChatsByClassroom
);

router.post("/user/classrooms", isAuthorizedUser, getClassroomsByUser);
router.post(
  "/user/participant-classrooms",
  isAuthorizedUser,
  getParticipantClassrooms
);
module.exports = router;
