var $ = window.jQuery

class MarvelApi {
	constructor (key) {
		// constructor se llama cuando iniciamos nuestra clase con new MarvelApi()
		this.key = key
		this.baseUrl = 'http://gateway.marvel.com/v1/public/'
		//asignar propiedades a this
	}

	findSeries (title){
		let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}` 
		//construimos la url que se necesita para obtener datos de los avengers

		//siempre pide datos a la API de Marvel 
		if (localStorage[url]) {
			let datos = localStorage[url] //traerDeCache
			datos = JSON.parse(datos)
			console.log('hola cache')
			return Promise.resolve(datos)


		} else {
		return Promise.resolve($.get(url))
		// hace que la petición de jQuery se vuelva una Promise
		.then((res) => {
			//guardarResultadoEnCache()
			let datos = res.data.results[0]
			datos = JSON.stringify(datos)
			localStorage[url] = datos
			//regresamos una nueva promesa con el
			//primer resultado de acuerdo a lo que nos regresa marvel
			return Promise.resolve(datos)
		})
	}
}
	getResourceURI (resourceURI) {
		// este metodo es muy similar al de arriba
		//¿Podrias crear un metodo interno al que llamen estos dos?
		let url = `${resourceURI}?apikey=${this.key}`
		
		if (localStorage[url]) {
			let datos = localStorage[url]
			datos = JSON.parse(datos)
			console.log('Hola Cache')
			return Promise.resolve(datos)
		
		}

		return Promise.resolve($.get(url))
		.then((res ) => {
			let datos = res.data.results[0]
			datos = JSON.stringify(datos)
			localStorage[url] = datos
			return Promise.resolve(datos)
		})
	}

	searchCharacter (name) {
		//characters?name=iron%20man&apikey=513b198c262e14c0fbdbd548fc5d0afc
		let url = `${this.baseUrl}/characters?name=${name}&apikey=${this.key}`
		return new Promise(function (done) {
			$.get(url).done(function (data) {
			done(data)
			})
		})
		.then(function (res) {
			if (!res.data.total) {
				return Promise.reject('no se encontro el personaje')
			}
			return res.data.results[0]
		})
	}
	
}
window.MarvelApi = MarvelApi