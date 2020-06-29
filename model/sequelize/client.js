module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address:DataTypes.STRING,
    });
    Client.associate = (models) => {
        Client.hasMany(models.Order)
      };
    return Client;  
}