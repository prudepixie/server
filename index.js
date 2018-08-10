// common js modules
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connect(keys.mongoURI);
// single page application
const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);