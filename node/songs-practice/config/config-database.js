const { development } = require("./config");

const { Sequelize } = require("sequelize");

const database = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: "mysql",
  }
);

module.exports = { database };
