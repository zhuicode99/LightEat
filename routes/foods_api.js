const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


router.get('/', (req, res) => {
  userQueries.getFoods() //extract data from queries- getFoods
    .then(foods => {
      res.json({ foods });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
