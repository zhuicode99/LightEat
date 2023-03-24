const express = require("express");
const router = express.Router();
const accountSid = "id";
const authToken = "token";
const client = require('twilio')(accountSid, authToken);

router.post("/", (req, res) => {
  client.messages
    .create({
      body: "Your Order is Ready!",
      from: "+14752646138",
      to: "+16479947763",
    })
    .then(function (message) {
      console.log("Order Ready Message Sent! Message SID: " + message.sid);
      res.status(200).send("Message sent successfully!");
    })
    .catch(function (error) {
      console.error("Error sending Twilio message: " + error.message);
      res.status(500).send("Error sending message!");
    });
});


module.exports = router;
