$(document).ready(function() {
  let sliderTimeout = 4000,
    sliderCharacterSpeed = 1000,
    sliderTextSpeed = 1200,
    clonedTextSlider = $(".text-carousel").clone();

  $(".text-carousel").append(clonedTextSlider[0].innerHTML);
  
  $(".character-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: false,
    autoplaySpeed: sliderCharacterSpeed,
    autoplayTimeout: sliderTimeout,
    navSpeed: sliderCharacterSpeed,
    autoplayHoverPause: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false
  });

  $(".text-carousel").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: false,
    autoplaySpeed: sliderTextSpeed,
    navSpeed: sliderTextSpeed,
    autoplayTimeout: sliderTimeout,
    center: true,
    autoWidth: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false
  });
  
  

  // OWL Navigation
  $(".character-carousel .owl-prev").on("click", function(event) {
    $(".text-carousel").trigger("prev.owl.carousel", sliderTextSpeed);
  });

  $(".character-carousel .owl-next").on("click", function(event) {
    $(".text-carousel").trigger("next.owl.carousel", sliderTextSpeed);
  });

  // OWL autoplay

});