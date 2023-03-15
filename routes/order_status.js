const express = require("express");
const router = express.Router();
const accountSid = "ACdb009032d29869242cb11b305b227cb3";
const authToken = "8735f9b5f6c3a5d52a77552f78154a5c";
const client = require("twilio")(accountSid, authToken);
//how to automatically trigger SMS when timer is 0?
router.post("/", (req, res) => {
  client.messages
    .create({
      body: "Your food is ready",
      from: "+17246233278",
      to: "+16479947763",
    })
    .then(console.log("Message Sent!"));
});

router.get("/", (req, res) => {
  res.render("order_status");
});

module.exports = router;
