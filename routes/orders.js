const express = require('express');
const router  = express.Router();

const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

router.get('/', (req, res) => {
  res.json(JSON.parse(localStorage.getItem("user_cart")))
  // console.log("HERE", JSON.parse(localStorage.getItem("user_cart")));
});

module.exports = router;
