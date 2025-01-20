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
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const updatedNotifications = await Notification.updateMany(
      { receiverId: userId, viewed: false },
      { $set: { viewed: true } }
    );
    res.status(200).json({
      message: "Notifications marked as viewed successfully.",
      updatedCount: updatedNotifications.nModified,
    });
  } catch (error) {
    console.error("Error marking notifications as viewed:", error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};
const getAllNotifications = async (req, res) => {
  const { userId } = req.body;
  try {

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }
    const notifications = await Notification.find({ receiverId: userId }).sort({
      date: -1,
    }); 

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
