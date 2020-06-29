module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,        
    });

    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product)
      };
    return Supplier; 
}