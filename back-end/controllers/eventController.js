const Event = require("../models/culturalfit/eventSchema.model");

// Controller to add a new event
const addEvent = async (req, res) => {
  try {
    const { title, description, date, createdBy, poster } = req.body;
    // Save the event with the uploaded poster (poster path or URL)
    const newEvent = new Event({
      title,
      description,
      date,
      createdBy,
      poster,
    });

    const event = await newEvent.save();
    return res.status(201).json({
      message: "new event created",
      event,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error creating event", details: err });
  }
};

const getEventById = async (req, res) => {
  const { eventId } = req.params; // Extract event ID from request parameters

  try {
    const event = await Event.findById(eventId);

    if (!event || event.status === "removed") {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(event);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error fetching event", details: err });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: { $ne: "removed" } }) // Exclude removed events
      .sort({ date: -1 }); // Optional: Sort events by date in descending order

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

// Controller to delete an event (soft delete by changing status to 'removed')
const deleteEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    // Find the event by ID and mark its status as 'removed'
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
