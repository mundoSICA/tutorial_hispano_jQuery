<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>


# Código fuente de ejemplo.

	(function($) {
		//enables console.log() in all browsers for error messages
		$.fn.snippet = function(language,settings) {
			if(typeof language == "object"){settings = language;}
			if(typeof language == "string"){
				language = language.toLowerCase();
			}
		}
	});

**Ejemplo:** De muestra como se veria el código fuente en el _manual básico de jQuery_.

