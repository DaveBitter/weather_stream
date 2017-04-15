require('dotenv').config();
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 1337
const path = require('path')
const request = require('request')
const cities = require('./resources/cities.json')


const indexRouter = require('./routes/index.js')

io.on('connection', function(socket) {
  let city = randomOfArray(cities)

  socket.emit("connection", city)

  const doQuery = () => {
    request('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric&appid=' + process.env.APIKEY, function(error, response, body) {
      if (JSON.parse(body).list.length > 0) {
        socket.emit('updated data', dataFormatter(JSON.parse(body)))
      } else {
        socket.emit('not found', city)
      }
    });
  }

  // page load query
  doQuery()

  // refresh data query
  setInterval(function() {
    doQuery()
  }, 5000);

  // query from user
  socket.on('query', function(query) {
    city = query
    doQuery()
  })

});

const dataFormatter = (data) => {
  data = data.list[0]
  data.main.temp = data.main.temp.toFixed()
  data.weather = data.weather[0]
  data.weather.color = degreeToColor(data.main.temp)

  return data
}

const degreeToColor = (deg) => {
  let color = ""

  if (deg < 0) {
    color = '#9fceff';
  }
  if (deg < 10 && deg > 0) {
    color = '#ffd038'
  }
  if (deg < 20 && deg >= 10) {
    color = '#ffc300'
  }
  if (deg > 20) {
    color = '#ff381e'
  }

  return color
}

const randomOfArray = (arr) => {
  return arr[Math.floor(Math.random() * (arr.length + 1))]
}

app
  .set('view engine', 'pug')
  .use(express.static('public'))
  .use('/', indexRouter)

http.listen(port, function() {
  console.log('listening on http://localhost:' + port);
});