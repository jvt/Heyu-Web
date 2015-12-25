var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

GLOBAL.config = require('nconf').argv().env().file({ file: path.join(__dirname, 'config.json') });

var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

module.exports = app;
