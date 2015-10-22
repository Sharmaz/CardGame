var $ = window.jQuery
var page = window.page


//page('ruta destino', que quiero que pase )

var homeTemplate = `<section class="Layout">
    <section class="Layout-antagonist"> 
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
    </section>
    <section class="Layout-main">
      <div class="Layout-status">
        <div class="Layout-status">
          <div class="Status">
            <h3 class="Status-player">iRobles</h3>
            <p class="Status-points">100000</p>
          </div>
        </div>
        <div class="Layout-status">
          <div class="Status">
            <h3 class="Status-player">Sharmaz</h3>
            <p class="Status-points">100000</p>
          </div>
        </div>
      </div>
      <div class="Layout-battle">
        <div class="Battle">
          <div class="Battle-antagonist">
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
          </div>
          <div class="Battle-player">
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
          </div>
        </div>
      </div>
      <div class="Layout-phases"> 
        <div class="Phases">
          <p>WTF! ese ataque fue super efectivo, has bajado 300 puntos a tu oponente</p>
        </div>
      </div>
    </section>
    <section class="Layout-player"> 
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
      <div class="Card">
        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>
        <div class="Card-description">Wolverine es muy poderoso</div>
        <div class="Card-attack">500 puntos de ataque</div>
      </div>
    </section>
  </section>`

var signinTemplate = `<label>Ingresa tu nombre</label>
  <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="nombre" class="Signin-name-input"/>
  <button tabindex="2" class="Signin-button">Ingresar</button>`

page('/', home)
page('/signin', signin)

page()

function home() {
	console.log('estoy navegando al home')

	$('.app-container').html(homeTemplate)

	 //window.location = '/signin'
	})
}

function signin() {
	console.log('estoy navegando a signin')

	$('.app-container').html(signinTemplate)

	$('.Signin-button').on('click', function(event) {
		event.preventDefault()
		//obteniendo el contenido del input
		var username = $('.Signin-name-input')[0].value
		if (!username) return alert('Ingrese un nombre valido')

		page('/')
	})
}

 page({hashbang: true}) 
