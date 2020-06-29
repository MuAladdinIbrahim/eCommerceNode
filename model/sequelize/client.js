const { Model, DataTypes, sequelize } = require("../../db/sequelize");

const Client = sequelize.define("Client", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  address: DataTypes.STRING,
  facebookId: DataTypes.STRING(24),
});
Client.associate = (models) => {
  Client.hasMany(models.Order);
};

module.exports = Client;
