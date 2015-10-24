var $ = require('jquery')
var page = require('page')

var homeTemplate = require('./template.jade')

page('/', restrict, home)

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