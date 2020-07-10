const { Model, DataTypes, sequelize } = require("../../db/sequelize");

const Category = sequelize.define("Category", {
  name: DataTypes.STRING,
});

Category.associate = (models) => {
  Category.hasMany(models.Product);
};
sequelize.sync({
  logging: console.log
});

module.exports = Category;
