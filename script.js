$(function() {

    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  
  
      $('.slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 0, 
        speed: 10000, 
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 0, 
              speed: 10000, 
              pauseOnFocus: false,
              pauseOnHover: false,
              pauseOnDotsHover: false,
            }
          }]
    });
  });