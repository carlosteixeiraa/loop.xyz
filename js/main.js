AOS.init();

$(document).ready(function() {
    $('nav a[href*=\\#]').bind('click', function(e) {
      e.preventDefault(); 
      var target = $(this).attr("href"); 
  
      $('html, body').stop().animate({
        scrollTop: ( $(target).offset().top - 100 ) 
      }, 600, function() {
        location.hash = target;
      });
  
      return false;
    });
  });