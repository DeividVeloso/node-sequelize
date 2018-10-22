const db = require("./index");
const User = db.sequelize.define(
  "users",
  {
    firstName: db.Sequelize.STRING,
    lastName: db.Sequelize.STRING,
    email: db.Sequelize.STRING
  },
  {}
);
module.exports = User;
