const express = require("express");
const { checkout } = require("./orders");
const router = express.Router();

router.get('/', (req,res) => {
  res.render(checkout)
})
