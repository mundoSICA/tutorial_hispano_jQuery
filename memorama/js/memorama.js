/*
 * Genera un memorama -  Requiere jQuery
 * 
 * Para una comprención del código se sugiere leer:
 *  - https://developer.mozilla.org/es/docs/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
 */

/*
 * Constructor del Objeto Memorama
 */
function Memorama(tabledo, options) {
	this.$tablero = $(tabledo);
	this.options = $.extend({}, this.defaultOptions, options);
	this.iniciarTablero();
	this.sonidoError = new buzz.sound( "./media/audio/error", {
		formats: [ "ogg", "mp3", "acc" ]
	});
	this.sonidoOk = new buzz.sound( "./media/audio/ok", {
		formats: [ "ogg", "mp3", "acc" ]
	});
}
/*
 *  Opciones por defecto
 */
Memorama.prototype.defaultOptions = {
	tema: "one-piece",
	temaNombre: "One Piece",
	numFichasDistintas: 12,
	fichasViables: [],
	numFichas: 12,
	clickNumero: 0,
	ultimoTipoFicha: 0,
};
/*
 *  Se encarga de inicializar el tablero.
 */
Memorama.prototype.iniciarTablero = function() {
	//Borramos y creamos el tablero
	this.borrarTablero();
	numFichasDistintas = this.options.numFichas / 2;
	// Generando las fichas viables
	var tipoFicha = 0;
	// Borra las fichas viables
	this.$tablero.empty();
	this.options.fichasViables.splice(0, this.options.fichasViables.length);
	//Agregamos el titulo
	$('<h1/>').attr({class: 'MemoramaTitulo'}).
		text("Memorama - " + this.options.temaNombre).
		appendTo( this.$tablero );
	// Agregamos la tabla del score
	$('<div/>').attr({class: 'MemoramaScore'}).html(
		"Numero de Intentos <span class='numIntentos'>0</span>," + 
		"Fichas acertadas <span class='numFichasAcertadas'>0</span>, "+
		"Tiempo <span class='tiempoJugado'>00:00</span>"
	).appendTo( this.$tablero );
	
	while( this.options.fichasViables.length < numFichasDistintas ) {
		tipoFicha = Math.floor((Math.random()*this.options.numFichasDistintas)+1);
		if( this.options.fichasViables.indexOf(tipoFicha) == -1 )
			this.options.fichasViables.push(tipoFicha);
	}
	for(var i=0; i<this.options.numFichas; i++) {
		var indexFichaViable = 0;
		while( 1 ) {
			indexFichaViable = Math.floor(Math.random()*numFichasDistintas);
			tipoFicha = this.options.fichasViables[indexFichaViable];
			if( this.$tablero.find('[data-tipo="'+tipoFicha+'"]').length < 2 ){
				break;
			}
		}
		//Agregamos la fecha
		$('<div/>').attr({
			class: 'ficha',
			id: "ficha"+i,
			'data-tipo' : tipoFicha
		}).appendTo( this.$tablero );
		//this.$tablero.append("<div class='ficha' id='ficha"+i+"' data-tipo='"+tipoFicha+"' > </div>");
	}
	//Agregamos el evento del click
	memorama = this;
	this.$tablero.find('.ficha').click(function () {
		memorama.clickFicha($(this));
   });
   this.$tablero.append(
		'<a href="https://github.com/mundoSICA/tutorial_hispano_jQuery/tree/gh-pages/memorama" class="memoramaLinkCodigo" target="_blank">Explorar código fuente</a>'
		);
}

Memorama.prototype.clickFicha = function ($ficha) {
	if( $ficha.css('opacity') != "1" )
		return;
	tipo = $ficha.attr('data-tipo');
	$ficha.css('backgroundPosition', "-"+(tipo*175)+"px 0");
	this.options.clickNumero = (this.options.clickNumero + 1) % 2;
	if( this.options.clickNumero == 0 ) { //Sedundo click
		$ultimasFichas = this.$tablero.find('[data-tipo="'+this.options.ultimoTipoFicha+'"]');
		this.incrementarIntentos();
		if( this.options.ultimoTipoFicha == tipo ) { //El usuario le acerto
			$ultimasFichas.animate({'opacity': 0.3}, 2000);
			this.incrementarFichasAcertadas();
			if( $numFichasAcertadas.text() == this.options.numFichas ){
				alert("Felicidades acabaste en " + $numIntentos.text() +" Intentos" );
			}
			this.sonidoOk.play();
		} else { //El usuario no acerto
			this.sonidoError.play();
			setTimeout(function() {
				$ultimasFichas.css('backgroundPosition', "0 0");
				$ficha.css('backgroundPosition', "0 0");
			},1000);
		}
	} else {
		this.options.ultimoTipoFicha = tipo;
	}
}
/*
 *  Incrementa en 1 el número de intentos
 */
Memorama.prototype.incrementarIntentos = function() {
	$numIntentos = this.$tablero.find('.numIntentos');
	$numIntentos.text(1* $numIntentos.text() + 1);
}
/*
 * Incrementa en 2 el número de fichas Acertadas
 */
Memorama.prototype.incrementarFichasAcertadas = function() {
	$numFichasAcertadas = this.$tablero.find('.numFichasAcertadas');
	$numFichasAcertadas.text(1* $numFichasAcertadas.text() + 2);
}
/* Regresa el tema actual
 */
Memorama.prototype.tema = function (tema) {
	if(tema != undefined) {
		console.log('Vamos a cargar el tema' + tema);
	}
	return this.options.tema;
}
/* 
 * Regresa el tema actual
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
/* 
 * Crea los controles para el memorama
 */
Memorama.prototype.controles = function (selector) {
	$controlPanel = $(selector);
	memorama = this;
	$controlPanel.addClass('MemoramaConfiguracion');
/* <span>Tema</span><br />
		<select name="memoramaCtrlSelecEstilo" class="memoramaCtrlSelecEstilo">
			<option value="one_piece">one piece</option>
			<!-- <option value="other">other</option> -->
		</select><br />
		<span>Número de fichas</span><br />
		<select name="memoramaCtrlSelecNumFichas" class="memoramaCtrlSelecNumFichas">
			<option value="4">04</option>
			<option value="8">08</option>
			<option value="12">12</option>
			<option value="16">16</option>
			<option value="20">20</option>
			<option value="24">24</option>
		</select><br />
		<button name="memoramaAceptar" class="memoramaAceptar">Aceptar</button>
*/
	$controlPanel.find('.memoramaAceptar').click(function() {
		memorama.options.numFichas = $controlPanel.find('.memoramaCtrlSelecNumFichas').val();
		memorama.iniciarTablero();
	});
}
