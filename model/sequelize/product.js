const { Model, DataTypes, sequelize } = require("../../db/sequelize");
const Product = sequelize.define("Product", {
  name: {
   type: DataTypes.STRING,
   validate: {
     notEmpty:true,
     isAlphanumeric:true,
     min:6,
     max:20,
   }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      notEmpty:true,
      isNumeric:true,
    }
   },
   description: {
    type: DataTypes.TEXT,
    validate: {
      min:15,
      max:100,
    }
   },
  inStock: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
});

// Product.associate = (models) => {
//   Product.belongsTo(models.Supplier, {
//     onDelete: "CASCADE",
//     foreignKey: {
//       allowNull: false,
//     },
//   });
//   Product.belongsTo(models.Category, {
//     onDelete: "SET NULL",
//     foreignKey: {
//       allowNull: false,
//     },
//   });
//   Product.belongsToMany(models.Order, { through: "OrderProduct" });
// };

module.exports = Product;
