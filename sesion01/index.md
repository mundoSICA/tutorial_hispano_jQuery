<script  type="text/javascript">
$(function() {
	google_api = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
	$pre = $("pre");
	console.log($pre);
	$($pre[0]).snippet("html", {style:'darkness'});
	$($pre[1]).snippet("javascript", {style:'darkness'});
	$($pre[2]).snippet("javascript", {style:'darkness'});
	
	$('#jqueryInput').val(google_api);
	$('#jqueryInput').focus( function(google_api){
		$(this).select();
	}).blur(function(){
		$(this).val(google_api);
	});
});
</script>

Sesión 1 - Introducción a jQuery
==========================================================================================

Descripción de este manual
------------------------------------------------------------------------------------------

Este es un pequeño manual _básico de **jQuery**_, el cual consta de 5 sesiones, cada una diseñada para una clase de 2 horas.

El proposito de este manual es ser una ayuda en la comprensión de los conceptos básicos de esta libreria, al concluir la lectura de este manual se espera que el lector sea capaz: de comprender casi cualquier código en **jQuery** y continuar su aprendizaje por su cuenta.

### Licencia

Esta documentación esta licenciada bajo **_[atribución creative commons](http://creativecommons.org/licenses/by/2.5/mx/)_**, _**sientase libre de modificar, compartir y redistribuir**_, si desear colaborar te invito a que revises el [repositorio publico](https://github.com/mundoSICA/tutorial_hispano_jQuery).


<a class='button' href="https://github.com/mundoSICA/tutorial_hispano_jQuery/archive/gh-pages.zip">Descargar Manual</a>

Breve referencia **HTML**
------------------------------------------------------------------------------------------

**HTML**, siglas de _HyperText Markup Language_ («lenguaje de marcado de hipertexto»), hace referencia al [lenguaje de marcado](http://es.wikipedia.org/wiki/Lenguaje_de_marcado) para la elaboración de páginas web. Se utiliza para describir la estructura y el contenido en forma de texto. El **HTML** se escribe en forma de «etiquetas», rodeadas por _corchetes angulares_ (`<`,`>`). **HTML** también puede describir, hasta un cierto punto, la apariencia de un documento aunque resulta una practica más recomendable incluir hojas de estilos(**CSS**) para este proposito, tambien suele incluir scripts (como [JavaScript](http://es.wikipedia.org/wiki/JavaScript)), el cual puede afectar el comportamiento de navegadores web. _fuente: <http://es.wikipedia.org/wiki/HTML>_

Un ducumento **Html** tiene mas o menos el siguiente aspecto:

	<!DOCTYPE html>
	<html lang="es">
	<head>
	  <title>Título</title>
	</head>
	<body>
	  <h1>Documento de ejemplo</h1>
	  <div>
		  <h1>Contenido dentro del div</h1>
		  <h2>sub título</h2>
		  <p>parrafo 1</p>
		  <p>parrafo 2</p>
	  </div>
	</body>
	</html>

Las primeras dos lineas describen el tipo de archivo en este caso es **HTML 5** y la lengua a utilizar en este caso español.

	<!DOCTYPE html>
	<html lang="es">

> A lo largo de esta manual se usara **HTML 5** almenos que se diga lo contrario.

Posteriormente viene el head, el cual en este caso contiene solo el titulo del documento, pero aquí se suelen poner tanto información de indexación como solicitudes de archivos necesarios como hojas de estilos y funcionalidades en javascript.

	<head>
	  <title>Título</title>
	</head>

Sí desea conocer un poco mas sobre etiquetas validas puedes ver el siguiente ejemplo: [01.01.Etiquetas\_head.html](../ejemplos/01.01.Etiquetas_head.html).

## Concepto **DOM**

El **Modelo en Objetos para la Representación de Documentos** ó **DOM** (_Document Object Model_), es un estándar de objetos para representar documentos **HTML** y **XML**. A través de el, los programas pueden acceder y modificar el contenido, estructura y estilo.

La siguiente imagen es una **representación** del **DOM**  del documento visto anteriormente:

![Imagen Dom](../img/dom.png)

La imagen anterior muestra el documento **Html** en forma de un arbol. Esta representación es conocida como un arbol **DOM**.

> El responsable del DOM es el _World Wide Web Consortium_ ([**W3C**](http://www.w3.org/DOM/)).

Breve referencia **CSS**
------------------------------------------------------------------------------------------

_Cascading Style Sheets_ (hojas de estilo en cascada). CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML (y por extensión en XHTML).

> El responsable del CSS es tambien el _World Wide Web Consortium_ ([**W3C**](http://www.w3.org/Style/CSS/)).

### Anatomía CSS

Con __CSS__ podemos hacer declaraciones de estilo sobre los elementos **HTML**, para esto el [**W3C** ha definido una serie de selectores](../recursos/selectores_css.html) los cuales siguen el siguiente formato:

![Imagen Dom](../img/anatomia_basica_css.png)


**JQuery** hace uso de estos selectores para interactuar con el **DOM**, por esta razón es importante que el lector comprenda **CSS** lamentablemente el alcance de este manual no contempla la explicación detallada de **CSS**.

> Para nuestros fines basta con que conozcamos bien el uso de [selectores **CSS**](../recursos/selectores_css.html).


Software a usar
------------------------------------------------------------------------------------------

Para desarrollar sitios de Internet con **jQuery** basicamente necesitamos 4 cosas:

1. Editor de texto
2. Navegador web.
3. La libreria jQuery.
4. Servidor web(para la sección `ajax`, `json`).


1. Editor de texto:
------------------------------------------------------------------------------------------

El editor de texto es la herramienta básica para editar archivos: __HTML_, __javaScript__ y __CSS__. Hay muchos editores muy buenos y usted puede puede usar el editor de su agrado, entre los que recomendamos son los siguientes (_ordenados según mis preferencias_):

 - [Geany](http://www.geany.org/Download/Releases)
 - [Vim](http://www.vim.org/download.php)
 - [Emacs](http://www.gnu.org/software/emacs/)
 - [Kate](http://kate-editor.org/)
 - [Notepad++](http://notepad-plus-plus.org/download/v6.1.3.html)
 - [TextMate](http://kate-editor.org/)
 - [sublimeText](http://www.sublimetext.com/)


Te recomiendo el [geany](http://www.geany.org/Download/Releases) el cual esta disponible para multiples Sistema operativos, ademas de agregarle el [geany-web-ninja](http://mundosica.github.com/geany-web-ninja/) el cual es una colección de archivos de configuración orientadas al desarrollo web. 


2. Navegador web:
------------------------------------------------------------------------------------------

Por cuestiones de pruebas te recomiendo que tengas todos los navegadores que esten disponibles en tu __S.O.__, sin embargo para  desarrollar/depurar te comiendo el [__firefox__](http://www.mozilla.org/en-US/firefox/all.html#es-MX) con la extensión [__firebug__](https://addons.mozilla.org/en-US/firefox/addon/firebug/?src=search).


![Imagen firefox con el complemento firebug](../img/firefox_con_firebug.png)


Otra de las ventajas que tiene es que a partir de la [versión 11](http://arstechnica.com/business/2012/03/firefox-11-released-with-style-editor-and-3d-dom-viewer/) de **Mozilla Firefox**, trae integrado el _**3D inspector**_ que nos permite analizar la profundidad de las capas __CSS__ desde una forma gráfica, como podemos ver a continuación:


![Imagen firefox con el complemento firebug](../img/3d_inspector.png)

> Otra razón para usar firefox es que es un proyecto de codigo libre y abierto, distribuyendose bajo [triple licencia](http://es.wikipedia.org/wiki/Mozilla_Firefox#Licencias): <ul><li>Licencia Pública de Mozilla (MPL)</li><li>Licencia pública general de GNU (GPL)</li><li>Licencia pública general reducida de GNU (LGPL).</li></ul>



3. La libreria jQuery.
------------------------------------------------------------------------------------------

**jQuery**: biblioteca de _JavaScript_, fue creada por [John Resig](http://ejohn.org/), permite simplificar la manera de interactuar con los documentos **HTML**, manipular el árbol **DOM**, manejo de eventos, desarrollar animaciones y agregar interacción con la técnica **AJAX** en páginas web.

### Evolución de jQuery

**JQuery** es una libreria en constante cambio, es recomendable usar la [libreria estable más reciente](http://docs.jquery.com/Downloading_jQuery), ya que en cada nueva versión se integran caracteristicas nuevas al tiempo que se mejoran las anteriores, la imagen siguiente es una compativa en el rendimiento de <strong style='background:#36c;color:white;text-shadow:none'>jQuery 1.6.4</strong> vs <strong style='background:#dc3912;color:white;text-shadow:none'>jQuery 1.7</strong> en distintos navegadores:


![compartiva jQuery1.6.4 vs Query1.7](../img/compartiva_jquery_1.6.4_vs_1.7.png)

> **Fuente:** <http://blog.jquery.com/2011/11/03/jquery-1-7-released/>

### Cambios entre 1.7 y 1.8

Cuando **jQuery** migro a la versión **1.8** se hicieron algunos cambios importantes, por ejemplo la versión **1.8** es más pequeña que **1.7**, las funciones css() y animate() libres de prefijos(`-webkit`, `-moz`, `-ms`, `-o`), se repararon 160 errores, mayor flexibilidad en animaciones y se mejoraron las consultas.


> **Fuente:** <http://blog.jquery.com/2012/08/09/jquery-1-8-released/>

### Cambios entre 1.8 y 1.9

<!-- Esto esta Pendiente -->

> **Fuente:** `Agregar`

### Cambios en la futura versión 2.0

En estos momentos la libreia **jQuery** esta evolucionando a la versión 2.0, ....

> **Fuente:** <http://blog.jquery.com/2013/04/09/jquery-2-0-beta-3-released/>


### Agregando **jQuery**

Una vez que tenemos la libreria [__jQuery__](http://docs.jquery.com/Downloading_jQuery), lo siguiente es incluir la libreria en nuestros documentos **HTML**, esto lo hacemos, agregando el script dentro de la cabecera del documento.


	<head>
		<!-- agregando libreria jQuery -->
		<script type='text/javascript' src='js/jquery1.9.js'></script>
	</head>

Por otra parte tambien puedes agregar la libreria directo del servidor de **google API**:

<input id='jqueryInput' value=''>

4. Servidor web.
------------------------------------------------------------------------------------------

Un servidor web es un equipo que esta en la escucha del puerto http(`80`), para nuestros fines nos es suficiente con instalar [**apache web server**](http://httpd.apache.org/), sin embargo cuando se habla de servidor web casi siempre se incluye **apache**, **php** y **msql**,si deseas tener todos estos paquetes los cuales te seran utiles a futuro te recomiendo instalar un [**xampp**](http://www.apachefriends.org/en/xampp.html) el cual esta disponible para:

 - GNU/Linux
 - Mac &reg;
 - Windows &reg;

Selectores con **jQuery**
------------------------------------------------------------------------------------------

La propiedad más significativa de **jQuery** es su flexibilidad para hacer consultas a través del **DOM**(de ahí el nombre).

**jQuery** basicamente nos permite hacer 3 tipos de consultas:

 - [Consultas **CSS**]
 - [Consultas **xPath**](http://www.ibm.com/developerworks/xml/library/x-xpathjquery/)
 - [Consultas **Trasversales**]


Este manual explica las consultas __CSS__ y algunos metodos __trasversales__, dejando un poco de lado las consultas **xPath** ya que casi no se usan, pero es bueno que el lector sepa que existen y que tambien son una forma de acceder a los elementos.

 
### Trasversatilidad

Se ha explicado como funciona [la anatomia **CSS**](#breve-referencia-css), falta explicar la **transversatilidad**, la cual  [es un conjunto de metodos definidos por __jQuery__](http://api.jquery.com/category/traversing/) para refinamiento de selectores, para explicar esto ocuparemos 2 funciones.

 - **find**: Nos permite realizar una consulta sobre un objeto jQuery.
 - **filter**: Nos permite realizar un filtrado, descartando elementos, sobre un objeto jQuery.

Imaginemos que tenemos una _tabla_ que tiene como atributo **id** el valor **idTabla**, el cual queremos accecer a todos sus elementos `th`, una forma de hacerlo seria:

	$("#idTabla th").css('background', '#ddd');

Otra alternativa es usar el metodo `find` para buscar en un objeto de **jQuery** el cual me representa una sub-rama del `DOM` en `idTabla`.

	$("#idTabla").find('th').css('background', '#ddd');


Si existe una alternativa mejor a otra ¿cual crees que sea la mejor?, ¿por que?.


Lista de ejemplos:
------------------------------------------------------------------------------------------

 1. [Selectores con **CSS**](ejemplos/selector_css.html)


Enlaces externos recomendables:
------------------------------------------------------------------------------------------

 - [Libro **CSS** Avanzado](http://www.librosweb.es/css_avanzado/)
 - [Secuencias de caracteres de escape __CSS__](http://mathiasbynens.be/notes/css-escapes)
 - [Como maneja _CSS_ los errores.](http://www.xanthir.com/blog/b4JF0)
 - [**Sitio oficial jQuery**](http://jquery.com/)
 - [**Foro de jQuery**](http://forum.jquery.com/)
 - [**Documentación jQuery**](http://api.jquery.com/)
 - [**IRC de freeNode canal jQuery**](http://webchat.freenode.net/?channels=#jquery)
