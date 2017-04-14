var socket = io();

var elements = {
	city: document.getElementById('city'),
	temp: document.getElementById('temp'),
	text: document.getElementById('text')
}

socket.on('updated data', function(data) {
	console.log(data)
	elements.city.innerHTML = data.name
	elements.temp.innerHTML = data.main.temp
	elements.text.innerHTML = data.weather[0].description
})