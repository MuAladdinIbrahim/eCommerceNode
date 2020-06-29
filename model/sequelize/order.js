module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      totalPrice: DataTypes.DECIMAL(10,2),
      status: DataTypes.STRING,
    });
  
    Order.associate = (models) => {
        Order.belongsTo(models.Client,{
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false,
              },
        });
        Order.belongsToMany(models.Product, {through:'OrderProduct'})
    };
    return Order;
  };
  