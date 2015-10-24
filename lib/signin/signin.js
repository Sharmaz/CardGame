var $ = require('jquery')
var page = require('page')

var signinTemplate = require('./template.jade')

page('/signin', signin)

function signin(ctx, next) {
	console.log('estoy navegando a signin')

	$('.app-container').html(signinTemplate)

	$('.Signin-button').on('click', function(event) {
		event.preventDefault()
		//obteniendo el contenido del input
		var username = $('.Signin-name-input')[0].value

		if (!username) return alert('Ingrese un nombre valido')

		window.user = { username: username};
		page('/')
	})
}