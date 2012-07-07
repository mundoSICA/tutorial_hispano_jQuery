<script  type="text/javascript">
$(function() {
	$("pre").snippet("javascript", {style:'darkness'});
});
</script>
<script  type="text/javascript">
$(function() {
	$('ol li').one('click', function(){
		$(this).css("color", "red");
		alert($(this).text());
	});
});
</script>


#  Ejemplo one

Analice el siguiente código HTML:

	<ol>
		<li>uno</li>
		<li>dos</li>
	</ol>

Ahora tenemos el siguiente código **jQuery**:

	$(function() {
		$('ol li').one('click', function(){
			$(this).css("color", "red");
			alert($(this).text());
		});
	});

¿Que pasa?, cuando le damos click una vez y cuando le damos otras veces...

<ol>
	<li>uno</li>
	<li>dos</li>
</ol>
