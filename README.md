- [Quick Weather Streaming App](#quick-weather-streaming-app)
  * [General](#general)
  * [Dependencies](#dependencies)
  * [Issues](#issues)
  * [Get it running](#get-it-running)
    + [Clone this repo, duh](#clone-this-repo--duh)
    + [Using npm](#using-npm)
    + [Install the dependencies](#install-the-dependencies)
    + [Get the credentials](#get-the-credentials)
    + [Start up the server](#start-up-the-server)
    + [Additional commands](#additional-commands)
  * [Wishlist](#wishlist)
  * [Live Demo](#live-demo)
  * [License](#license)

# Quick Weather Streaming App
Dave Bitter

![Quick Weather Streaming App](https://raw.githubusercontent.com/DaveBitter/weather_stream/master/screenshots/hero.jpg)

    V 0.1.0

## General
This repository holds the code for a quick little weather streaming app experiment build with [socket.io](https://socket.io/) and [the OpenWeatherMap API](https://openweathermap.org/api). The app provides real-time weather info about a queried city.

### Dependencies
    browserify
    dotenv
    express
    nodemon
    pug
    request
    socket.io
    watchify

## Issues
I highly encourage adding issues to this repo in the case of finding one. I'm always up for improving my code.

## Get it running
### Clone this repo, duh
    git clone https://github.com/DaveBitter/weather_stream
    cd weather_stream

### Using npm
If you do not have npm or node installed on your computer, you can follow the instructions found [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGjoeD6NKBAxWalWoFHTMOD20QFnoECBoQAQ&url=https%3A%2F%2Fdocs.npmjs.com%2Fdownloading-and-installing-node-js-and-npm%2F&usg=AOvVaw3Pw1wQN5mr41ewdKqwO4kC&opi=89978449).

Note: the current version of this project uses older versions of both node and npm that you will have to install or revert back to.
You can find versions by going to the ```package-lock.json``` file.

### Install the dependencies
    npm install
Note: many dependencies have been depreciated or require updating for greater security.

### Get the credentials
In order to make use of the API you will need to get an API-key from [the OpenWeatherMap API page](http://openweathermap.org/appid). 

1. Create an account by going to the link above.
2. Click the user tab (with your name) and navigate to API Keys
3. Use the default key or create a new one.

Note: You do not need to subscribe or pay for an API key. You should only need to create an account.

After you obtain the key, navigate to the ```example.env``` file and paste your key where it says ```{key}```.

### Start up the server
When you run the following command, changes in serverside JS files will be watched and the server will restart automatically, and changes in clientside JS files will be watched and browserified and the server will be restarted.

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
