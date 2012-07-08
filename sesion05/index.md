<script  type="text/javascript">
$(function() {$("pre").snippet("javascript", {style:'darkness'});});
</script>

Sesión 5 - Ajax y buenas prácticas.
=============================================================================

## Ajax.

**Ajax**, acrónimo de Asynchronous JavaScript And XML (_JavaScript asíncrono y XML_), es una técnica de desarrollo web para crear aplicaciones interactivas o RIA (Rich Internet Applications). Estas aplicaciones se ejecutan en el cliente, es decir, en el navegador de los usuarios mientras se mantiene la comunicación asíncrona con el servidor en segundo plano. De esta forma es posible realizar cambios sobre las páginas sin necesidad de recargarlas, lo que significa aumentar la interactividad, velocidad y usabilidad en las aplicaciones.

En concepta parte del hecho que desde javascript podemos realizar solicitudes( _httpRequests_ ) y que por medio que _javascript_ no espera el resultado de dicha solicitud para continuar su flujo, veamos un ejemplo con javascript puro.


#### Opteniendo un httpRequests.

	//regresa un Requests Object
	function createRequestObject() {
        var ro;
        if (window.XMLHttpRequest) {
                ro = new XMLHttpRequest();
        } else {
                ro = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (!ro)
                debug("Couldn't start XMLHttpRequest object");
        return ro;
	}

#### Manejador de la respuesta.

	function handleResponse() {
    if (http.readyState != 4 && http.readyState != 3)
        return;
    if (http.readyState == 3 && http.status != 200)
        return;
    if (http.readyState == 4 && http.status != 200) {
        clearInterval(pollTimer);
        inProgress = false;
    }
    // In konqueror http.responseText is sometimes null here...
    if (http.responseText === null)
        return;

    while (prevDataLength != http.responseText.length) {
        if (http.readyState == 4  && prevDataLength == http.responseText.length)
            break;
        prevDataLength = http.responseText.length;
        var response = http.responseText.substring(nextLine);
        var lines = response.split('\n');
        nextLine = nextLine + response.lastIndexOf('\n') + 1;
        if (response[response.length-1] != '\n')
            lines.pop();

        for (var i = 0; i < lines.length; i++) {
            // ...
        }
    }

    if (http.readyState == 4 && prevDataLength == http.responseText.length)
        clearInterval(pollTimer);

    inProgress = false;
	}

#### Usandolos

	function startProcess(dataUrl) {
        http = createRequestObject();
        http.open('get', dataUrl);
        http.onreadystatechange = handleResponse;
        http.send(null);

        pollTimer = setInterval(handleResponse, 1000);
	}

## Ajax y Jquery.

#### Ejemplo básico

	$.ajax({
		url: 'ajax/test.html',
		success: function(data) {
			$('.result').html(data);
			alert('Load was performed.');
		}
	});

### Quitando la opción asincrona.

Observe el siguiente código.
	
	var datos  = null;
	$.ajax({
		url: 'ajax/test.html',
		success: function(data) {
			datos = data;
		}
	});
	console.log(datos);

Datos sera `null`, ya que la respuesta es asincrona es decir `console.log()` no espera la finalización de `$.ajax` para ejecutarse, hacer `async` igual a `false` resulta una opción util para esta logica.

	var datos  = null;
	$.ajax({
		url: 'ajax/test.html',
		//detiene la ejecución.
		async : false,
		success: function(data) {
			datos = data;
		}
	});
	console.log(datos);	

Otra opción para esperar que ajax se haya ejecutado para realizar determinada acción seria encaminar la funcion `done` como se muestra acontinuación.

	var datos  = null;
	$.ajax({
		url: 'ajax/test.html',
		success: function(data) {
			datos = data;
		}
	}).done(function( msg ) {
		console.log(datos);}
	);


#### Ejemplo Manejando el error.

Si somos detallistas nos daremos cuenta que `console.log(datos);` no garantiza que los datos no sean nulos, pues la respuesta puede llegar a fallar y en este caso tal vez deseamos rellenar a datos con valores por defecto.

	var datos  = null;
	$.ajax({
		url: 'ajax/test.html',
		success: function(data) {
			datos = data;
		}
		error: function() {
			datos = {v1:'valor defecto 1', v2:'valor defecto 2'};
		}
	}).done(function( msg ) {
		console.log(datos);}
	);

## Otras funciones Ajax

Existen otras funciones definas para manejar respuestas asincronas para una detallado mas extenso se recomienda consultar la categoria **Ajax** de la api de **jQuery**:

 - <http://api.jquery.com/category/ajax/>
 - [Usando herramientas de calidad de código - por Anton Kovalyov (_inglés_)](http://anton.kovalyov.net/slides/gothamjs/)
 - [Principios para escribir JavaScript consistente e idiomático](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)

