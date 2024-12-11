const Notification = require("../models/notifications/notification.model");

// Function to add a new notification
const addNotification = async ({
  message,
  description,
  receiverId,
  notificationFor,
}) => {
  try {
    // Validate input
    if (!message || !description || !receiverId) {
      throw new Error(
        "Missing required fields: message, description, or receiverId"
      );
    }

    // Create the notification
    const notification = new Notification({
      message,
      description,
      receiverId,
      notificationFor,
      date: new Date(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    // Save the notification to the database
    await notification.save();
    return notification;
  } catch (error) {
    console.error("Error creating notification:", error.message);
    throw error; // Rethrow the error to handle it elsewhere
  }
};

// Update notifications as viewed for a specific user
const markNotificationsAsViewed = async (req, res) => {
  const { userId } = req.body;

  try {
    // Ensure userId is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Update all notifications for the user to mark them as viewed
    const updatedNotifications = await Notification.updateMany(
      { receiverId: userId, viewed: false }, // Filter: Unviewed notifications for the user
      { $set: { viewed: true } } // Update: Mark as viewed
    );

    // Respond with success
    res.status(200).json({
      message: "Notifications marked as viewed successfully.",
      updatedCount: updatedNotifications.nModified, // Number of notifications updated
    });
  } catch (error) {
    console.error("Error marking notifications as viewed:", error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

// Get all notifications with accommodation details for a specific user
const getAllNotifications = async (req, res) => {
  const { userId } = req.body;
  try {
    // Ensure userId is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Fetch notifications for the user and populate accommodation details
    const notifications = await Notification.find({ receiverId: userId }).sort({
      date: -1,
    }); // Sort notifications by date (newest first)

    // Respond with the notifications
    res.status(200).json({
      message: "Notifications retrieved successfully.",
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

module.exports = {
  addNotification,
  markNotificationsAsViewed,
  getAllNotifications,
};
