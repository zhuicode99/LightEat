const express = require("express");
const router = express.Router();
const { getUserByPhone } = require("../db/queries/customer"); //call backend function
const { addCustomer } = require("../db/queries/users");

router.get("/", (req, res) => {
  if (req.session.user_id) {
    return res.redirect('/foods');
  }
  res.render("signup");
});

router.post("/", (req, res) => {
  /*   console.log('phone', phone) */
  const { phone, email } = req.body;
  // console.log(req.body);
  req.session.user_id = email;
  addCustomer(req.body);

  getUserByPhone(phone)
    .then((data) => {
      if (data) {
        res.redirect("/signin");
        /*  return res.sendStatus(200); */
      }
      res.redirect("/foods");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;
