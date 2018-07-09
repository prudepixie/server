// common js modules
const express = require('express');
require('./services/passport');
// single page application
const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);