var $ = window.jQuery
var url = 'http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=513b198c262e14c0fbdbd548fc5d0afc'
// var url2 = 'http://gateway.marvel.com/v1/public/characters/1009146'
var apikey = '513b198c262e14c0fbdbd548fc5d0afc'
var api = new MarvelApi(key)

api.findSeries('avengers')
.then ((characters) => {
	var characters = characters.items
	var primises = []
 	for (let characters of characters) {
 		
 		let primse = api.getResourceURI(character.resourceURI)
		promises.push(promise)
	}
 	 return Promise.all(promises)
 })
.then ((characters) => {
	console.log(characters)
})
.catch((err) => {
	debugger
	console.error(err)
})