const appname = 'eCommerce';

module.exports = {
  applicationName: appname,
  mongodb: {
    dsn: 'mongodb://127.0.0.1:27017/eCommerce',
  },
  mariadb: {
    options: {
      host: 'localhost',
      port: 3306,
      database: 'eCommerceNode',
      dialect: 'mariadb',
      dialectOptions: {
        timezone: 'Etc/GMT+2',
      },
      username: 'developer',
      password: 'developer',
    },
  },
};