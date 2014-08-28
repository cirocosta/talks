'use strict';
var express = require('express')
  , logger = require('morgan');

var app = express();

app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('Hello WOrld')
});
app.listen(3000);
