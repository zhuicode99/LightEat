const express = require("express");
const router = express.Router();
const { getUserByEmail } = require("../db/queries/customer");




router.get("/", (req, res) => {
  console.log('signinget')
  res.render("signin");
});

router.get("/signout", (req, res) => {
  req.session.user_id = null;
  return res.redirect('/foods')
});

router.post("/", (req, res) => {
  const { email } = req.body;
  getUserByEmail(email)
    .then((data) => {
      if (data === null) {
        return res.redirect("/signup");
      }
      // res.json({ data });
      req.session.user_id = email;
      res.redirect('/foods');
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
