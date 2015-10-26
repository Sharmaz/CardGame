var express = require('express')
var app = express()
var http = require('http').Server(app)

var port = 8080

// se ejecuta si se llama explicitamente en la definición de una ruta
function middleHandler(req, res, next) {
	console.log('Soy el middleware que anda por ahi')
	next()
}
// se ejectua primero siempre
app.use(function(req, res, next) {
	console.log('Soy el 1er middleware')
	next()
})

app.use(function(req, res, next) {
	console.log('Soy el 2ndo middleware')
	next()
})

app.get('/', middleHandler, function(req, res) {
	//res.sendFile(__dirname + '/index.html')
	console.log('Petición al Home')
})

http.listen(port, function(err) {
	if (err) return console.log(err)

	console.log('Servidor Escuchando en:', 8080)
})
