var express = require("express");
var router = express.Router();
const { getUsers } = require("../services/users");

router
  .route("/")
  .get(getUsers)
  .post(function(req, res) {
    res.send("Add a book");
  })
  .put(function(req, res) {
    res.send("Update the book");
  });

module.exports = router;
