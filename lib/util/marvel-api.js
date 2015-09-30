var $ = window.jQuery

class MarvelApi {
	constructor (apikey) {
		this.apikey = apikey
		this.baseUrl = 'http://gateway.marvel.com:80/v1/public/'
	}
	findSeries (title){
		let url = `${this.baseUrl}series?title=${title}&apikey=${this.apikey}` 
		return Promise.resolve($.get(url))
		.then((res) => {
			return res.data.results[0]

		})
	}

	getResourceURI (request) {
		let url = `${resourceURI}?apikey=${this.apikey}`
		return Promise.resolve($.get(url))
		then ((res ) => {return res.data.results[0] })
	}
	
}

window.MarvelApi = MarvelApi