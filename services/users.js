const User = require("../model/users");
function getUsers(req, res, next) {
  User.findAll().then(users => {
    console.log(users);
  });
}

module.exports = { getUsers };
