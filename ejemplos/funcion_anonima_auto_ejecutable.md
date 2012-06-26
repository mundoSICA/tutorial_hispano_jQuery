<script type="text/javascript" src="../js/jquery.snippet.js"></script>
<link rel="stylesheet" type="text/css" href="../css/jquery.snippet.css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<script language="Javascript"  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>

<h1 id='tituloPrincipal'>Función anonima auto ejecutable.</h1>

Atienda al siguiente código:

	<h1 id='tituloPrincipal'>Función anonima auto ejecutable.</h1>
	<script>
		(function (id){
			console.log(document.getElementById(id).innerText)
		})('tituloPrincipal');
	<script>

Como resultado manda a la bitacola de la consola el mensaje `Función anonima auto ejecutable`, como se puede ver en esta página al observar la consola.


<script language="Javascript"  type="text/javascript">
(function (id){
    console.log(document.getElementById('tituloPrincipal').innerHTML);
})('tituloPrincipal');
</script>
