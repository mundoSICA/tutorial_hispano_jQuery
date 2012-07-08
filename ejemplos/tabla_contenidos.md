<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>

## Ejemplo tabla de contendos.

El siguiente código es un ejemplo funcional de la tabla de contenido del sitio:


	/* Se encarga de generar una lista de contendidos a partir de los títulos nivel 2
	 * encontrados dentro de un div identificado como 'content'.
	 **/
	$(function (){
		// Guardamos la consulta de los h2 existentes en #content, como recordatorio:
		//  1.- $('#content').find('h2') tiene mejor rendimiento que $('#content h2')
		//  2.- Por convención la variable que contenga el resultado de una consulta debera iniciar con $
		$h2 = $('#content').find('h2');
		// Una vez almacenada la búsqueda en $h2, podemos insertar nuevos elementos h2
		// dentro de #content alterando el DOM sin alterar el contenido de $h2
		$('<h2>Tabla de contenidos</h2><ol id="lista_contenidos"><ol>')
			.appendTo('#tabla_contenidos');
		// Para todos los títulos nivel 2(h2) almacenados en $h2, vamos a:
		$h2.each( function(key, h2_actual) {
			// Generamos el nuevo identificador que tendrá el h2_actual
			nuevoID = $.trim($(h2_actual).text()) // Quitando espacios en blanco al inicio/final
							.toLowerCase()              // Convertimos minúsculas a mayúsculas
							.replace(/:/g, "")          // Borrando los dos puntos(:) del nuevo ID
							.replace(/\s+/g, "-");      // Remplazamos los espacios en blanco por el guión menos
			// Seteamos el atributo id del h2_actual por el nuevoID
			$(h2_actual).attr('id',  nuevoID);
			// Creamos un item de la lista(<li>) con un link(<a>) con referencia(href) al #nuevoID
			$('<li><a href="#' + nuevoID + '">' + $(h2_actual).html() + '</a></li>').appendTo('#lista_contenidos');
			// Mandamos a imprimir el resultado en la bitacola de la consola.
			console.log( key + '. ' + nuevoID );
		});
	});

