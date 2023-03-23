const express = require("express");
const router = express.Router();
const { getfoods} = require("../db/queries/foods");
const {generateString, getSubTotal, addItemToCart, deleteItem, reduceCount} = require('../helper/helpers')

router.get("/", (req, res) => {
  //if '/car', url will be /foods/car.
  // res.render('select_food');//this foods is foods.ejs from views folder

  getfoods()
    .then((foods) => {

      return res.render("foods", { foodArray: foods, user: req.session.user_id });
    })
    .catch((error) => {
      return error;
    });
});
router.post("/:id", (req, res) => {
  addItemToCart(req.params.id);
});

module.exports = router;
