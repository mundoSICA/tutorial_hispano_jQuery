<script  type="text/javascript">
$(function() {
	//mostrando la info del pre
	$("pre").snippet("javascript", {style:'darkness'});
	$('a[href^="../ejemplos/"]').linkEjemplos();
});
</script>

# Sesión 6 - Organización de código.


## Organizando el código en archivos.

Como sabemos con **jQuery** podemos agregar multiples funciones para manejar un evento, y estas funciones se van a ir ejecutando en formato de cola.

Ahora imagine que tiene 2 documentos, uno con el nombre **titulos.js** con el siguiente contenido:

	$(document).ready(function(){
		//Cambiamos el color para el titulo nivel 2
		$('h2').css('color', 'green');

		//Agregamos un evento para h1
		$('h1').hover( function(){
			$(this).css('color', 'red');
		},function(){
			$(this).css('color', '#222');
		});
	});


Por otra parte tenemos el archivo con el nombre **enlaces.js** con el siguiente contenido:

	$(document).ready(function(){
		//Obliga abrir los enlaces en una pestaña nueva
		$('a').attr('target', 'blank');
	});

Si mandamos a llamar ambos documentos de la manera siguiente:

	<script src="js/titulos.js"></script>
	<script src="js/enlaces.js"></script>

¿Que crees que pase?.

Es una practica bastante comun separar la logica en archivos distintos de esta manera tenemos mas ordenado nuestro código, de echo así es como funciona este manual donde tenemos un archivo que se encarga de manejar la tabla de los contenidos.

[Ejemplo - tabla de contenidos](../ejemplos/06.tabla_contenidos.html)


## jQuery Plugins.

Observe el siguiente código:

	(function($){
		$.yourPluginName = function(el, radius, options){
			// To avoid scope issues, use 'base' instead of 'this'
			// to reference this class from internal events and functions.
			var base = this;
			
			// Access to jQuery and DOM versions of element
			base.$el = $(el);
			base.el = el;
			
			// Add a reverse reference to the DOM object
			base.$el.data("yourPluginName", base);
			
			base.init = function(){
				if( typeof( radius ) === "undefined" || radius === null ) radius = "20px";
				
				base.radius = radius;
				
				base.options = $.extend({},$.yourPluginName.defaultOptions, options);
				
				// Put your initialization code here
			};
			
			// Sample Function, Uncomment to use
			// base.functionName = function(paramaters){
			// 
			// };
			
			// Run initializer
			base.init();
		};
		
		$.yourPluginName.defaultOptions = {
			radius: "20px"
		};
		
		$.fn.yourPluginName = function(radius, options){
			return this.each(function(){
				(new $.yourPluginName(this, radius, options));

			   // HAVE YOUR PLUGIN DO STUFF HERE
				
		
			   // END DOING STUFF

			});
		};
		
	})(jQuery);

### Uso.

	$(function() {
		$("#round-me").yourPluginName("20px");
	});

[Ejemplo - plugin jQuery](../ejemplos/06.ejemplo_plugin.html)

> **Fuente:** <http://css-tricks.com/snippets/jquery/jquery-plugin-template/>


