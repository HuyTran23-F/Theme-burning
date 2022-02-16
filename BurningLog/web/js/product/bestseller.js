require([
    'jquery',
    'slick',
    'domReady!'
 ], function ($) {
    $(".main-banner-slider").slick({
       dots: false,
       prevArrow: false,
       nextArrow: false,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       slidesToScroll: 1
    });
 });
 
 