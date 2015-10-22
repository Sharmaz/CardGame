'use strict';

var $ = window.jQuery;
var page = window.page;

//page('ruta destino', que quiero que pase )

var homeTemplate = '<section class="Layout">\n    <section class="Layout-antagonist"> \n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n    </section>\n    <section class="Layout-main">\n      <div class="Layout-status">\n        <div class="Layout-status">\n          <div class="Status">\n            <h3 class="Status-player">iRobles</h3>\n            <p class="Status-points">100000</p>\n          </div>\n        </div>\n        <div class="Layout-status">\n          <div class="Status">\n            <h3 class="Status-player">Sharmaz</h3>\n            <p class="Status-points">100000</p>\n          </div>\n        </div>\n      </div>\n      <div class="Layout-battle">\n        <div class="Battle">\n          <div class="Battle-antagonist">\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n          </div>\n          <div class="Battle-player">\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n            <div class="Card">\n              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n              <div class="Card-description">Wolverine es muy poderoso</div>\n              <div class="Card-attack">500 puntos de ataque</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="Layout-phases"> \n        <div class="Phases">\n          <p>WTF! ese ataque fue super efectivo, has bajado 300 puntos a tu oponente</p>\n        </div>\n      </div>\n    </section>\n    <section class="Layout-player"> \n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n      <div class="Card">\n        <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image"/>\n        <div class="Card-description">Wolverine es muy poderoso</div>\n        <div class="Card-attack">500 puntos de ataque</div>\n      </div>\n    </section>\n  </section>';

var signinTemplate = '<label>Ingresa tu nombre</label>\n  <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="nombre" class="Signin-name-input"/>\n  <button tabindex="2" class="Signin-button">Ingresar</button>';

page('/', home);
page('/signin', signin);

page();

function home() {
  console.log('estoy navegando al home');

  $('.app-container').html(homeTemplate);

  $(document).load(function () {
    alert('hola');
    // if ( $('.Signin-name-input')[0].value) {

    // 	// window.location = '/signin'
    //	page('/signin')
    // 	console.log('es mayor')
    // }
    //window.location = '/signin'
  });
}

function signin() {
  console.log('estoy navegando a signin');

  $('.app-container').html(signinTemplate);

  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    //obteniendo el contenido del input
    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('Ingrese un nombre valido');

    page('/');
  });
}

page({ hashbang: true });