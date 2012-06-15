Manual de JQuery
==========================================================================================

Este es un manual de jQuery en linea, el cual lo puedes visitar desde:

- <http://mundosica.github.com/tutorial_hispano_jQuery/>

En este espacio(_brazo_) solo hay documentación para desarrolladores.

Documentación para colaboradores.
==========================================================================================

## Obteniendo el proyecto.

Lo primero que tienes que hacer es realizar una ramificación de este proyecto(_Fork_). Esto lo haces desde el icono de fork que esta en parte superior de [esta página](https://github.com/mundoSICA/tutorial_hispano_jQuery) **Fork**.

Una vez que tengas tu **fork** del proyecto, lo siguiente es clonarlo en tu computadora.

Por ejemplo mi usaurio es @fitorec y mi **fork** estaría ubicado en <https://github.com/fitorec/tutorial_hispano_jQuery> por lo cual el clone que tengo que hacer seria:

	git clone git@github.com:fitorec/tutorial_hispano_jQuery.git


Una vez que tenga la copia nos pasamos a la rama _gh-pages_.

	git checkout gh-pages

## Como documentar:

La documentación la manejamos en formato [_markdown_](http://daringfireball.net/projects/markdown/syntax) puedes editar cualquier documento con extensión __.md__, ahora para probar los archivos para ello he elaborado un pequeño _script_ denominado _markdown2html_ el cual te genera un el archivo correspondiente __html__, por ejemplo si editaste el documento `/sesion02/index.md` puedes revisar la salida con la siguiente instrucción:

	./markdown2html ./sesion02/index.md

Esto nos genera  el archivo `./sesion02/index.html`, revisamos que los cambios sean correctos.

## Realizando confirmaciones y solicitudes de cambios.

Una vez que modificaste los archivos adecuados lo siguiente es confirmar tus cambios, suponemos que has modificado el archivo `./sesion02/index.md` el cual tenia determinado __errorX__ en la documentación, el cual corregiste y verificaste tus correcciones, ahora lo siguiente es agregar este cambio para la confirmación.

	git add ./sesion02/index.md

Una vez que agregamos los archivos modificados los siguiente es realizar la confirmación:

	git commit

Agregamos algún mensaje adecuado p.e. `corrección sobre el __errorX__ en el index de la sesión 2`, esto ayuda mucho si piensas compartir con nosotros dichos cambios ya que el mensaje nos describe los cambios realizados.


El siguiente paso es realizar la solicitud de cambios en el repositorio principal, para esto te debes de ir a __pull request__ en <https://github.com/mundoSICA/tutorial_hispano_jQuery/pull/new/gh-pages> la cual es la liga de solicitudes para la rama _gh-pages_.

