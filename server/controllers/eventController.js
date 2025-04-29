const Event = require("../models/Event");

exports.addEvent = async (req, res) => {
  const { title, description, date, userId } = req.body;

  try {
    const event = new Event({ title, description, date, user: userId });
    await event.save();
    res.status(201).json({ message: "Event added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getUserEvents = async (req, res) => {
  const { userId } = req.params;

  try {
    const events = await Event.find({ user: userId });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
