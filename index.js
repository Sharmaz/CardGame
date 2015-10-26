var express = require('express')
var app = express()
var http = require('http').Server(app)

var port = 8080

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
	console.log('Petición al Home')
})

app.get('*', function (req, res) {
	//retornar 404
})

http.listen(port, function(err) {
	if (err) return console.log(err)

	console.log('Servidor Escuchando en:', 8080)
})
