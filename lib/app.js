var $ = window.jQuery
var MarvelApi = window.MarvelApi

var key = '513b198c262e14c0fbdbd548fc5d0afc'
var api = new MarvelApi(key)

api.findSeries('avengers')
.then ((serie) => {
	let serieImage = `url(${serie.thumbnail.path}.${serie.thumbnail.extension})`
	$('.Layout').css('background-image', serieImage)
	var characters = serie.characters.items
	var promises = []
 	for (let character of characters) {		
 		let promise = api.getResourceURI(character.resourceURI)
		promises.push(promise)
	}
 	 return Promise.all(promises)

 })
.then ((characters) => {
	return characters.filter((character) => {
		return !!character.thumbnail //&& !!character.description
	})
})
/*.then ((characters) => {
	return characters.filter((character) => return !!character.thumbnail)
})
*/
.then ((characters) => {
	
	characters = shuffle(characters)

	for (let i = 0; i < 5; i++) {
		let index = Math.floor(Math.random() * characters.length -1)
		let character = characters[i]
		let template = renderCharacter(character)
		let $card = $(template)
		$('.Battle-player').append($card)
		$card.on('click', function (event) {
			let $this = $(this)
			let attack = $this.find('.Card-attack')

			console.log(attack.data('attack'))
		})


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

})
.catch((err) => {	

	console.error(err)
})


function renderCharacter (character) {
	let attackPoints = Math.ceil(Math.random() * 500) + 500 
	//genera un numero del 500 al 1000
	// character.length -> 20
	// characters[Math.floor(Math.random() * characters.length -1)] 


	return `<div class="Card"<h2 class="Card-name">${character.name}</h2><img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="Card-image"/>
        <div class="Card-description">${character.description}</div>
        <div class="Card-attack" data-attack="${attackPoints}">${attackPoints} Puntos de Ataque</div>
      </div>
      </div>`

/*	
Asi se hacia antes de ecmascript 6
var template = '<div class="Card">\n'+ '<h2 class="Card-name">'+ character.name + '</h2>'+'<img src="'+ character.thumbnail.path + '.' + character.thumbnail.extension
	+ '" alt="' + character.name + '" class="Card-image"/>\n'+ '<div class="Card-description">' + character.description + '</div>\n'
    + '<div class="Card-attack">500 puntos de ataque</div>\n'

    return template
 */
}

function shuffle (arr) {
	for (var i = 0; i < arr.length; i++) {
		let tmp = arr[i]
		let index = Math.floor(Math.random() * arr.length -1)
		arr[i] = arr[index]
		arr[index] = tmp
		return arr
	}
}



