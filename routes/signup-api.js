const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


router.get('/', (req, res) => {
  /* console.log(req.query.email, 'email'); *///test
  userQueries.addCustomer(req.query) //extract data from queries- addCustomer
    .then(customer => {
      res.json({ customer }); //return json data
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
