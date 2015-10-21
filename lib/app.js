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
		return !!character.thumbnail && !!character.description
	})
})
/*.then ((characters) => {
	return characters.filter((character) => return !!character.thumbnail)
})
*/
.then ((characters) => {
	
	for (let i = 0; i < 5; i++) {
		let character = characters[i]
		let template = renderCharacter(character)
		let $card = $(template)
		$('.Battle-player').append($card)
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

	return `<div class="Card"<h2 class="Card-name">${character.name}</h2><img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="Card-image"/>
        <div class="Card-description">${character.description}</div>
        <div class="Card-attack">500 puntos de ataque</div>
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





