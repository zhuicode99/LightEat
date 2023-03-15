const express = require("express");
const router = express.Router();
/* const accountSid = "ACdb009032d29869242cb11b305b227cb3";
const authToken = "87f2a3088dd1ca8817396f3b29fdc161";
const client = require("twilio")(accountSid, authToken); */

router.get('/', (req, res) => {
  const user =req.session.user_id;
  res.render('payments', {user:user});
});

/* router.post("/", (req, res) => {
  client.messages
    .create({
      body: `A customer has placed an order!`,
      from: "+17246233278",
      to: "+16479947763",
    })
    .then(console.log("Message Sent To Owner!"))
    .then(() => {
      res.redirect('/order_status');
    });
}); */


module.exports = router;
