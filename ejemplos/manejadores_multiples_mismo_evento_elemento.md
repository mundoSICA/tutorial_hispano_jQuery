<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
	$("h1")
			.click(function() {
				console.log('Ejecución del manejador1 para el evento click del h1');
			})
			.click(function() {
				console.log('Ejecución del manejador2 para el evento click del h1');
			});
});
</script>

# Ejecución multiples manejadores mismo elemento/evento.

Observe el siguiente código:

	$("h1")
			.click(function() {
				console.log('Ejecución del manejador1 para el evento click del h1');
			})
			.click(function() {
				console.log('Ejecución del manejador2 para el evento click del h1');
			});

¿Que crees que suceda?.

Compruebalo dare `click` al titulo principal y observa la consola, trata de explicarlo.
