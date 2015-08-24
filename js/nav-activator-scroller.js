$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('nav').removeClass('passive');
        $('nav').addClass('fixed');
        $('#page section').each(function(i) {
            if ($(this).position().top <= windscroll + 40) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav li.active').removeClass('active');
        $('nav').addClass('passive');
    }

}).scroll();

$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1500);

    return false;

})