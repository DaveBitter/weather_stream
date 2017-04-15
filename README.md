# Quick Weather Streaming App
Dave Bitter

![Quick Weather Streaming App](https://raw.githubusercontent.com/DaveBitter/weather_stream/master/screenshots/hero.jpg)

    V 0.1.0

## General
This repository holds the code for a quick little weather streaming app experiment build with [socket.io](https://socket.io/) and [the OpenWeatherMap API](https://openweathermap.org/api). The app provides real-time weather info about a queried city.

## Issues
I highly encourage adding issues to this repo in the case of finding one. I'm always up for improving my code.

## Get it running
### Clone this repo, duh
    git clone https://github.com/DaveBitter/weather_stream
    cd weather_stream

### Install the dependencies
    npm install

### Get the credentials
In order to make use of the API you will need to get a API-ket from [the OpenWeatherMap API page](http://openweathermap.org/appid). After you obtained the key, copy the contents of ```example.env``` to a new file called ```.env``` and paste your key.

### Start up the server
When you run this command, changes in serverside JS files will be watched and the server will restart automatically, changes in clientside JS files will be watched and browserified and the server will be restarted.

    npm start

### Additional commands
Browserify clientside JS

    npm run build

Watchify clientside JS

    npm run watch

Clean clientside build.js file

    npm run clean

## Wishlist
* Better error handling unfound place
* SVG icons for weather info
* Remember last viewed place

## Live Demo
You can view the live demo [here](https://quick-weather-app.herokuapp.com/) 

## License
[MIT](LICENSE.md) © [Dave Bitter](https://github.com/DaveBitter/)
