<script type="text/javascript" src="../js/jquery-ui-1.8.21.custom.min.js"></script>
<script type="text/javascript" src="../js/jquery.snippet.js"></script>
<link rel="stylesheet" type="text/css" href="../css/jquery.snippet.css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<script language="Javascript"  type="text/javascript">
$(function() {
	//mostrando la info del pre
	$("pre").snippet("javascript", {style:'darkness'});
	//Cambiando el color de los titulos 2.
	//forma 1 con iteración explicita
		//$.each($('h2'), function(key, value) {
		//	$(this).css("color", "#333");
		//});
	//
	//cambiando los parrafos seguidos, de un titulo nivel 2.
	//Opción1 no recomendado.
		//$('h2 + p').css('color', '#946900');
		//$('h2 + p').css('font-style', 'italic');
	//Opción 2 recimendado cuando se va ocupar varias veces la misma consulta.
		//$parrafosBajoTitulo = $('h2 + p');
		//$parrafosBajoTitulo.css('color', '#946900');
		//$parrafosBajoTitulo.css('font-style', 'italic');
	//opcion 3, recomendado cuando todo lo que vamos a hacer se puede encolar.
	$('h2 + p')
		.css('color', '#946900')
		.css('font-style', 'italic');
});
</script>

Sesión 2 -Caracteristicas principales de jQuery.
==========================================================================================

## Trabaja por grupos(_Iteración implicita_).

Una carácteristica muy interesante es que los metodos de **jQuery** que realizan una consulta trabajan con iteración implicita, por ejemplo, la consulta.

	$('h2')

Nos devuelve todos los titulos nivel 2 (`h2`) que esten en la página, ahora si por ejemplo quisieramos cambiarle el color a un gris obscuro (`#333`), esto lo podriamos hacer de la siguiente manera.

	$.each($('h2'), function() {
		$(this).css("color", "#333");
	});

En este caso estamos ocupando el metodo `each` el nos dice que para cada titulo en la selección ejecuta una función la cual le cambia el color.

De momento no se preocupe en comprender el each, lo importante es que comprenda que estamos iterando explicitamente para realizar determinada acción sobre cada elemento en la selección.

Existe una forma de hacer esto más fácil y es ocupando este comportamiento de trabajar por grupos de jQuery, en este caso la función `css` puede trabajar sobre toda una selección:

	$('h2').css('color', '#333');

En general las funciones que tengan esta forma:

	$('selector').funcionNombre(param1,param2,...);

Trabajan sobre toda la selección, es decir si la selección es todo un grupo la función se ejecutara sobre todos los elementos. A esta funciones las llamaremos `jQuery.fn.funcionNombre` o bien su forma reducida `$.fn.funcionNombre` ya que pertenecen al espacio de nombre `fn` de jQuery.

Cuando hacemos referencia a `jQuery.fn` se hace referencia al espacio de nombre de **jQuery** del prototipo es decir de una extensión de **jQuery**, `jQuery.fn` es también un alias de `jQuery.prototype` [](https://github.com/mundoSICA/tutorial_hispano_jQuery/blob/gh-pages/js/jquery-1.7.2.js#L97).



## Diseñado para realizar consultas atraves del **DOM**.

Quizas la principal caracteristica de **jQuery** es que esta diseñado para realizar consultas a travez de el **DOM**, como ya se menciono antes, **jQuery** nos permite realizar consultas **CSS**, **xPath** y **trasversales**.


	$('h2 + p').css('color', '#946900');
	$('h2 + p').css('font-style', 'italic');


Con esto indicamos que todo parrafos(`p`) inmediatamente seguidos(`+`) de un titulo nivel 2(`h2`), va a tomar el color de la letra a café y el estilo de la fuente sera del tipo italica.


No abuse de esta característica, la tarea de realizar una consulta atravez del **DOM** puede llegar a ser algo bastente complejo (_dependiendo de la consulta_).

Una mejor opción es almacenar la consulta realizada en una variable:

	$parrafosBajoTitulo = $('h2 + p');
	$parrafosBajoTitulo.css('color', '#946900');
	$parrafosBajoTitulo.css('font-style', 'italic');

> Es buena práctica agregar el prefijo `$` a las variables que almacenan el resultado de una consulta.


## Es un sistema modular.

 - [jQuery plugins](https://github.com/jquery/plugins.jquery.com)
 - [jQuery UI](http://jqueryui.com/)
 - [jQuery mobile](http://jquerymobile.com/)

## Chaining.

Atienda al siguiente código:

	$('h2').css('color','red');
	$('h2').text('Cambiando el contenido a todos los elementos h2');

Ahora comparelo con el siguiente código:
	
	$('h2')
				.css('color','red')
				.text('Cambiando el contenido a todos los elementos h2');

¿Cual cree que sea mejor?, argumente su respuesta.


## Enlaces externos.

 - [Atributos personalizados](http://www.w3.org/TR/html5/global-attributes.html#custom-data-attribute)
 
