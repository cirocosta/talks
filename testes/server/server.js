'use strict';
var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http)
  , logger = require('morgan');


app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  console.log('A user connected');

  socket.emit('news', {hello: 'world'});
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


http.listen(3000, function () {
  console.log('Listening on *:3000');
});
