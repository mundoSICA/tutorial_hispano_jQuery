<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>

<h1 id='tituloPrincipal'>Función anonima <i>auto-ejecutable</i>.</h1>

Una función lambda es una función que al definir no tiene nombre, esta nos resulta utiles por ejemplo para almacenarla en una variable.

	imprimeContenido = function (id){
			console.log(document.getElementById(id).innerHTML)
		}
		
		imprimeContenido('tituloPrincipal');


## concepto `auto-ejecutable`.

En ocaciones no es necesario almacenarlas entonces la funcion lambda la podemos ejecutar directamente al final de su declaración agregando los parentesis `(arg1,arg2,...,argn)` veamos:

Atienda al siguiente código:

	<h1 id='tituloPrincipal'>Función anonima auto ejecutable.</h1>
	<script>
		(function (id){
			console.log(document.getElementById(id).innerHTML)
		})('tituloPrincipal');
	<script>

Como resultado manda a la bitacola de la consola el mensaje `Función anonima auto ejecutable`, como se puede ver en esta página al observar la consola.


<script  type="text/javascript">
(function (id){
    console.log(document.getElementById('tituloPrincipal').innerHTML);
})('tituloPrincipal');
</script>
