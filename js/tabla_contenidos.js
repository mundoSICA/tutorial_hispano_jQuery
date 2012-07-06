/*!
 * Descripcion: Alministra las tablas de contenidos del sitio
 * Autor      : @fitorec
 * Licencia   : Dual licensed under the MIT or GPL Version 2 licenses.
 * Date       : 2012/07/06 18:16:52
 */

$(function() {
tablaContenido = (function(div_contenedor, div_destino, tag_titulos){
/* variables a utilizar */
	var $content = $(div_contenedor),
			$destino = $content.find(div_destino),
			$tagTitulos = $content.find(tag_titulos),
			modo = null,
			pie_links = '<div	class="links_paginacion">',
			titulo = null;
/* funcion debug util para depurar */
	debug = function (){
		console.log($content);
		console.log($destino);
		console.log($tagTitulos);
		console.log(document.title);
		console.log(modo);
	}
/* A partir del archivo(fileName) obtenemos el modo
 *  index            - Pertenece a la pagina principal(index)
 *  index.sesion     - Pertenece a una sesión especifica.
 *  index.ejemplos   - Index de ejemplos.
 *  algun.ejemplo    - Algun ejemplo.
 *  algun.recurso   -  Algun recurso.
 */
	obtenerModo = function (value){
		var path = window.location+'';
		if( fileName == '/index.html' ){//Modo index el directorio es raiz.
			modo = 'index';
			pie_links += '<a href="https://github.com/mundoSICA/tutorial_hispano_jQuery/tarball/master">'
								+ 'Descargar Repositorio</a>';
		}else if( fileName.match(/^\/sesion0[1-9]\/index.html/g) ){
			modo = 'index.sesion'
			pie_links += '<a href="#tabla_contenidos">Tabla de Contendidos</a>'
									+ ' | <a href="../index.html">Indice principal</a>';
			titulo = 'Tabla de Contenidos';
		}else if( fileName == '/recursos/index.html' ){
			modo = 'index.recurso';
			pie_links +=  '<a href="#tabla_contenidos">Tabla de Contendidos</a>'
									+ ' | <a href="../index.html">Indice principal</a>';
			titulo = 'Listado de recursos';
		}else if( fileName == '/ejemplos/index.html' ){
			modo = 'index.ejempo';
			pie_links +=  '<a href="../index.html">Indice principal</a>';
			titulo = 'Listado de de ejemplos';
		}else if( fileName.match(/^\/ejemplos/g) ){
			titulo = 'Contenido del ejemplo';
			modo = 'algun.ejemplo';
			cap = fileName.split('/').pop().split('.').shift();
			pie_links +=  '<a href="#tabla_contenidos">Indice de ejemplos</a>'
									+ ' | <a href="../sesion'+cap+'/index.html">Ir al Capitulo '+cap+'</a>'
									+ ' | <a href="../index.html">Indice principal</a>';
		}
		pie_links += '</div>'
	},
/* Recibe una cadena de texto y la convierte en slug */
	slug_str = function( str ){
		return    $.trim(str).toLowerCase().replace(/:/g, "").
		replace(/\./g, "").replace(/\s+/g, "-").replace(/á/g, "a").
		replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").
		replace(/ú/g, "u").replace(/\(/g, "-").replace(/\)/g, "");
	},
/* Genera la tabla de contenido segun el modo */
	generaTabla = function (){
		if( modo == null )
			return;
		tContenidoHtml = '';
		if(titulo)
			tContenidoHtml = '<h2>' + titulo + '</h2><ol id="lista_contenidos">';
		$tagTitulos.each( function(key, h2_actual) {
			// Generamos el nuevo identificador que tendrá el h2_actual
			nuevoID = slug_str($(h2_actual).text());
			$(h2_actual).attr('id',  nuevoID);
			$(h2_actual).before(pie_links);
			// Creamos un item de la lista(<li>) con un link(<a>) con referencia(href) al #nuevoID
			if(titulo)
				tContenidoHtml += '<li><a href="#' + nuevoID + '">' + $(h2_actual).html() + '</a></li>';
		});
		if(titulo) {
			$destino.append(tContenidoHtml+ '</ol>');
		}
		$( pie_links ).appendTo($content);
		if(modo=='index')
			generaLinksIndex();
	},
/* Genera el indice de la página principal */
	generaLinksIndex = function() {
		padreLink = '';
		href = '';
		$content.find('ul a').each(function(key, link) {
			href=$(this).attr('href');
			if( href.length > 1 ){
					padreLink = href;
			}else{
					$(this).attr('href', padreLink+'#'+ slug_str($(this).text()) )
			}
		});
	},
/* Donde todo inicia */
	init = function(){
		obtenerModo();
		generaTabla();
		var location = window.location + '';
		if( location.indexOf('#') != -1 ){
			pos_y = $('#' + location.split('#').pop() ).position().top;
			console.log(pos_y);
			$( document ).scrollTop(pos_y);
		}
	}
/* Run script, right now! */
	init();
})('#content', '#tabla_contenidos', 'h2');
});
