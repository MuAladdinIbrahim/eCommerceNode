module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',{
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL(10,2),
        description: DataTypes.TEXT,
        inStock: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Supplier, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
        Product.belongsTo(models.Category, {
          onDelete: 'SET NULL',
          foreignKey: {
            allowNull: false,
          },
        });
        Product.belongsToMany(models.Order, {through:'OrderProduct'})
      };
    return Product;
}