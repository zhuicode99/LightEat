const { response } = require("express");
const express = require("express");
const router = express.Router();
const accountSid = "ACdb009032d29869242cb11b305b227cb3";
const authToken = "8735f9b5f6c3a5d52a77552f78154a5c";
const client = require("twilio")(accountSid, authToken);
const { addOrderToTable } = require("../db/queries/ordered_foods");

//ORDERS CRUD API
//CREATE - POST
router.post("/", (req, res) => {
  const keys = Object.keys(req.body);
  if (keys.length < 1) {
    return res.redirect("/foods");
    ç;
  }
  addOrderToTable(req.body, req.session.user_id)
    .then(() => {
      client.messages
        .create({
          body: `A customer has placed an order!`,
          from: "+17246233278",
          to: "+16479947763",
        })
        .then(console.log("Message Sent To Owner!"))
        .then(() => {
          res.redirect("/order_status");
        });
      res.redirect("/foods");
    })
    .catch((error) => {
      console.log(error);
    });
});

//READ ALL - GET
router.get("/", (req, res) => {
  res.render("checkout");
});

//READ ONE - GET
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ message: "Hello from orders api" });
});

//UPDATE - PUT (POST)
router.post("/:id/edit", (req, res) => {
  const { id } = req.params;
  res.send({ message: "Hello from orders api" });
});

//DELETE - DELETE (POST)
router.post("/:id/delete", (req, res) => {
  const { id } = req.params;
  res.send({ message: "Hello from orders api" });
});

module.exports = router;
