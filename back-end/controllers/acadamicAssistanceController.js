const Classroom = require("../models/academicAssistance/classroomSchema.model");
const StudyMaterial = require("../models/academicAssistance/studyMaterialSchema.model");
const path = require("path");

const createClassroom = async (req, res) => {
  try {
    const { name, description, userId } = req.body;

    // Check if the user is authenticated
    if (!userId) {
      return res.status(401).json({ msg: "User not authenticated" });
    }

    // Create a new classroom
    const newClassroom = new Classroom({
      name,
      description,
      createdBy: userId, // The creator of the classroom
    });

    // Save the new classroom to the database
    await newClassroom.save();

    // Return the created classroom
    res.status(201).json(newClassroom);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};
// Join a classroom
const joinClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params; // Get the classroomId from the URL parameter
    const { userId } = req.body; // Assuming you're using a middleware for authentication to get the logged-in user's ID

    // Find the classroom by its ID
    const classroom = await Classroom.findById(classroomId);

    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Check if the user is already a participant
    const existingParticipant = classroom.participants.some(
      (participant) => participant.userId.toString() === userId.toString()
    );
    if (existingParticipant) {
      return res.status(400).json({ message: "User is already a participant" });
    }

    // Add the user to the classroom participants array
    classroom.participants.push({
      userId: userId,
      joinedAt: new Date(),
    });

    // Save the updated classroom
    await classroom.save();

    // Respond with success
    res.status(200).json({
      message: "Joined classroom successfully",
      classroom,
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

    // Check if the user is a participant
    const participantIndex = classroom.participants.findIndex(
      (participant) => participant.userId.toString() === userId.toString()
    );

    if (participantIndex === -1) {
      return res
        .status(400)
        .json({ message: "User is not a participant in this classroom" });
    }

    // Remove the user from the participants array
    classroom.participants.splice(participantIndex, 1);
    // Save the updated classroom
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
    const { title, type, userId, url } = req.body;

    // Check if the classroom exists
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Create a new study material
    const newStudyMaterial = new StudyMaterial({
      title,
      type,
      url,
      uploadedBy: userId,
      classroom: classroomId,
    });

    // Save the study material to the database
    await newStudyMaterial.save();

    res.status(200).json({
      message: "Study material added successfully",
      studyMaterial: newStudyMaterial,
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
    // Find all classrooms
    const classrooms = await Classroom.find();

    // If no classrooms are found
    if (classrooms.length === 0) {
      return res.status(404).json({ message: "No classrooms found" });
    }

    // Respond with the list of classrooms
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

    // Find the classroom by ID and populate studyMaterials and participants
    const classroom = await Classroom.findById(classroomId)
      .populate("createdBy", "fullname email") // Populate the creator's name and email
      .populate("participants.userId", "fullname email") // Populate participant details (name, email)
      .exec();

    // If the classroom is not found
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Return the classroom with its populated data
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

    // Find the classroom by ID and populate study materials
    const classroom = await StudyMaterial.find({ classroom: classroomId });
    // If the classroom is not found
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Return the classroom study materials
    res.status(200).json(classroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete classroom and associated study materials
const deleteClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;

    // Find and delete the classroom
    const classroom = await Classroom.findByIdAndDelete(classroomId);

    // If the classroom is not found
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Optionally, delete associated study materials (if needed)
    await StudyMaterial.deleteMany({ classroomId: classroomId });

    // Return success response
    res.status(200).json({
      message: "Classroom and associated study materials deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
};
