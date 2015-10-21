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
		return !!character.thumbnail; //&& !!character.description
	});
})
/*.then ((characters) => {
	return characters.filter((character) => return !!character.thumbnail)
})
*/
.then(function (characters) {

	characters = shuffle(characters);

	for (var i = 0; i < 5; i++) {
		var character = characters[i];
		drawCharacter(character);
		/*		let index = Math.floor(Math.random() * characters.length -1)
  		let character = characters[i]
  		let template = renderCharacter(character)
  		let $card = $(template)
  		
  		$card.on('click', function (event) {
  			let $this = $(this)
  			let attack = $this.find('.Card-attack')
  
  			console.log(attack.data('attack'))
  		})*/

		//$('.Battle-player').append($card)

		/*		$card.on('click', function (event) {
  			$card.trigger('capiclick', template)
  		})
  		$card.on('capiclick', function (){
  			console.log('hubo capiclick')
  		})*/
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

$('.CharacterForm').on('submit', function (event) {
	event.preventDefault();

	var name = $(this).find('.CharacterForm-name').val();
	api.searchCharacter(name).then(function (character) {
		drawCharacter(character);
	})['catch'](function (reason) {
		if (reason === 'no se encontro el personaje') {
			$('.CharacterForm-message').text(reason);
		}
	});

	//llamar a la api de marvel
	//dibujar una carta con el personaje que regrese la api
	//- si no regresa un personaje -> no hay personaje
	//- si regresa solo un personaje -> dibujar la carta
	//- si regresa mas de un personaje -> dibujar carta con el primer
});

function renderCharacter(character) {
	var attackPoints = Math.ceil(Math.random() * 500) + 500;
	//genera un numero del 500 al 1000
	// character.length -> 20
	// characters[Math.floor(Math.random() * characters.length -1)]

	return '<div class="Card"<h2 class="Card-name">' + character.name + '</h2><img src="' + character.thumbnail.path + '.' + character.thumbnail.extension + '" alt="' + character.name + '" class="Card-image"/>\n        <div class="Card-description">' + character.description + '</div>\n        <div class="Card-attack" data-attack="' + attackPoints + '">' + attackPoints + ' Puntos de Ataque</div>\n      </div>\n      </div>';

	/*	
 Asi se hacia antes de ecmascript 6
 var template = '<div class="Card">\n'+ '<h2 class="Card-name">'+ character.name + '</h2>'+'<img src="'+ character.thumbnail.path + '.' + character.thumbnail.extension
 	+ '" alt="' + character.name + '" class="Card-image"/>\n'+ '<div class="Card-description">' + character.description + '</div>\n'
     + '<div class="Card-attack">500 puntos de ataque</div>\n'
 
     return template
  */
}

function shuffle(arr) {
	for (var i = 0; i < arr.length; i++) {
		var tmp = arr[i];
		var index = Math.floor(Math.random() * arr.length - 1);
		arr[i] = arr[index];
		arr[index] = tmp;
		return arr;
	}
}

function drawCharacter(character) {
	var template = renderCharacter(character);
	var $card = $(template);
	$card.on('click', function (event) {
		var $this = $(this);
		var attack = $this.find('.Card-attack');

		console.log(attack.data('attack'));
	});
	$('.Battle-player').append($card);
}