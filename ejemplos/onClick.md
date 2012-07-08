# Manejo de evento onClick.

Los eventos de jQuery se les suele quitar el prefijo on en caso de llevarlo, analice el siguiente código.

	<a href='#' onClick='alert(this)'>click Me</a>

<a href='#' onClick='alert(this)'>click Me</a>

En cambio en jQuery la sintaxis seria.

	$("a").click(function() {
		//acción
	});

Notar que se elemino el prefijo **on**.
