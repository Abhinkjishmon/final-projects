const convertToBase64 = require("../helper/fileToBase64");
const Event = require("../models/culturalfit/eventSchema.model");
const { uploadFiletoCloudinary } = require("../utils/cloudinayFileUpload");

const addEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      venue,
      userId,
      capacity,
      duration,
      addtionalInfo,
    } = req.body;
    const file = req.file;
    console.log(file);
    if (!file) {
      return res.status(401).json({
        message: "Event poster required..!",
        status: "FAILED",
      });
    }

    // Convert the file to Base64
    const poster = convertToBase64(file.buffer, file.mimetype);
    if (!poster) {
      return res.status(401).json({
        message: "Something went wrong...! try again after some time",
        status: "FAILED",
      });
    }

    // Upload the file to Cloudinary
    const cloudPlayLoad = await uploadFiletoCloudinary(poster);
    if (cloudPlayLoad) {
      const newEvent = new Event({
        title,
        description,
        date,
        poster: cloudPlayLoad.secure_url,
        venue,
        createdBy: userId,
        capacity,
        duration,
        addtionalInfo,
      });

      const event = await newEvent.save();
      return res.status(201).json({
        message: "New event created",
        event,
        status: "SUCCESS",
      });
    } else {
      return res.status(500).json({
        message: "Failed to upload image to Cloudinary",
        status: "FAILED",
      });
    }
  } catch (err) {
    console.error("Error creating event:", err);
    return res
      .status(500)
      .json({ error: "Error creating event", details: err });
  }
};

const getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);

    if (!event || event.status === "removed") {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(event);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error fetching event", details: err });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: { $ne: "removed" } })
      .sort({ date: -1 })
      .populate({ path: "createdBy", select: "-password" });

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }

    return res.status(200).json(events);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error fetching events", details: err });
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findByIdAndDelete(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res
      .status(200)
      .json({ message: "Event removed successfully", event });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error deleting event", details: err });
  }
};

module.exports = { addEvent, deleteEvent, getEventById, getAllEvents };
