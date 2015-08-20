$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', 'white');
          $('#navbar').css('opacity', '0.9');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});