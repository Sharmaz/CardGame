var http = require('http')
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write('<!DOCTYPE "html">')
	res.write('<html>')
	res.write('<head>')
	res.write('<title>Hello World!</title>')
	res.write('<body>')
	res.write('Hello World!')
	res.write('</body>')
	res.write('</html>')
})

var port = 8080

server.listen(port, function() {
	console.log('Escuchando en el puerto:', port)
})