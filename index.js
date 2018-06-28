// common js modules
const express = require('express');
// single page application
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

app.listen(5000);