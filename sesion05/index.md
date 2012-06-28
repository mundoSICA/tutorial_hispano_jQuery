<script type="text/javascript" src="../js/jquery.snippet.js"></script>
<link rel="stylesheet" type="text/css" href="../css/jquery.snippet.css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<script language="Javascript"  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>
<script>
$(function() {
	console.log($.fx.speeds);
});
</script>

# Sesión05. - Efectos y modificaciones sobre el DOM.

## insertbefore

	$('<p>Test</p>').insertBefore('#selector');

## before

	$('#selector').before('<p>Test</p>');

## insertafter

	$('<p>Test</p>').insertAfter('#selector');

## after

	$('#selector').after('<p>Test</p>');

## append

	$('#selector').append('<p>Test</p>');

## appendto

	$('<p>Test</p>').appendTo('#selector');


## fadeIn

	$('%selector').fadeIn();

Tambien puede llevar un argumento como `slow`, `fast`.

	$('%selector').fadeIn('slow');

ó agregar un valor en milisegundos.

	$('%selector').fadeIn('slow');


Los valores de `slow`, `fast`, estan predeterminados en la libreria usted puede ver los valores, predeterminados de los efectos.

	console.log($.fx.speeds);

## Animate

Forma simple:

	$("selector").animate('width', "500px");

Forma relativa:

	$("selector").animate({"left": "+=50px"}, "slow");

Multiples parametros.

	$("selector").animate({
		width: "70%",
		opacity: 0.4,
		marginLeft: "0.6in",
		fontSize: "3em",
		borderWidth: "10px"
	}, 1500 );

## show

forma simple.

	$('selector').show();

forma con velocidad.

	$('slector').show('fast');

## hide

forma simple.

	$('selector').hide();

forma con velocidad.

	$('selector').hide('fast');

## Lecturas recomendadas.

 - [Categoría efectos **jQuery**](http://api.jquery.com/category/effects/)
 - [Manipulación **jQuery**](http://api.jquery.com/category/manipulation/)
