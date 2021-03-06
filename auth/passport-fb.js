var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var Client = require('../model/sequelize/client');
var config = require('../config/index')

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
     Client.findOrCreate({where: {facebookId: profile.id} })
      .then(function() {
          return done(null, Client);
      })
      .catch( (err) => console.log(err) ) 
    } 
));