var $ = window.jQuery
var url = 'http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=513b198c262e14c0fbdbd548fc5d0afc'
// var url2 = 'http://gateway.marvel.com/v1/public/characters/1009146'
var apikey = 'apikey=513b198c262e14c0fbdbd548fc5d0afc'
Promise.resolve($.get(url))
.then(function (results) {
 	var characters = results.data.results[0].characters.items 
 	var characterUrl = characters[0].resourceURI +'?'+ apikey
 	return Promise.resolve($.get(characterUrl))
 	 debugger
 })
.then(function (char) {
	debugger
})
.catch(function (err) {
	console.error(err)
})