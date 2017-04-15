(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var socket = io();

var elements = {
	body: document.body,
	temp: document.getElementById('temp'),
	text: document.getElementById('text'),
	input: document.getElementById('query')
}

elements.input.addEventListener("keyup", function(e) {
	e.preventDefault()
	if (e.keyCode == 13) {
		socket.emit('query', e.target.value)
		e.target.blur()
	}
})

socket.on('connection', function(city) {
	elements.input.value = city
})

socket.on('updated data', function(data) {
	elements.body.style.background = data.weather.color
	elements.temp.innerHTML = data.main.temp + '°'
	elements.text.innerHTML = data.weather.description
})

socket.on('not found', function(query) {
	console.log("404")
	elements.temp.innerHTML = ''
	elements.text.innerHTML = query + '?'
})

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
}
},{}]},{},[1]);
