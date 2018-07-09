// common js modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

// single page application
const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'auth/google/callback'
    }, (accessToken) => {
        console.log('token', accessToken)        
    })
);

app.get('/', (req, res) => {
    res.send({ hello: 'wendy'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);