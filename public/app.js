'use strict';

var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = '513b198c262e14c0fbdbd548fc5d0afc';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (serie) {
	var serieImage = 'url(' + serie.thumbnail.path + '.' + serie.thumbnail.extension + ')';
	$('.Layout').css('background-image', serieImage);
	var characters = serie.characters.items;
	var promises = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var promise = api.getResourceURI(character.resourceURI);
			promises.push(promise);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return Promise.all(promises);
}).then(function (characters) {
	return characters.filter(function (character) {
		return !!character.thumbnail && !!character.description;
	});
})
/*.then ((characters) => {
	return characters.filter((character) => return !!character.thumbnail)
})
*/
.then(function (characters) {

	for (var i = 0; i < 5; i++) {
		var character = characters[i];
		var template = renderCharacter(character);
		var $card = $(template);
		$('.Battle-player').append($card);
	}
	//por cada carta
	// $('.Card').each((i, item) => {
	// 	let character = characters[i]
	// 	let $this = $(item)
	// 	let $image = $this.find('.Card-image')
	// 	let $description = $this.find('.Card-description')
	// 	let $name = $this.find('.Card-name')

	// 	$image.attr('src', `${character.thumbnail.path}.${character.thumbnail.extension}`)
	// 	$name.text(character.name)
	// 	$description.text(character.description)

	// })
	//cambiar las imagenes .Card-image
	//cambiar descripcion .Card-description
	//cambiar nombre .Card-name
})['catch'](function (err) {

	console.error(err);
});

function renderCharacter(character) {

	return '<div class="Card"<h2 class="Card-name">' + character.name + '</h2><img src="' + character.thumbnail.path + '.' + character.thumbnail.extension + '" alt="' + character.name + '" class="Card-image"/>\n        <div class="Card-description">' + character.description + '</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      </div>';

	/*	
 Asi se hacia antes de ecmascript 6
 var template = '<div class="Card">\n'+ '<h2 class="Card-name">'+ character.name + '</h2>'+'<img src="'+ character.thumbnail.path + '.' + character.thumbnail.extension
 	+ '" alt="' + character.name + '" class="Card-image"/>\n'+ '<div class="Card-description">' + character.description + '</div>\n'
     + '<div class="Card-attack">500 puntos de ataque</div>\n'
 
     return template
  */
}