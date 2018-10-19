const sequelize = require("./index");
const Sequelize = require("sequelize");

const User = sequelize.define("users_doido", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Table created
  return User.create({
    firstName: "John",
    lastName: "Hancock"
  });
});

module.exports = User;
