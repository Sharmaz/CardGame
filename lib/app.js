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
/*.then ((characters) => {
	return characters.filter((character) => {
		return !!character.thumbnail 
	})
})*/
.then ((characters) => {
	
	//por cada carta
	$('.Card').each((i, item) => {
		let character = characters[i].data.results[0]
		let $this = $(item)
		let $image = $this.find('.Card-image')
		let $description = $this.find('.Card-description')
		let $name = $this.find('.Card-name')

		$image.attr('src', `${character.thumbnail.path}.${character.thumbnail.extension}`)
		$name.text(character.name)
		$description.text(character.description)


	})
	//cambiar las imagenes .Card-image
	//cambiar descripcion .Card-description
	//cambiar nombre .Card-name


})
then ((characters) => {
	return characters.filter((character) => {
		return !!character.thumbnail 
	})
})
.catch((err) => {	

	console.error(err)
})