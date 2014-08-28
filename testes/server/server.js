'use strict';
var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http)
  , logger = require('morgan');


app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  socket.on('user-agent', function (data) {
    console.log(data);
  });

  socket.on('test-data', function (data) {
    console.log(data);
  });
});

http.listen(3000, function () {
  console.log('Listening on *:3000');
});
