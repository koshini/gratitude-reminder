const express = require('express');
const helpers = require('./helpers');
const routes = require('./routes/index');
const app = express();
const port = 3000;

app.use('/', routes);

module.exports = app;
