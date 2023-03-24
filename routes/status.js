const express = require("express");
const router = express.Router();
const accountSid = "id";
const authToken = "token";
const client = require("twilio")(accountSid, authToken);
//how to automatically trigger SMS when timer is 0?
router.post("/", (req, res) => {
  res.render("status",{client:req.body.name});
  client.messages
    .create({
      body: "We have received your order!",
      from: "+14752646138",
      to: "+16479947763",
    })
    .then(console.log("Message Sent!"));





});

/* router.get("/", (req, res) => {
  res.render("status");
});
 */
module.exports = router;

