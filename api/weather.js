const express = require('express');
const Weather = require('../models/weather');
const cors = require('cors');

const router = express.Router();

var corsOptions = {
  origin: 'http://localhost:3000',
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