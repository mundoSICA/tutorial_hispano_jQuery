<script language="Javascript"  type="text/javascript">
	$(function() {
			$('ul li:odd').css('background','#ddd');
	});
</script>

#selectores CSS

Imagina que tienes una tabla con los siguientes datos:

	<ul>
		<li>a</li>
		<li>b</li>
		<li>c</li>
		<li>d</li>
		<li>e</li>
	</ul>

Ahora por cuestiones de usabilidad queremos los elementos impares de la lista se les cambie el color de fondo.

Para esto cabe señarar que existe una lista no numerica `ul` y  que ellos estan contenida varios items `li`:

	<script language="Javascript"  type="text/javascript">
		$(function() {
				$('ul li:odd').css('background','#ddd');
		});
	</script>

Lo cual genera la siguiente salida:

 - a
 - b
 - c
 - d
 - e

Ummm, cuando decia impares queria que los elementos: 1ro(`a`),3ro(`c`),5ro(`e`) fuese de color gris.

**Tarea:** probar con la selección con `even`:

	$('ul li:even').css('background','#ddd');

¿Puedo explicar que sucede?
