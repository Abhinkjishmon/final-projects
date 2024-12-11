const express = require("express");
const {
  createAccommodation,
  updateAccommodation,
  deleteAccommodation,
  getAllAccommodations,
  getAccommodationById,
  removeFromWishlist,
  addToWishlist,
  getAccommodationDetailsWithSuggestions,
  createAppointment,
  updateAppointment,
} = require("../controllers/findAccomadtionsController");
const { isAuthorizedUser } = require("../middleware/verifyjwt");

const router = express.Router();

// Route to create accommodation
router.post("/new-accommodations", isAuthorizedUser, createAccommodation);
router.post(
  "/update-accommodations/:id",
  isAuthorizedUser,
  updateAccommodation
);
router.delete(
  "/delete-accommodations/:id",
  isAuthorizedUser,
  deleteAccommodation
);

// Route to get all accommodations
router.get("/get-all", isAuthorizedUser, getAllAccommodations);

// Route to get a single accommodation by ID
router.get("/get-one/:id", isAuthorizedUser, getAccommodationById);

// Route to add accommodation to wishlist
router.post("/wishlist/add", isAuthorizedUser, addToWishlist);

// Route to remove accommodation from wishlist
router.post("/wishlist/remove", isAuthorizedUser, removeFromWishlist);

router.get(
  "/get-accommodations/:accommodationId/details",
  isAuthorizedUser,
  getAccommodationDetailsWithSuggestions
);

// Create an appointment
router.post("/appointments", isAuthorizedUser, createAppointment);

// Update an appointment
router.put("/appointments/:appointmentId", isAuthorizedUser, updateAppointment);

module.exports = router;
