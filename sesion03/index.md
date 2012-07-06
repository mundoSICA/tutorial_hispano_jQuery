<script type="text/javascript" src="../js/jquery.snippet.js"></script>
<link rel="stylesheet" type="text/css" href="../css/jquery.snippet.css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<script language="Javascript"  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
	//
	$("h1")
			.click(function() {
				console.log('Ejecución del manejador1 para el evento click del h1');
			})
			.click(function() {
				console.log('Ejecución del manejador2 para el evento click del h1');
			});
	//test enlaces.
	$('a.testClick').click( function(){
		console.log( $(this).text() );
	});
});
</script>

Sesión 3 - Manejo de eventos
=============================================================================

## Introducción a los eventos.

**jQuery** define una lista de eventos y funciones para la administración de los mismos, la sintaxis por defecto para un manejador de evento es de la siguiente forma `$.fn.nombreEvento`.

	$('Selector').nombreEvento( function(){
		//funcion que administra el evento.
		//this es el elemento que disparo el evento.
	}

Aquí es importante resaltar que **this** contendra la instancia del elemento que disparo el evento, por ejemplos si a los enlaces(`a`) le agregamos el evento `click`, this contendra la instancia del enlace especifo sobre del cual  hallamos hecho click, analice el siguiente codigo.

**Codigo HTML**

	<a class='testClick' href='#'>enlace 1</a>
	<a class='testClick' href='#'>enlace 3</a>
	<a class='testClick' href='#'>enlace 2</a>

**Código jQuery**

	$('a.testClick').click( function(){
		console.log( $(this).text() );
	}

** Como puede ver **
<ul>
	<li><a class='testClick' href='#'>enlace 1</a></li>
	<li><a class='testClick' href='#'>enlace 3</a></li>
	<li><a class='testClick' href='#'>enlace 2</a></li>
</ul>

En este caso mandaremos a la salida de la consola el contenido del enlace que se precione.


## Comportamiento en cola.

Observe el siguiente código.


		$("h1")
			.click(function() {
				console.log('Ejecución del manejador1 para el evento click del h1');
			})
			.click(function() {
				console.log('Ejecución del manejador2 para el evento click del h1');
			});

¿Que cree que suceda cuando le demos click a un h1 en esta página?.

La respuesta la podemos encontrar al reflexionar que sucede cuando mandamos a llamar miltiples veces el evento `document.onReady`. Lo que hace **jQuery** es ocupar una cola para administrar los eventos, de esta forma se pueden agregar multiples funciones sobre el mismo `evento/elemento`, sin más el resultado en la consola seria:

	Ejecución del manejador1 para el evento click del h1
	Ejecución del manejador2 para el evento click del h1


## Borrando eventos función off.

Podemos desvincular los eventos con la función `off` po ejemplo para eliminar el evento click en H1 podriamos hacer.

	$("h1").off('click');

Con esto eliminariamos todos los eventos click del `h1`, si quisieramos eliminar un unico evento click, podriamos hacer uso de los espacios de nombres.



Desde la versión `1.7` de **jQuery**, 


## Enlaces recomendados.

 - [Dos formas de propagación de un evento](http://www.quirksmode.org/js/events_order.html#link1)
