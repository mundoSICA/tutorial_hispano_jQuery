<script src="../js/jquery-ui-1.8.21.custom.min.js"></script>
<script  type="text/javascript">
$(function() {
	//mostrando la info del pre
	$("pre").snippet("javascript", {style:'darkness'});
	//Sección efecto color cambiante
	colors = ['#FFB30C', '#58EC00', '#0087EC', '#EEEEEE', '#FF5A00' ];
	var i = 0;
	$box = $('div.box');
	animateLoop = function() {
	$($box).animate({backgroundColor:colors[(i++)%colors.length]
		}, 900, function(){
			animateLoop();
		});
	}
	animateLoop();
	//Enviando la info de las velocidades
	console.log($.fx.speeds);
});
</script><style type="text/css" media="all">
div.box{
	width: 100%;
	height: 200px;
	background:#666;
	border:1px solid #999;
}
</style>


Sesión 4 - Efectos y modificaciones sobre el DOM.
=============================================================================

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

## animate sobre un color.

Desgraciadamente efectos como los colores no funcionan del todo bien, anteriormente habia un plugin `jquery-plugin-color`que nos ayudaba a realizar integrar comportamiento pero ya no le han dado mantenimiento, sin embargo una forma de realizar determinada característica es por medio de [jQuery-Ui](http://jqueryui.com/download), del cual para este caso requerimos el nucleo **jQuery-Ui** (`core`),  el nucleo de los efectos (`Effects Core`) , y finalmente la opción `Effect "Highlight"`, una vez esto optenemos un archivo con el nombre `jquery-ui-1.8.21.custom.min.js` el cual contiene de forma compacta lo que requerimos, ahora lo siguiente es agregarla a la cabecera de nuestro archivo y hacer un tests:

#### Código HTML.

	<div class="box"></div>

#### Código CSS.

		div.box{
			width: 100%;
			height: 200px;
			background:#666;
			border:1px solid #999:
		}
#### Código jQuery.

	colors = ['#FFB30C', '#58EC00', '#0087EC', '#EEEEEE', '#FF5A00' ];
	var i = 0;
	$box = $('div.box');
	animate_loop = function() {      
	$($box).animate({backgroundColor:colors[(i++)%colors.length]
		}, 900, function(){
			animate_loop();
		});
	}
	animate_loop();

#### Resultado

<div class="box"></div>


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

 - [Categoría efectos **jQuery** - http://api.jquery.com/category/effects/](http://api.jquery.com/category/effects/)
 - [Manipulación **jQuery** - http://api.jquery.com/category/manipulation/](http://api.jquery.com/category/manipulation/)
 - [Efectos jQuery-Ui - http://jqueryui.com/download](http://jqueryui.com/download)
