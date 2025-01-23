const convertToBase64 = require("../helper/fileToBase64");
const Classroom = require("../models/academicAssistance/classroomSchema.model");
const StudyMaterial = require("../models/academicAssistance/studyMaterialSchema.model");
const path = require("path");
const { uploadFiletoCloudinary } = require("../utils/cloudinayFileUpload");
const generateResponse = require("../utils/googleGenerativeAI");
const { visaAssistAIPrePrompr, acadamicAIPrompt } = require("../helper/prompt");
const AccademicAiChat = require("../models/academicAssistance/aiAssistChat");
const mongoose = require("mongoose");
const Session = require("../models/academicAssistance/livesessionmodel");
const GroupChat = require("../models/academicAssistance/groupChat.model");

const createClassroom = async (req, res) => {
  try {
    const { name, description, title, userId, category, whyGood, syllabus } =
      req.body;
    if (!userId) {
      return res.status(401).json({ msg: "User not authenticated" });
    }
    const file = req.file;
    if (!file) {
      return res.status(401).json({
        message: "Event poster required..!",
        status: "FAILED",
      });
    }
    const poster = convertToBase64(file.buffer, file.mimetype);
    if (!poster) {
      return res.status(401).json({
        message: "Something went wrong...! try again after some time",
        status: "FAILED",
      });
    }
    const cloudPlayLoad = await uploadFiletoCloudinary(poster);
    if (!poster) {
      return res.status(401).json({
        message: "Something went wrong...! try again after some time",
        status: "FAILED",
      });
    }

    const newClassroom = new Classroom({
      title,
      name,
      description,
      createdBy: userId,
      category,
      coverVideo: cloudPlayLoad.secure_url,
      whyGood,
      syllabus,
    });
    await newClassroom.save();
    res.status(201).json({
      newClassroom,
      message: "New class room created successfully",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Join a classroom
const joinClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { userId } = req.body;
    const classroom = await Classroom.findById(classroomId);

    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    const existingParticipant = classroom.participants.some(
      (participant) => participant.userId.toString() === userId.toString()
    );
    if (existingParticipant) {
      return res.status(400).json({ message: "User is already a participant" });
    }

    classroom.participants.push({
      userId: userId,
      joinedAt: new Date(),
    });

    await classroom.save();

    res.status(200).json({
      message: "Joined classroom successfully",
      classroom,
      status: "SUCCESS",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Leave a classroom
const leaveClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { userId } = req.body;

    const classroom = await Classroom.findById(classroomId);

    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    const participantIndex = classroom.participants.findIndex(
      (participant) => participant.userId.toString() === userId.toString()
    );

    if (participantIndex === -1) {
      return res
        .status(400)
        .json({ message: "User is not a participant in this classroom" });
    }
    classroom.participants.splice(participantIndex, 1);
    await classroom.save();

    // Respond with success
    res.status(200).json({
      message: "Left classroom successfully",
      classroom,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add study material to a classroom
const addStudyMaterial = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { title, description, type, userId, url } = req.body;
    const file = req.file;
    if (url) {
      const newStudyMaterial = new StudyMaterial({
        title,
        type,
        url,
        descriptions: description,
        uploadedBy: userId,
        classroom: classroomId,
      });
      await newStudyMaterial.save();

      return res.status(200).json({
        message: "Study material added successfully with URL",
        studyMaterial: newStudyMaterial,
        status: "SUCCESS",
      });
    }
    if (!file) {
      return res.status(401).json({
        message:
          "Study material file required..! Provide either a URL or a file.",
        status: "FAILED",
      });
    }

    // If file is provided, convert it to Base64 and upload to Cloudinary
    const poster = convertToBase64(file.buffer, file.mimetype);
    if (!poster) {
      return res.status(401).json({
        message: "Something went wrong...! try again after some time",
        status: "FAILED",
      });
    }

    // Upload the file to Cloudinary
    const cloudPlayLoad = await uploadFiletoCloudinary(poster);
    if (!cloudPlayLoad || !cloudPlayLoad.url) {
      return res.status(500).json({
        message: "Failed to upload file to Cloudinary",
        status: "FAILED",
      });
    }

    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Save the study material with Cloudinary URL
    const newStudyMaterial = new StudyMaterial({
      title,
      type,
      url: cloudPlayLoad.url,
      discriptions: description,
      uploadedBy: userId,
      classroom: classroomId,
    });

    await newStudyMaterial.save();

    return res.status(200).json({
      message: "Study material added successfully with file",
      studyMaterial: newStudyMaterial,
      status: "SUCCESS",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete study material
const deleteStudyMaterial = async (req, res) => {
  try {
    const { classroomId, studyMaterialId } = req.params;
    const { userId } = req.body;

    // Find the classroom by ID
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Find the study material by ID
    const studyMaterial = await StudyMaterial.findById(studyMaterialId);
    if (!studyMaterial) {
      return res.status(404).json({ message: "Study material not found" });
    }

    // Check if the user is the one who uploaded the study material
    if (studyMaterial.uploadedBy.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You do not have permission to delete this study material",
      });
    }
    // Delete the study material from the database using findByIdAndDelete
    await StudyMaterial.findByIdAndDelete(studyMaterialId);

    res.status(200).json({ message: "Study material deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all classrooms
const getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    if (classrooms.length === 0) {
      return res.status(404).json({ message: "No classrooms found" });
    }
    res.status(200).json(classrooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get one classroom with study materials and participants
const getClassroomDetails = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const classroom = await Classroom.findById(classroomId)
      .populate({ path: "createdBy", select: "-password" })
      .populate("participants.userId", "fullname email _id")
      .exec();
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    res.status(200).json(classroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get study materials for a specific classroom
const getStudyMaterialsForClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const classroom = await StudyMaterial.find({ classroom: classroomId });
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    res.status(200).json(classroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const classroom = await Classroom.findByIdAndDelete(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }
    await StudyMaterial.deleteMany({ classroomId: classroomId });
    res.status(200).json({
      message: "Classroom and associated study materials deleted successfully",
      status:"SUCCESS"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const acadamicAIChat = async (req, res) => {
  try {
    const { userId, userMessage } = req.body;

    if (!userId || !userMessage) {
      return res
        .status(400)
        .json({ error: "User ID and message are required." });
    }

    const assistantResponse = await generateResponse(
      acadamicAIPrompt(userMessage)
    );
    const chat = new AccademicAiChat({
      userId,
      userMessage,
      assistantResponse,
    });
    await chat.save();

    res.status(200).json({ userMessage, assistantResponse });
  } catch (error) {
    console.error(
      "Error interacting with Gemini API:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to process the chat." });
  }
};

// acadmaic AI chat boat
const getAcademicAIChats = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid User ID format" });
    }
    const chats = await AccademicAiChat.find({ userId })
      .populate({ path: "userId", select: "-password" })
      .sort({ timestamp: 1 });
    if (!chats || chats.length === 0) {
      return res.status(404).json({ message: "No chats found for this user." });
    }

    res.status(200).json({ success: true, data: chats });
  } catch (error) {
    console.error("Error retrieving chats:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving chats." });
  }
};

// create live sessions

const createSession = async (req, res) => {
  try {
    const { title, description, videoId, instructor, date } = req.body;
    const { classroomId } = req.params;
    const file = req.file;
    if (!title || !description || !videoId || !instructor || !date) { 
      return res.status(400).json({
        message: "All fields are required",
        status: "FAILED",
      });
    }

    if (!file) {
      return res.status(400).json({
        message: "Thumbnail image is required",
        status: "FAILED",
      });
    }
    const posterBase64 = convertToBase64(file.buffer, file.mimetype);
    if (!posterBase64) {
      return res.status(500).json({
        message: "Failed to process the image. Try again later.",
        status: "FAILED",
      });
    }

    const cloudUpload = await   (posterBase64);
    if (!cloudUpload || !cloudUpload.url) {
      return res.status(500).json({
        message: "Failed to upload image to Cloudinary. Try again later.",
        status: "FAILED",
      });
    }
    const newSession = new Session({
      title,
      description,
      thumbnail: cloudUpload.url,
      videoId,
      instructor,
      date,
      classroom: classroomId,
    });
    await newSession.save();

    res.status(201).json({
      message: "Session created successfully!",
      status: "SUCCESS",
      data: newSession,
    });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({
      message: "An error occurred while creating the session",
      status: "FAILED",
      error: error.message,
    });
  }
};

// get live sessions
const getSessionsByClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    if (!classroomId) {
      return res.status(400).json({ error: "Classroom ID is required" });
    }
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }
    const sessions = await Session.find({ classroom: classroomId }).sort({
      date: -1,
    });
    if (sessions.length === 0) {
      return res
        .status(404)
        .json({ message: "No sessions found for this classroom." });
    }
    res.status(200).json({ success: true, data: sessions });
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving sessions." });
  }
};

const getChatsByClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const chats = await GroupChat.find({ classroom: classroomId })
      .populate("classroom", "name description")
      .populate("sender", "fullname _id profileImg")
      .sort({ timestamp: 1 });

    if (!chats.length) {
      return res
        .status(404)
        .json({ message: "No chat messages found for this classroom." });
    }
    res.status(200).json({ success: true, data: chats });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching chat messages." });
  }
};

const getClassroomsByUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const classrooms = await Classroom.find({ createdBy: userId })
      .select(
        "title name description category participants coverVideo syllabus createdAt"
      )
      .populate({
        path: "participants.userId",
        select: "name email",
      });
    if (!classrooms || classrooms.length === 0) {
      return res
        .status(404)
        .json({ message: "No classrooms found for this user." });
    }

    return res.status(200).json({
      message: "Classrooms retrieved successfully.",
      classrooms,
    });
  } catch (error) {
    console.error("Error fetching classrooms:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};
const getParticipantClassrooms = async (req, res) => {
  try {
    const { userId } = req.body; 
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const classrooms = await Classroom.find({ "participants.userId": userId })
      .select(
        "title name description category participants coverVideo syllabus createdAt"
      )
      .populate({
        path: "createdBy",
        select: "name email",
      });

    if (!classrooms || classrooms.length === 0) {
      return res.status(404).json({
        message: "No classrooms found for this user as a participant.",
      });
    }

    return res.status(200).json({
      message: "Participant classrooms retrieved successfully.",
      classrooms,
    });
  } catch (error) {
    console.error("Error fetching participant classrooms:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

module.exports = {
  createClassroom,
  joinClassroom,
  leaveClassroom,
  addStudyMaterial,
  deleteStudyMaterial,
  getAllClassrooms,
  getClassroomDetails,
  getStudyMaterialsForClassroom,
  deleteClassroom,
  acadamicAIChat,
  getAcademicAIChats,
  createSession,
  getSessionsByClassroom,
  getChatsByClassroom,
  getClassroomsByUser,
  getParticipantClassrooms
};
