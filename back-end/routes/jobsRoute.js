const express = require("express");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const {
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
} = require("../controllers/jobController");

const router = express.Router();

router.post("/new-job", isAuthorizedUser, addJob);
// Route to add a new application
router.post("/applications", isAuthorizedUser, addApplication);

// Route to save a job
router.post("/save", isAuthorizedUser, saveJob);

// Route to get all saved jobs for a user
router.get("/get-saved", isAuthorizedUser, getSavedJobs);

// Route to update a job
router.put("/:jobId", isAuthorizedUser, updateJob);

// Route to delete a job
router.delete("/:jobId", isAuthorizedUser, deleteJob);

// Route to get all jobs
router.get("/all", isAuthorizedUser, getAllJobs);

// Route to get latest jobs
router.get("/latest", isAuthorizedUser, getLatestJobs);

router.get("/user", isAuthorizedUser, getJobsByUser);

// Route to update the status of a job application
router.put(
  "/update-status/:applicationId",
  isAuthorizedUser,
  updateApplicationStatus
);

// Route to get all applications for a particular job
router.get("/applications/:jobId", isAuthorizedUser, getApplicationsForJob);

module.exports = router;
