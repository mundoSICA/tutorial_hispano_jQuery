$(function() {
	$("td[style]").hover(function() {
		var c=$(this).attr('style').split(':').pop();
		$('h1').css('color',c);
		$('body').css('background',c);
		$('#input').val(c).css('color',c);
	});
	//
	$('#input').focus(function (){
		$(this).select();
	});
});
