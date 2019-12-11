
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const User = require('../models/User')
require('dotenv').config();
require('dotenv').config({ path: __dirname + '/.env' });
const JWT_SECRET = process.env.JWT_SECRET;
const users = require("./config");

module.exports = (passport) => {
    console.log('test2')
    const opts = {};
    // console.log(process.env.JWT_SECRET);
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = JWT_SECRET;
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        let userToken = jwt_payload.user;
        let userArray = users.filter((user) => {
            return (user.authorization == userToken.authorization && user.fingerPrint == userToken.fingerPrint && user.deviceToken == userToken.deviceToken);
        })

        if (userArray.length <= 0) {
            return done(null, false);
        }
        return done(null, userArray[0]);

    }));

};
