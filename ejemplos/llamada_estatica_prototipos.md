<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>
<script  type="text/javascript">
//constructor objeto Gato
function Gato( str ) {
	this.msg = str;
}
//extendemos el prototipo del Gato
Gato.prototype.imprime = function() {
	console.log( this.msg );
}
//funcion estatica no es necesario instaciar un obj para llamarla
Gato.impremeEstatico = function ( msg ){
	console.log( msg );
}
//test
gato = new Gato('hola mundo');
gato.imprime();
Gato.impremeEstatico('Adios mundo cruel');
</script>

# Llamada estatica versus prototipo

Atienda al siguiente código.

	//constructor objeto Gato
	function Gato( str ) {
		this.msg = str;
	}
	//extendemos el prototipo del Gato
	Gato.prototype.imprime = function() {
		console.log( this.msg );
	}
	//funcion estatica no es necesario instaciar un obj para llamarla
	Gato.impremeEstatico = function ( msg ){
		console.log( msg );
	}
	//test
	gato = new Gato('hola mundo');
	gato.imprime();
	Gato.impremeEstatico('Adios mundo cruel');

Que pasaria si en lugar de Gato se llamara `jQuery` o `$`.
