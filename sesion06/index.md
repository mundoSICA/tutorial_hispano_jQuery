<script  type="text/javascript">
$(function() {
	//mostrando la info del pre
	$("pre").snippet("javascript", {style:'darkness'});
	$('a[href^="../ejemplos/"]').linkEjemplos();
});
</script>

# Organización de código.

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

## Uso.

	$(function() {
		$("#round-me").yourPluginName("20px");
	});

[Ejemplo - plugin jQuery](../ejemplos/06.ejemplo_plugin.html)

> **Fuente:** <http://css-tricks.com/snippets/jquery/jquery-plugin-template/>


