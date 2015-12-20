
//mobile-nav toggle
$(document).ready(function(){
  var $nav = $(".mobile-nav");
  $('.mobile-nav-toggle').click(function(show){
    show.stopPropagation();
    $nav.slideToggle(700); //or .site-nav / .mobile-nav

  });

  $(document).click(function () { // you don't need the else part to fadeout
       if ($nav.is(":visible")) {
           $nav.fadeOut(700);

       }
    });

});
