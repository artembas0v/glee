$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.products__content', {
    selectors: {
      control: '.filter__btn'
    }
  });

  var mixer = mixitup('.new-design__content', {
    selectors: {
      control: '.new-design__btn'
    }
  });

  

});