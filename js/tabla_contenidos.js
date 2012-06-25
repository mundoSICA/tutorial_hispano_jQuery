$(function (){
	$h2 = $('h2');
	$('<h2>Tabla de contenidos</h2><ul id="lista_contenidos"><ul>')
		.appendTo('#tabla_contenidos');
	
	$.each($h2, function(key, value) {
		$('<li>' + $(value).html() + '</li>').appendTo('#lista_contenidos');
		$(value).attr('name', $(value).text() );
	});
	
});
