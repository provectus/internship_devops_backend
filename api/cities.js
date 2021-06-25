const express = require('express');
const cors = require('cors');
const Cities = require('../models/cities');

const router = express.Router();
const FRONT = process.env.FRONTEND_URL || 'http://localhost:3000';

// use it before all route definitions
router.use(cors({origin: `${FRONT}`}));

var corsOptions = {
  origin: `${FRONT}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// ROUTES

// GET method. Use Cities model and retrieve list of cities as JSON
router.get('/', cors(corsOptions), (req, res) => {
  Cities.retrieveAll((err, cities) => {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

// capture city variable
// if error return as json data to frontend
router.post('/', cors(corsOptions), (req, res) => {
  const city = req.body.city;

  Cities.insert(city, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;