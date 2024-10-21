const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, description, date, venue } = req.body;
  try {
    const event = new Event({
      title,
      description,
      date,
      venue,
      host: req.user
    });
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('host', 'username');
    res.json(events);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
