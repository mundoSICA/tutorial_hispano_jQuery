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
			num_sesiones = 5,
			pie_links = '',
			titulo = null,
/* funcion debug util para depurar */
	debug = function (){
		console.log($content);
		console.log($destino);
		console.log($tagTitulos);
		console.log(document.title);
		console.log(modo);
	},
	link = function (url,content){
		return '<a href='+url+'>'+content+'</a>';
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
		if( pageConf.fileName == '/index.html' ){//Modo index el directorio es raiz.
			modo = 'index';
			pie_links += link(
				'https://github.com/mundoSICA/tutorial_hispano_jQuery/tarball/master',
				'&darr; Descargar <strong>Tar.gz</strong>'
			)+ ' | ' + link(
				'./todo/index.html',
				'Versión imprimible <strong>HTML</strong>'
			)+ ' | ' + link(
				'./todo/manual_jquery_basico.pdf',
				'&darr; Versión imprimible <strong>PDF</strong>'
			)+ ' | ' + link(
				'https://github.com/mundoSICA/tutorial_hispano_jQuery/zipball/master',
				'&darr; Descargar <strong>Zip</strong>'
			);
		}else if( pageConf.fileName.match(/^\/sesion0[1-9]\/index.html/g) ){
			modo = 'index.sesion'
			pie_links += link(
				'#tabla_contenidos',
				'&uarr; Tabla de Contendidos'
				) + ' | ' + link(
				'../index.html',
				'&Theta; Indice principal'
			);
			titulo = 'Tabla de Contenidos';
		}else if( pageConf.fileName == '/recursos/index.html' ){
			modo = 'index.recurso';
			pie_links +=  '';
			titulo = '';
		}else if( pageConf.fileName == '/ejemplos/index.html' ){
			modo = 'index.ejempo';
			pie_links += link('../index.html','&Theta; Indice principal');
			titulo = ' ';
		}else if( pageConf.fileName.match(/^\/ejemplos/g) ){
			titulo = 'Contenido del ejemplo';
			modo = 'algun.ejemplo';
			ses = pageConf.fileName.split('/').pop().split('.').shift();
			pie_links += link(
								'#tabla_contenidos',
								'&uarr; Tabla de Contendidos'
							) + ' | ' +
							link(
								'../sesion'+ses+'/index.html',
								'Ir a la Sesion '+ses
							) + ' | ' +
							link(
								'../index.html',
								'&Theta; Indice principal'
							);
		}else if( pageConf.fileName == '/todo/index.html' ){
			titulo = 'Versión impresa';
			modo = 'version.impresa';
		}
	},
/* Recibe una cadena de texto y la convierte en slug */
	slug_str = function( str ){
		return    $.trim(str).toLowerCase().replace(/:/g, "").
		replace(/\./g, "").replace(/\s+/g, "-").replace(/á/g, "a").
		replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").
		replace(/ñ/g, "ni").
		replace(/ú/g, "u").replace(/\(/g, "-").replace(/\)/g, "");
	},
	links_content = function(){
		if( modo == 'index.sesion'){
			pie_links = link(
								'../index.html',
								'&Theta; Indice principal'
							);
			if( pageConf.sesion > 1 ){
				ses_prev = '0'+(pageConf.sesion-1);
				pie_links = link(
								'../sesion'+ses_prev+'/index.html',
								'&laquo; Sesión '+ses_prev
							) + ' | ' + pie_links;
			}
			if( pageConf.sesion < pageConf.num_sesiones ){
					ses_sig = '0'+(pageConf.sesion+1);
					pie_links += '| ' + link(
									'../sesion'+ses_sig+'/index.html',
									'Sesión '+ses_sig + ' &raquo;'
								);
			}
		}else if( modo == 'version.impresa' ){
			pie_links += link(
										'../index.html',
										'&Theta; Indice principal'
					) + ' | ' +
					link(
						'#tabla_contenidos',
						'&uarr; Tabla de Contendidos'
				)  + ' | ' + link(
						'./manual_jquery_basico.pdf',
						'&darr; Versión imprimible <strong>PDF</strong>'
					);
		}
		$( '<div	class="links_paginacion">'+pie_links+'</div>' ).appendTo($content);
	}
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
			$(h2_actual).before('<div	class="links_paginacion">'+pie_links+'</div>');
			// Creamos un item de la lista(<li>) con un link(<a>)
			// con referencia(href) al #nuevoID
			if( titulo ) {
				tContenidoHtml += '<li>' + 
														link('#' + nuevoID,$(h2_actual).html()) +
													'</li>';
			}
		});
		//generamos los cambios en el pie del contenido
		links_content()
		if(titulo) {
			$destino.append(tContenidoHtml+ '</ol>');
			//insertamos la ancla para que suba a la tabla de contenido
			$content.find('.linkTablaContenido').click(function(event) {
				$( document ).scrollTop(0);
				event.preventDefault();
			});
		}
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
	/* Mueve el scroll en la posicion y del elemento seleccionado */
	scrollPosition = function (){
		var location = window.location + '';
		if( location.indexOf('#') != -1 ){
			$el = $('#' + location.split('#').pop() );
			if($el.length){
				$( document ).scrollTop($el.offset().top-$('#head').outerHeight(true));
			}
		}
	}
/* Donde todo inicia */
	init = function() {
		obtenerModo();
		generaTabla();
		scrollPosition();
	}
/* Run script, right now! */
	init();
})('#content', '#tabla_contenidos', 'h2');
});
