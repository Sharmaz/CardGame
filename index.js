var express = require('express')
var app = express()
var http = require('http').Server(app)

var port = 8080

app.get('/', function(req, res) {
	res.send('<h1>Hello Wold!</h1>')
})

http.listen(port, function(err) {
	if (err) return console.log(err)

	console.log('Servidor Escuchando en:', 8080)
})
