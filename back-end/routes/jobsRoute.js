const express = require("express");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const multer = require("multer");
const upload = multer();
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
  getJobWithSimilarJobs,
  getFeaturedJobs,
  getUserApplications,
  searchJobs,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/new-job", isAuthorizedUser, addJob);
// Route to add a new application
router.post(
  "/applications/:jobId",
  upload.none(),
  isAuthorizedUser,
  addApplication
);

// Route to save a job
router.post("/save/:jobId", isAuthorizedUser, saveJob);

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

router.post("/user", isAuthorizedUser, getJobsByUser);

// Route to update the status of a job application
router.put(
  "/update-status/:applicationId",
  isAuthorizedUser,
  updateApplicationStatus
);
router.get("/:id", isAuthorizedUser, getJobWithSimilarJobs);
router.post("/featured-jobs", isAuthorizedUser, getFeaturedJobs);

// Route to get all applications for a particular job
router.get("/applications/:jobId", isAuthorizedUser, getApplicationsForJob);

//routes to get job applied by user
router.post("/applied", isAuthorizedUser, getUserApplications);
router.post("/search",isAuthorizedUser, searchJobs);

module.exports = router;
