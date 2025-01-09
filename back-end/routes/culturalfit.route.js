const express = require("express");
const {
  createBlog,
  updateBlog,
  deleteBlog,
  toggleLike,
  getBlogs,
  getOneBlogs,
  getFeaturedBlogs,
} = require("../controllers/culturalfitController");
const { isAuthorizedUser } = require("../middleware/verifyjwt");
const {
  deleteEvent,
  addEvent,
  getAllEvents,
  getEventById,
} = require("../controllers/eventController");

const router = express.Router();

// Route to create a new blog
router.post("/new-blogs", isAuthorizedUser, createBlog);
// get Blogs
router.get("/blogs", isAuthorizedUser, getBlogs);
// get one blog
router.get("/blogs/:id", isAuthorizedUser, getOneBlogs);
//get FeaturedBlogs
router.get("/featured-blogs", isAuthorizedUser, getFeaturedBlogs);
// Route to update a blog
router.put("/update-blog/:blogId", isAuthorizedUser, updateBlog);

// Route to delete a blog
router.delete("/delete-blog/:blogId", isAuthorizedUser, deleteBlog);

// Route to toggle like
router.post("/blogs/:blogId/like", isAuthorizedUser, toggleLike);
//get all blogs
router.get("/blogs", isAuthorizedUser, toggleLike);

// Route for getting all events
router.get("/events", isAuthorizedUser, getAllEvents);

// Route for getting a single event by ID
router.get("/events/:eventId", isAuthorizedUser, getEventById);

// Route for adding an event
router.post("/add-event", isAuthorizedUser, addEvent);

// Route for deleting an event (soft delete)
router.delete("/delete-event/:eventId", isAuthorizedUser, deleteEvent);

module.exports = router;
