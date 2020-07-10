const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../config/index");

const sequelize = new Sequelize(config.mariadb.options);
sequelize
  .authenticate()
  .then(() => {
    console.log("mariadb is connected");
  })
  .catch((err) => {
    console.log("unable to connect to mariadb");
    console.log(err);
    process.exit(1);
  });
config.mariadb.client = sequelize;

sequelize.sync({
  logging: console.log,
  alter: true,
});

module.exports = { Model, DataTypes, sequelize };
