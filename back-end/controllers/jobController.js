const Job = require("../models/job/job.model");
const User = require("../models/user/user.model");
const Application = require("../models/job/jobApplication.model");
const SavedJob = require("../models/job/savedjobs.model");

// Function to add a new job
const addJob = async (req, res) => {
  try {
    const {
      title,
      description,
      company,
      location,
      employmentType,
      skills,
      qualifications,
      responsibilities,
      experienceRequired,
      status,
      closingDate,
      category,
      userId,
    } = req.body;

    // Validate the userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new Job instance
    const newJob = new Job({
      title,
      description,
      company,
      location,
      employmentType,
      skills,
      qualifications,
      responsibilities,
      experienceRequired,
      status,
      closingDate,
      category,
      userId,
    });

    // Save the job to the database
    const savedJob = await newJob.save();

    // Return a success response
    res
      .status(201)
      .json({ message: "Job created successfully", job: savedJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res
      .status(500)
      .json({ message: "Failed to create job", error: error.message });
  }
};

// Function to add a new application
const addApplication = async (req, res) => {
  try {
    const {
      jobId,
      candidateName,
      candidateEmail,
      candidatePhone,
      resume,
      coverLetter,
      skills,
      experience,
      status,
      userId,
    } = req.body;

    // Validate the jobId
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    // Validate the jobId
    // Check if the user has already applied for the job
    const existingApplication = await Application.find({
      user: userId,
      job: jobId,
    });
    if (existingApplication) {
      return res.status(400).json({ message: "Already applied to the job" });
    }

    // Create a new Application instance
    const newApplication = new Application({
      jobId,
      candidateName,
      candidateEmail,
      candidatePhone,
      resume,
      coverLetter,
      skills,
      experience,
      status,
      userId,
    });

    // Save the application to the database
    const savedApplication = await newApplication.save();

    // Return a success response
    res.status(201).json({
      message: "Application submitted successfully",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    res
      .status(500)
      .json({ message: "Failed to submit application", error: error.message });
  }
};

/**
 * Update a job
 */
const updateJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { userId } = req.body;

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the logged-in user is the creator of the job
    if (job.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this job" });
    }

    // Update the job with the new data
    const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the updated data adheres to the schema
    });

    res.status(200).json({ message: "Job updated successfully", updatedJob });
  } catch (error) {
    console.error("Error updating job:", error);
    res
      .status(500)
      .json({ message: "Failed to update job", error: error.message });
  }
};

/**
 * Delete a job
 */
const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { userId } = req.body; // Assuming the userId is sent in the request body for validation

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the logged-in user is the creator of the job
    if (job.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this job" });
    }

    // Delete the job
    await job.deleteOne();

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res
      .status(500)
      .json({ message: "Failed to delete job", error: error.message });
  }
};

/**
 * Save a job for a user
 */
const saveJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    // Validate userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate jobId
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the job is already saved by the user
    const existingSavedJob = await SavedJob.findOne({ userId, jobId });
    if (existingSavedJob) {
      return res.status(400).json({ message: "Job already saved" });
    }

    // Save the job
    const savedJob = new SavedJob({ userId, jobId });
    await savedJob.save();

    res.status(201).json({ message: "Job saved successfully", savedJob });
  } catch (error) {
    console.error("Error saving job:", error);
    res
      .status(500)
      .json({ message: "Failed to save job", error: error.message });
  }
};

/**
 * Get saved jobs for a user
 */
const getSavedJobs = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch saved jobs for the user
    const savedJobs = await SavedJob.find({ userId })
      .populate("jobId", "title company location description") // Populate job details
      .exec();

    res.status(200).json({ savedJobs });
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch saved jobs", error: error.message });
  }
};

/**
 * Get all jobs
 */
const getAllJobs = async (req, res) => {
  try {
    // Fetch all jobs
    const jobs = await Job.find().populate("userId", "name email"); // Populate user details if required
    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch jobs", error: error.message });
  }
};

/**
 * Get latest jobs
 */
const getLatestJobs = async (req, res) => {
  try {
    const { limit = 5 } = req.query; // Default limit to 5 if not provided

    // Fetch latest jobs sorted by creation date in descending order
    const latestJobs = await Job.find()
      .sort({ createdDate: -1 }) // Sort by createdDate descending
      .limit(parseInt(limit)) // Limit the number of jobs returned
      .populate("userId", "name email"); // Populate user details if required

    res.status(200).json({ latestJobs });
  } catch (error) {
    console.error("Error fetching latest jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch latest jobs", error: error.message });
  }
};

/**
 * Get all jobs created by a specific user
 */
const getJobsByUser = async (req, res) => {
  try {
    const { userId } = req.body; // Extract userId from the request params

    // Fetch jobs created by the user
    const jobs = await Job.find({ userId }).populate("userId", "name email"); // Optionally populate user details if needed

    // If no jobs are found for the user
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found for this user" });
    }

    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs for user:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch jobs for user", error: error.message });
  }
};

/**
 * Update the status of a job application
 */
const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params; // Get the applicationId from request params
    const { status } = req.body; // Get the status from the request body (e.g., 'interviewing', 'hired', 'rejected')

    // Validate status
    const validStatuses = ["applied", "interviewing", "hired", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    // Find and update the application status
    const application = await Application.findByIdAndUpdate(
      applicationId,
      { status }, // Update the status field
      { new: true } // Return the updated document
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res
      .status(200)
      .json({ message: "Application status updated", application });
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({
      message: "Failed to update application status",
      error: error.message,
    });
  }
};

/**
 * Get all applications for a particular job
 */
const getApplicationsForJob = async (req, res) => {
  try {
    const { jobId } = req.params; // Get jobId from request params

    // Fetch applications for the specified job
    const applications = await Application.find({jobId })
      .populate("userId", "name email") // Optionally populate candidate details
      .populate("jobId", "title description"); // Optionally populate job details

    // If no applications are found for the job
    if (!applications || applications.length === 0) {
      return res
        .status(404)
        .json({ message: "No applications found for this job" });
    }

    res.status(200).json({ applications });
  } catch (error) {
    console.error("Error fetching applications for job:", error);
    res
      .status(500)
      .json({
        message: "Failed to fetch applications for job",
        error: error.message,
      });
  }
};

module.exports = {
  addJob,
  addApplication,
  saveJob,
  getSavedJobs,
  updateJob,
  deleteJob,
  getAllJobs,
  getLatestJobs,
  getJobsByUser,
  updateApplicationStatus,
  getApplicationsForJob,
};
