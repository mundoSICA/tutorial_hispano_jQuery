$(function() {
tablaContenido = (function(div_contenedor, div_destino, tag_titulos){
	//////////////////////////////////////////////////////////////////////////////////////
	var root = '/tutorial_hispano_jQuery/',
			$content = $(div_contenedor),
			$destino = $content.find('asfds'),
			$tagTitulos = $content.find(tag_titulos),
			level = 2,
			modo = 'sesion';
	debug = function (){
		console.log(root);
		console.log($content);
		console.log($destino);
		console.log($tagTitulos);
		console.log(document.title);
		console.log('modo');
	}
	/* Setea la variable modo a partir del la ubicación de la página,
	 * tomando los siguientes valores.
	 *  index      - Pertenece a la pagina principal(index)
	 *  sesion     - Pertenece a una sesión especifica.
	 *  ej.index   - Index de ejemplos.
	 *  ejemplo    - Algun ejemplo.
	 *  re.index   - Es la sección de ejemplos o de recursos.
	 *  recurso   -  Algun recurso.
	 */
	obtenerModo = function (value){
		var path = window.location+'';
		//optenemos la subcadena de la url.
		path = path.substring( path.indexOf(root) + root.length );
		//optenemos el nivel de profundidad respecto al index.
		nivel = path.split('/').length;
		//
		if( nivel < 2 ){//Modo index el directorio es raiz.
			modo = 'index';
		}else if( n=path.match(/.*recursos\/(index.html)?$/g) ){
			modo = 're.index';
		}else if( n=path.match(/.*recursos/g) ){
			modo = 'recurso';
		}else if( n=path.match(/.*ejemplos\/(index.html)?$/g) ){
			modo = 'ej.index';
		}else if( n=path.match(/.*ejemplos/g) ){
			modo = 'ejemplo';
		}
		//alert( modo + ' nivel:' + nivel );
		return path;
	}
	debug();
	modo = obtenerModo();
})('#content', '#tablas_contenidos', 'h2');
});


/* Se encarga de generar una lista de contendidos a partir de los títulos nivel 2
 * encontrados dentro de un div identificado como 'content'.
 **/
$(function (){
	// Guardamos la consulta de los h2 existentes en #content, como recordatorio:
	//  1.- $('#content').find('h2') tiene mejor rendimiento que $('#content h2')
	//  2.- Por convención la variable que contenga el resultado de una consulta debera iniciar con $
	$h2 = $('#content').find('h2');
	// Almecenamos en un contenedor el futuro contendio que tendra la tabla de conenido
	tContenidoHtml = '<h2>Tabla de contenidos</h2><ol id="lista_contenidos">';
	pie_links = '<div	class="links_paginacion"><a href="#tabla_contenidos">Tabla de Contendidos</a>';
	pie_links += ' | <a href="../index.html">Indice principal</a></div>';
	// Para todos los títulos nivel 2(h2) almacenados en $h2, vamos a:
	$h2.each( function(key, h2_actual) {
		// Generamos el nuevo identificador que tendrá el h2_actual
		nuevoID = $.trim($(h2_actual).text()) // Quitando espacios en blanco al inicio/final
						.toLowerCase()              // Convertimos minúsculas a mayúsculas
		        .replace(/:/g, "")          // Borrando los dos puntos(:) del nuevo ID
		        .replace(/\s+/g, "-");      // Remplazamos los espacios en blanco por el guión menos
		// Seteamos el atributo id del h2_actual por el nuevoID
		$(h2_actual).attr('id',  nuevoID);
		$(h2_actual).before(pie_links);
		// Creamos un item de la lista(<li>) con un link(<a>) con referencia(href) al #nuevoID
		tContenidoHtml += '<li><a href="#' + nuevoID + '">' + $(h2_actual).html() + '</a></li>';
		// Mandamos a imprimir el resultado en la bitacola de la consola.
		console.log( key + '. ' + nuevoID );
	});
	$(tContenidoHtml + '<ol>').appendTo('#tabla_contenidos');
	$( pie_links ).appendTo('#content');
});
