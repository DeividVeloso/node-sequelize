const User = require("../models/user");
function getUsers(req, res, next) {
  User.findAll().then(user => {
    console.log(user);
  });
}

module.exports = { getUsers };
