const User = require("../models/user");
function getUsers(req, res, next) {
  User.findAll().then(users => {
    console.log(users);
  });
}

module.exports = { getUsers };
