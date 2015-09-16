$(document).ready(function () {
	
	$('.toggle li').click(function () {
		$('div.panel').slideUp('1000');
		$('li').children('span').html('+');	
		var text = $(this).children('div.panel');

		if (text.is(':hidden')) {
		text.slideDown('1000');		
		$(this).children('span').html('&ndash;');		
		} else {
		text.slideUp('1000');
		$(this).children('span').html('+');		
		}
		
	});

});