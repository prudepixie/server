// common js modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// single page application
const app = express();

app.use(
    cookieSession({
        // last for 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);