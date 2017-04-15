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