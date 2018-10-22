"use strict";
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const Sequelize = require("sequelize");
const config = require("../config/config.json")[process.env.NODE_ENV];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
