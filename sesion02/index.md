<script type="text/javascript" src="../js/jquery.snippet.js"></script>
<link rel="stylesheet" type="text/css" href="../css/jquery.snippet.css" />
<script language="Javascript"  type="text/javascript">
$(function() {
	google_api = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
	$("pre").snippet("html", {style:'darkness'});
	$('#jqueryInput').val(google_api);
	$('#jqueryInput').focus( function(google_api){
		$(this).select();
	}).blur(function(){
		$(this).val(google_api);
	});
});
</script>

Sesión 02 - Conociendo jQuery
=============================================================================

Introducción a **jQuery**
------------------------------------------------------------------------------------------

**jQuery** es una biblioteca de _JavaScript_, creada inicialmente por [John Resig](http://ejohn.org/), que nos permite simplificar la manera de interactuar con los documentos **HTML**, manipular el árbol **DOM**, manejar eventos, desarrollar animaciones y agregar interacción con la técnica **AJAX** a páginas web.

> Extracto: <http://es.wikipedia.org/wiki/JQuery>


Agregando **jQuery**
------------------------------------------------------------------------------------------

Una vez que tenemos la libreria [__jQuery más reciente__](http://docs.jquery.com/Downloading_jQuery), lo siguiente es incluir la libreria en nuestros documentos html, esto lo hacemos, agregando el script dentro de la cabecera del documento.


<pre>&lt;head&gt;
  &lt;!-- agregando libreria jQuery --&gt;
  &lt;script type='text/javascript' src='js/jquery1.7.3.js'&gt;&lt;/script&gt;
&lt;/head&gt;</pre>

Por otra parte tambien puedes agregar la libreria directo del servidor de google

<input id='jqueryInput' value=''>


Selectores con **jQuery**
------------------------------------------------------------------------------------------

Quizás la propiedad más significativa de **jQuery** es su flexibilidad para hacer consultas a través del **DOM**(de ahí el nombre).

**jQuery** basicamente nos permite hacer 3 tipos de consultas:

 - [Consultas **CSS**]
 - [Consultas **xPath**](http://www.ibm.com/developerworks/xml/library/x-xpathjquery/)
 - [Consultas **Trasversales**]


Por cuestiones del alancance de este manual, sólo veremos las consultas __CSS__ y algunos metodos __trasversales__, dejando un poco de lado las consultas **xPath** ya que casi no se usan pero es bueno que el lector sepa que existen y que tambien son una forma de acceder a los elementos.

En el capitulo pasado conocimos la anatomia de __CSS__ si usted tiene alguna duda sobre los selectores CSS que usaremos le invito a consultar la siguiente tabla:

 - [lista de selectores css](../recursos/selectores_css.html)

 
### Trasversatilidad

La transversatilidad es un [conjunto de metodos](http://api.jquery.com/category/traversing/) definidos por __jQuery__ para refinamiento de selectores, para explicar esto ocuparemos 2 funciones.

 - **find**: Nos permite realizar una consulta sobre un objeto jQuery.
 - **filter**: Nos permite realizar un filtrado, descartando elementos, sobre un objeto jQuery.

Imaginemos que tenemos una _tabla_ que tiene como atributo **id** el valor **idTabla**, el cual queremos accecer a todos sus elementos th, una forma de hacerlo seria:

	$("#idTabla th").css('background', '#ddd');

Otra alternativa es usar el metodo find para buscar en un objeto de jQuery el cual me representa una rama del DOM.

	$("#idTabla").find('th').css('background', '#ddd');


Lista de ejemplos:
------------------------------------------------------------------------------------------

 1. [Selectores con **CSS**](ejemplos/selector_css.html)
