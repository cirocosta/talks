'use strict';
var express = require('express')
  , logger = require('morgan');

var app = express();

app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));
app.listen(3000);
