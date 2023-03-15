const express = require("express");
const { getOrders } = require("../db/queries/users");
const { generateString, convertObj } = require("../helper/helpers");
const router = express.Router();
const accountSid = "ACdb009032d29869242cb11b305b227cb3";
const authToken = "8735f9b5f6c3a5d52a77552f78154a5c";
const client = require("twilio")(accountSid, authToken);


/* router.get('/', (req, res) => {
  getOrders().then((orders)=>{
    const allOrders = convertObj(orders);
    res.render('owner',{allOrders:allOrders});
  }).catch((error)=>{
    console.log(error);
  });
}); */


//ORDERS CRUD API
//CREATE - POST
router.post("/", (req, res) => {
  const { order_time } = req.body;
  client.messages
    .create({
      body: `Your order will be ready in ${order_time} minutes`,
      from: "+17246233278",
      to: "+16479947763",
    })
    .then(console.log("Message Sent To Customer!"))
    .then(() => {
      res.redirect('/owner');
    });
});


module.exports = router;
