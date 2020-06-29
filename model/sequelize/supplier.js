const { Model, DataTypes, sequelize } = require("../../db/sequelize");
const Supplier = sequelize.define("Supplier", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

Supplier.associate = (models) => {
  Supplier.hasMany(models.Product);
};
module.exports = Supplier;
