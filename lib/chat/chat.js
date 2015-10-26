var template = require('./template.jade')

var $ = require('jquery')

function Chat(selector) {
	$(selector).html(template())

}

module.exports = Chat