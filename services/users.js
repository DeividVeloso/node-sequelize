const User = require("../models/user");
function getUsers(req, res, next) {
  User.findAll().then(user => {
    return res.status(200).json(user);
  });
}

module.exports = { getUsers };
