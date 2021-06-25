const express = require('express');
const Weather = require('../models/weather');
const cors = require('cors');

const router = express.Router();
const FRONT = process.env.FRONTEND_URL || 'http://localhost:3000';

// use it before all route definitions
router.use(cors({origin: `${FRONT}`}));

var corsOptions = {
  origin: `${FRONT}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// get weather for a chosen city
router.get('/:city', cors(corsOptions), (req, res) => {
  const city = req.params.city;

  Weather.retrieveByCity(city, (err, weather) => {
    if (err) 
      return res.json(err);
    return res.json(weather);
  });
});

module.exports = router;