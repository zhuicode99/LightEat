const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


router.get("/", (req, res) => {
  userQueries.getOrders() //extract data from queries- getOrders
    .then(data => {
      // Order details
      let orderArr = [];
      const order = data.rows
      for (let food of order) {
        orderArr.push({
          totalQuantity: food.quantity,
          totalCost: food.totalOrderCost,
          foodName: food.foodname,
        });
      }
      return orderArr;
    })
  });


  module.exports = router;
