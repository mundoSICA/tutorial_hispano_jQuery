/*
 * Genera un memorama -  Requiere jQuery
 * 
 * Para una comprención del código se sugiere leer:
 *  - https://developer.mozilla.org/es/docs/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
 */
function Memorama(tabledo, options) {
	this.$tablero = $(tabledo);
	this.options = $.extend({}, this.defaultOptions, options);
	this.iniciarTablero();
}
// Opciones por defectos
Memorama.prototype.defaultOptions = {
	tema: "one-piece",
	numFichas: 12,
	clickNumero: 0,
	ultimoTipoFicha: 0,
};
// Este metodo se encarga de inicializar el tablero.
Memorama.prototype.iniciarTablero = function() {
	//Borramos y creamos el tablero
	this.borrarTablero();
	numFichasDistintas = this.options.numFichas / 2;
	for(var i=0; i<this.options.numFichas; i++) {
		var tipoFicha = 0;
		while( 1 ) {
			tipoFicha = Math.floor((Math.random()*numFichasDistintas)+1);
			if( this.$tablero.find('[data-tipo="'+tipoFicha+'"]').length < 2 )
				break;
		}
		this.$tablero.append("<div class='ficha' id='ficha"+i+"' data-tipo='"+tipoFicha+"' > </div>");
	}
	//Agregamos el evento del click
	memorama = this;
	this.$tablero.find('.ficha').click(function (){
		memorama.clickFicha($(this));
   });
}

Memorama.prototype.clickFicha = function ($ficha) {
	if( $ficha.css('opacity') != "1" )
		return;
	tipo = $ficha.attr('data-tipo');
	$ficha.css('backgroundPosition', "-"+(tipo*175)+"px 0");
	this.options.clickNumero = (this.options.clickNumero + 1) % 2;
	if( this.options.clickNumero == 0 ) {
		$ultimasFichas = this.$tablero.find('[data-tipo="'+this.options.ultimoTipoFicha+'"]');
		if( this.options.ultimoTipoFicha == tipo ) {
			$ultimasFichas.animate({'opacity': 0.5}, 2000);
		} else {
			setTimeout(function() {
				$ultimasFichas.css('backgroundPosition', "0 0");
				$ficha.css('backgroundPosition', "0 0");
			},1000);
		}
	} else {
		this.options.ultimoTipoFicha = tipo;
	}
}
/* Regresa el tema actual
 */
Memorama.prototype.tema = function (tema) {
	if(tema != undefined) {
		console.log('Vamos a cargar el tema' + tema);
	}
	return this.options.tema;
}
/* Regresa el tema actual
 */
Memorama.prototype.borrarTablero = function (tema) {
	this.$tablero.find('.ficha').remove();
}

/*Memorama.prototype.tema = function (tema) {
	this.options.tema = tema;
}*/

jQuery(function (){
	memorama = new Memorama('#tablero', {});
});
