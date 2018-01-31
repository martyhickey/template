 $(document).ready(function(){

  $('.testimonials').bxSlider({
    auto: true,
    pager: false,
    controls: false,
    slideMargin:3,
    speed: 2000,
    pause: 6000,
  });

  $('.adverts').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 210,
    slideMargin: 15
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});
