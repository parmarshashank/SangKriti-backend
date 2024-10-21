const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', auth, createEvent);
router.get('/all', getEvents);

module.exports = router;
