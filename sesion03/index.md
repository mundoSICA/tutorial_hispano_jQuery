<script type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
	//
	//test enlaces.
	$('a[href^="../ejemplos/"]').linkEjemplos();
});
</script>

Sesión 3 - Manejo de eventos
=============================================================================

## Introducción a los eventos.

**jQuery** define una lista de eventos y funciones para la administración de los mismos, la sintaxis por defecto para un manejador de evento es de la siguiente forma `$.fn.nombreEvento`.

	$('Selector').nombreEvento( function(event){
		//funcion que administra el evento.
		//this es el elemento que disparo el evento.
	}

Aquí es importante resaltar que **this** contendra la instancia del elemento que disparo el evento, por ejemplos si a los enlaces(`a`) le agregamos el evento `click`, this contendra la instancia del enlace especifo sobre del cual  hallamos hecho click, analice el siguiente codigo.

**jQuery** define varios eventos para agregar un manejador de dicho evento basta con agregar una función en la llamada de dicho evento esta función puede recibir un argumento `event` el cual es util para obtener información de dicho evento ó para cambiar el comportamiento del mismo.

## Evento click

El evento `click` es disparado cuando con el mouse le hacemos le damos **click** sobre un elemento seleccionado, la forma que tiene este evento es la siguiente:

	$("a.button").click(
		function(event) {
			console.log('Manejador para el evento click del enlace(a) con clase(.) button');
			event.preventDefault();
	});

En el ejemplo anterior vemos como al evento `click` le agregamos una funcion como manejador de dicho evento, esta recibe el objeto `event` el cual ocupamos para ejecutar el metodo `preventDefault` este metodo detiene el comportamiento por defecto de dicho evento, en este caso tenemos un link(`a`) que al darle click lo comun seria que siguiera en enlace definido en el atributo `href`.

[Ejemplo - Click](../ejemplos/03.ejemplo_click.html)

## Comportamiento en cola.

**jQuery** tiene un comportamiento en cola(el primero en entrar es el 1ro en ejecutarse), para explicar esto observe el siguiente código:

		$("a")
			.click(function() {
				console.log('Ejecución del manejador1 para el evento click del enlace');
			})
			.click(function() {
				console.log('Ejecución del manejador2 para el evento click del enlace');
			});

**¿Que cree que suceda cuando le demos click a un enlace(`a`) en la página?.**

La respuesta la podemos encontrar al reflexionar que sucede cuando mandamos a llamar miltiples veces el evento `document.onReady`.

Lo que hace **jQuery** es ocupar una cola para administrar los eventos, de esta forma se pueden agregar multiples funciones sobre el mismo `evento/elemento`, por lo cual el resultado en la consola seria:

	Ejecución del manejador1 para el evento click del enlace
	Ejecución del manejador2 para el evento click del enlace

## Evento hover

El evento `hand over` o `hover` es disparado cuando pasamos el cursor por encima de algun elemento, la sintaxis basica es la siguiente.

	$("a").hover(function() {
		console.log('Ejecución del manejador para el evento hover del enlace');
	});

Cabe mensionar que este evento puede soportar 2 manejadores, el primero es ejecutado cuando el cursor pase por encima del elemento y el segundo es ejecutado cuando el cursor se quita de dicho elemento, p.e.:

	$("a").hover(
		function() {
			$(this).css('color', 'red');
		},
		function() {
			$(this).css('color', 'blue');
		}
	);

En este caso estamos agregando 2 manejadores el resultado sera que cuando pasemos el mouse por encima de un enlace el color de la fuente se cambiara a rojo y cuando quitemos el cursor el color sera azul, veamos otro ejemplo:

[Ejemplo - Hover](../ejemplos/03.ejemplo_hover.html)


## Eventos del teclado

jQuery define un conjunto de [eventos para el teclado](http://api.jquery.com/category/events/keyboard-events/) los eventos que definen son los siguientes.

###  focusout

Vincula a los inputs sobre el evento `out Focus`.

> Mayor información: <http://api.jquery.com/focusout/>


###  keypress

El evento es disparado cuando una tecla es presionada.

>Mayor información:   <http://api.jquery.com/keypress/>

###  keyup

El evento es disparado cuando una tecla deja de estar presionada.

>Mayor información:   <http://api.jquery.com/keyup/>


###  keydown

El evento es disparado cuando se encuentra una tecla presionada.

>Mayor información:   <http://api.jquery.com/keydown/>

### Ejemplo de eventos de teclado:

Como podemos ver las funciones `keyup`, `keydown` y `keypress`, veamos un simple ejemplo:

	$('#target').keyup(function(event) {
		var msg = 'El evento keyup() fue llamado para la tecla ' + event.which;
		console.log(msg);
	}).keydown(function(event) {
		if (event.which == 13) {
			event.preventDefault();
		}
	});


[Ejemplo - Evento Teclado](../ejemplos/03.evento_teclado.html)

## Borrando eventos función off.

Podemos desvincular los eventos con la función `off` po ejemplo para eliminar el evento click en H1 podriamos hacer.

	$("h1").off('click');

Con esto eliminariamos todos los eventos click del `h1`, si quisieramos eliminar un unico evento click, podriamos hacer uso de los espacios de nombres.



Desde la versión `1.7` de **jQuery**, 


## Enlaces recomendados.

 - [Dos formas de propagación de un evento](http://www.quirksmode.org/js/events_order.html#link1)

