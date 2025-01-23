const convertToBase64 = require("../helper/fileToBase64");
const Assignment = require("../models/academicAssistance/assignments");
const AssignmentSubmission = require("../models/academicAssistance/assignmentSubmit.model");
const { uploadFiletoCloudinary } = require("../utils/cloudinayFileUpload");

const createAssignment = async (req, res) => {
  try {
    const {
      title,
      description,
      dueDate,
      points,
      instructions,
      attachments,
      userId,
      classroom,
    } = req.body;

    const newAssignment = new Assignment({
      title,
      description,
      dueDate,
      points,
      instructions,
      uploadedBy: userId,
      classroom,
      attachments: attachments.filter((url) => url.trim() !== ""),
    });

    const savedAssignment = await newAssignment.save();
    res.status(201).json({
      status: "SUCCESS",
      message: "Assignment created successfully",
      data: savedAssignment,
    });
  } catch (error) {
    console.error("Error creating assignment:", error);
    res.status(500).json({
      message: "Failed to create assignment",
      error: error.message,
    });
  }
};

// Get all assignments
const getAllAssignments = async (req, res) => {
  try {
    const { id } = req.params;
    const assignments = await Assignment.find({ classroom: id });
    res.status(200).json(assignments);
  } catch (error) {
    console.error("Error fetching assignments:", error);
    res.status(500).json({
      message: "Failed to fetch assignments",
      error: error.message,
    });
  }
};

// Update an assignment
const updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedAssignment = await Assignment.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({
      message: "Assignment updated successfully",
      data: updatedAssignment,
    });
  } catch (error) {
    console.error("Error updating assignment:", error);
    res.status(500).json({
      message: "Failed to update assignment",
      error: error.message,
    });
  }
};

// Delete an assignment
const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssignment = await Assignment.findByIdAndDelete(id);

    if (!deletedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({
      message: "Assignment deleted successfully",
      data: deletedAssignment,
    });
  } catch (error) {
    console.error("Error deleting assignment:", error);
    res.status(500).json({
      message: "Failed to delete assignment",
      error: error.message,
    });
  }
};

const submitAssignment = async (req, res) => {
  try {
    const { assignmentId, userId } = req.body;
    console.log(assignmentId, userId)
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        message: "Assignment file is required.",
        status: "FAILED",
      });
    }
    const fileBase64 = convertToBase64(file.buffer, file.mimetype);
    if (!fileBase64) {
      return res.status(500).json({
        message: "Failed to process the file. Try again later.",
        status: "FAILED",
      });
    }
    const cloudResponse = await uploadFiletoCloudinary(fileBase64);
    if (!cloudResponse?.secure_url) {
      return res.status(500).json({
        message: "Failed to upload the file. Try again later.",
        status: "FAILED",
      });
    }
    const newSubmission = new AssignmentSubmission({
      assignmentId,
      studentId: userId,
      content: cloudResponse.secure_url,
    });

    await newSubmission.save();

    res.status(201).json({
      newSubmission,
      status: "SUCCESS",
      message: "Assignment submitted successfully.",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error submitting assignment:", error.message);
    res.status(500).json({
      message: "Server error. Please try again later.",
      status: "FAILED",
    });
  }
};
const isAssignmentSubmitted = async (req, res) => {
  try {
    const { userId } = req.body;
    const submission = await AssignmentSubmission.find({
      studentId: userId,
    });

    if (submission) {
      return res.status(200).json({
        isSubmitted: true,
        submission,
        message: "Assignment submitted",
        status: "SUCCESS",
      });
    } else {
      return res.status(200).json({
        isSubmitted: false,
        message: "No submission found",
        status: "SUCCESS",
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Server error",
      status: "FAILED",
    });
  }
};

module.exports = {
  createAssignment,
  getAllAssignments,
  updateAssignment,
  deleteAssignment,
  submitAssignment,
  isAssignmentSubmitted,
};
