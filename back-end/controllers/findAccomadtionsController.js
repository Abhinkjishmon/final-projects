const AccommodationsWishlistModel = require("../models/accommodation/accommodationsWishlist.model");
const appointmentModel = require("../models/accommodation/appointment.model");
const Accommodation = require("../models/accommodation/findAccommodation.model");
const { addNotification } = require("./notificationsController");

// Create Accommodation
const createAccommodation = async (req, res) => {
  try {
    const {
      title,
      description,
      address,
      rent,
      utilitiesIncluded,
      roomType,
      furnishing,
      amenities,
      images,
      availabilityStatus,
      userId,
      location,
    } = req.body;
    if (
      !title ||
      !description ||
      !address ||
      !rent ||
      !roomType ||
      !furnishing ||
      !userId ||
      !location
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new accommodation entry
    const newAccommodation = new Accommodation({
      title,
      description,
      address,
      rent,
      utilitiesIncluded,
      roomType,
      furnishing,
      landlordId: userId,
      amenities,
      images,
      availabilityStatus,
      location,
    });

    // Save to database
    const savedAccommodation = await newAccommodation.save();

    // Respond with the created accommodation
    res.status(201).json({
      status: "SUCCESS",
      message: "Accommodation created successfully",
      accommodation: savedAccommodation,
    });
  } catch (error) {
    console.error("Error creating accommodation:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
// Update Accommodation
const updateAccommodation = async (req, res) => {
  try {
    const { id } = req.params; // Get the accommodation ID from the URL
    const updateData = req.body; // Get the update details from the request body

    // Find the accommodation by ID and update it with the new data
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    // Check if accommodation exists
    if (!updatedAccommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }

    // Respond with the updated accommodation
    res.status(200).json({
      message: "Accommodation updated successfully",
      accommodation: updatedAccommodation,
    });
  } catch (error) {
    console.error("Error updating accommodation:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Delete Accommodation
const deleteAccommodation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccommodation = await Accommodation.findByIdAndDelete(id);
    if (!deletedAccommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json({
      message: "Accommodation deleted successfully",
      accommodation: deletedAccommodation,
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error deleting accommodation:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Get One Accommodation
const getAccommodationById = async (req, res) => {
  try {
    const { id } = req.params; // Get the accommodation ID from the URL

    // Find the accommodation by ID
    const accommodation = await Accommodation.findById(id);

    // Check if the accommodation exists
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }

    // Respond with the accommodation details
    res.status(200).json({
      message: "Accommodation fetched successfully",
      accommodation,
    });
  } catch (error) {
    console.error("Error fetching accommodation:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Get All Accommodations
const getAllAccommodations = async (req, res) => {
  try {
    const { userId } = req.body;
    const accommodations = await Accommodation.find();
    const accommodationWishList = await AccommodationsWishlistModel.find({
      userId,
    });
    const accommodationIds = accommodationWishList.flatMap(
      (wishList) => wishList.accommodations
    );
    res.status(200).json({
      message: "Accommodations fetched successfully",
      accommodations,
      accommodationIds,
    });
  } catch (error) {
    console.error("Error fetching accommodations:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Add Accommodation to Wishlist
const addToWishlist = async (req, res) => {
  try {
    const { userId } = req.body;
    const { accommodationId } = req.params;

    // Find the user's wishlist or create a new one
    let wishlist = await AccommodationsWishlistModel.findOne({ userId });

    if (!wishlist) {
      wishlist = new AccommodationsWishlistModel({
        userId,
        accommodations: [],
      });
    }

    // Check if the accommodation is already in the wishlist
    if (wishlist.accommodations.includes(accommodationId)) {
      return res.status(400).json({
        status: "FAILD",
        message: "Accommodation already in wishlist",
      });
    }

    // Add the accommodation to the wishlist
    wishlist.accommodations.push(accommodationId);
    await wishlist.save();

    res.status(200).json({
      status: "SUCCESS",
      message: "Accommodation added to wishlist",
      wishlist,
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Remove Accommodation from Wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const { userId } = req.body;
    const { accommodationId } = req.params;
    const wishlist = await AccommodationsWishlistModel.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    const index = wishlist.accommodations.indexOf(accommodationId);
    if (index === -1) {
      return res.status(400).json({ message: "Accommodation not in wishlist" });
    }

    wishlist.accommodations.splice(index, 1);
    await wishlist.save();

    res.status(200).json({
      status: "SUCCESS",
      message: "Accommodation removed from wishlist",
      wishlist,
    });
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
// get the selected accomodations with suggections
const getAccommodationDetailsWithSuggestions = async (req, res) => {
  try {
    const { accommodationId } = req.params;
    const { userId } = req.body;
    const { radius } = req.query;
    const accommodation = await Accommodation.findById(accommodationId);
    const accommodationWishList = await AccommodationsWishlistModel.find({
      userId,
    });
    const accommodationIds = accommodationWishList.flatMap(
      (wishList) => wishList.accommodations
    );

    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    const RADIUS_IN_METERS = (radius || 5) * 1000; // Default radius is 5 km
    // Get nearby accommodations using $geoNear
    const nearbyAccommodations = await Accommodation.find({
      location: {
        $near: {
          $geometry: accommodation.location,
          $maxDistance: RADIUS_IN_METERS, // 5 km
        },
      },
      _id: { $ne: accommodationId }, // Exclude the current accommodation
    });

    res.status(200).json({
      accommodation,
      suggestions: nearbyAccommodations,
      accommodationIds,
    });
  } catch (error) {
    console.error("Error fetching nearby accommodations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create Appointment
const createAppointment = async (req, res) => {
  try {
    const {
      userId,
      accommodationId,
      date,
      time,
      phoneNumber,
      specialRequests,
    } = req.body;
    if (!userId || !accommodationId || !date || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const existingAppointment = await appointmentModel.findOne({
      userId,
      accommodationId,
      date,
      time,
    });

    if (existingAppointment) {
      return res
        .status(409)
        .json({ message: "An appointment already exists for this time." });
    }

    const appointment = new appointmentModel({
      userId,
      accommodationId,
      date,
      time,
      specialRequests,
      phoneNumber,
      status: "request",
    });
    await appointment.save();
    const noti = await addNotification({
      message: "New Appointment Request",
      description: "You have a new appointment request for the Accomadation",
      receiverId: userId,
      notificationFor: accommodationId,
    });
    console.log(noti);
    res.status(201).json({
      status: "SUCCESS",
      message: "Appointment created successfully.",
      appointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Failed to create appointment.", error });
  }
};

// Update Appointment
const updateAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;
    const validStatuses = ["request", "approved", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: `Invalid status. Allowed statuses are: ${validStatuses.join(
          ", "
        )}.`,
      });
    }
    const updatedAppointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { status, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    res.status(200).json({
      message: "Appointment updated successfully.",
      updatedAppointment,
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ message: "Failed to update appointment.", error });
  }
};

const getAccommodationsByUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const accommodations = await Accommodation.find({ landlordId: userId });

    if (accommodations.length === 0) {
      return res
        .status(404)
        .json({ message: "No accommodations found for this user." });
    }

    return res.status(200).json({
      message: "Accommodations retrieved successfully.",
      accommodations,
    });
  } catch (error) {
    console.error("Error fetching accommodations:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

const getWishlistedAccommodations = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const wishlist = await AccommodationsWishlistModel.findOne({
      userId,
    }).populate({
      path: "accommodations",
      select: "title address rent images roomType _id", // Fields to include
    });

    if (!wishlist || wishlist.accommodations.length === 0) {
      return res
        .status(404)
        .json({ message: "No wishlisted accommodations found for this user." });
    }

    return res.status(200).json({
      message: "Wishlisted accommodations retrieved successfully.",
      accommodations: wishlist.accommodations,
    });
  } catch (error) {
    console.error("Error fetching wishlisted accommodations:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

const getAppointmentsForUserAccommodations = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const accommodations = await Accommodation.find({
      landlordId: userId,
    }).select("_id");

    if (!accommodations || accommodations.length === 0) {
      return res
        .status(404)
        .json({ message: "No accommodations found for this user." });
    }
    const accommodationIds = accommodations.map(
      (accommodation) => accommodation._id
    );

    const appointments = await appointmentModel
      .find({
        accommodationId: { $in: accommodationIds },
      })
      .populate({
        path: "userId",
        select: "name email",
      })
      .populate({
        path: "accommodationId",
        select: "title address",
      });
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({
        message:
          "No appointments found for the accommodations created by this user.",
      });
    }

    return res.status(200).json({
      message: "Appointments retrieved successfully.",
      appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

const searchAccommodations = async (req, res) => {
  try {
    const { query } = req.query; 
    if (!query || query.trim() === "") {
      return res.status(400).json({
        message: "Search query is required.",
      });
    }
    const searchRegex = new RegExp(query, "i");

    const accommodations = await Accommodation.find({
      $or: [
        { "address.street": searchRegex },
        { "address.city": searchRegex },
        { "address.state": searchRegex },
        { "address.zipCode": searchRegex },
        { "address.country": searchRegex },
        { title: searchRegex },
      ],
    });

    if (accommodations.length === 0) {
      return res.status(404).json({
        message: "No accommodations found matching the given search query.",
      });
    }

    res.status(200).json(accommodations);
  } catch (error) {
    console.error("Error searching accommodations:", error);
    res.status(500).json({
      message: "An error occurred while searching for accommodations.",
      error: error.message,
    });
  }
};


module.exports = {
  createAccommodation,
  updateAccommodation,
  deleteAccommodation,
  getAccommodationById,
  getAllAccommodations,
  removeFromWishlist,
  addToWishlist,
  getAccommodationDetailsWithSuggestions,
  createAppointment,
  updateAppointment,
  getAccommodationsByUser,
  getWishlistedAccommodations,
  getAppointmentsForUserAccommodations,
  searchAccommodations
};
