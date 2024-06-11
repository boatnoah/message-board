const express = require("express");
const router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function(req, res, next) {
  res.render("index", { title: "Mini Message", messages: messages });
});

router.get("/new", function(req, res) {
  res.render("form");
});

router.post("/new", function(req, res) {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
