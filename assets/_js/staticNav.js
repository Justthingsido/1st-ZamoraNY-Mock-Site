
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height();
    if ($(window).scrollTop() > navHeight) {
      $('.header-position').addClass('fixed');
    }
    else {
      $('.header-position').removeClass('fixed');
    }
 });
});
