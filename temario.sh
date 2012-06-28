# Este script te genera el temario.
# en formato markdown, para que posteriormente
# se genere el archivo html
# Autor: Fitorec <chanerec@gmail.com>
function temario_capitulo {
	grep -ERhio "^<h[1-5]>(.*)</h[0-9]>" sesion0$1/index.html | \
				sed -r "s/^<h([1-3]+)>(.*)<\/h[1-3]>/\1- [\2](.\/sesion0${1}\/index.html)/" | \
				sed -r 's/^2/ /;s/^3/  /;s/^1-/## /';
}

temario_capitulo 1
temario_capitulo 2
temario_capitulo 3
temario_capitulo 4
temario_capitulo 5
