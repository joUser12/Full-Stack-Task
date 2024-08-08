const express = require('express');
const router = express.Router();
const { addLocation, getLocations } = require('../controller/location');

router.post('/add', addLocation);
router.get('/locations', getLocations)

module.exports = router;