$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 600) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
});