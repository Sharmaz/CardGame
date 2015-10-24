var $ = require('jquery')
var page = require('page')


//page('ruta destino', que quiero que pase )

var homeTemplate = require('./layout/template.jade')

var signinTemplate = `<label>Ingresa tu nombre</label>
  <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="nombre" class="Signin-name-input"/>
  <button tabindex="2" class="Signin-button">Ingresar</button>`

page('/', restrict, home)
page('/signin', signin)
page()

function restrict(ctx, next) {
	console.log('Restricting')
	console.log('Context :'+ JSON.stringify(ctx))
	console.log('window.user :'+ window.user)
	if (!window.user) return page('/signin')

	next()
}

function home() {
	console.log('estoy navegando al home')

	$('.app-container').html(homeTemplate)
	 //window.location = '/signin'
	}


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

 page({hashbang: true})