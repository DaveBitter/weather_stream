require('dotenv').config();
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 1337
const path = require('path')
const request = require('request')


const indexRouter = require('./routes/index.js')

console.log(process.env.APIKEY)

io.on('connection', function(socket) {
  setInterval(function() {
    request('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=' + process.env.APIKEY, function(error, response, body) {
      console.log(body)
      socket.emit('updated data', JSON.parse(body));
    });
  }, 10000);
});

app
  .set('view engine', 'pug')
  .use(express.static('public'))
  .use('/', indexRouter)

http.listen(port, function() {
  console.log('listening on http://localhost:' + port);
});