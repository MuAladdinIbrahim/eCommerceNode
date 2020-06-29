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
  facebook: {
    clientID: '193617505227387',
    clientSecret: 'de6bec858befdd9146a5ae5d6b2576ec',
    callbackURL: "http://localhost:3000/auth/facebook/callback"

  }
};