const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  venue: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }]
});

module.exports = mongoose.model('Event', EventSchema);
