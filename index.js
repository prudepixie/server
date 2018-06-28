// common js modules
const express = require('express');
// single page application
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);