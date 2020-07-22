AOS.init({
  duration: 800,
  easing: 'slide-up',
  once: true
 });



 $('.home-slider').owlCarousel({
  loop:true,
  autoplay: true,
  margin:0,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 1000,
  nav:true,
  autoplayHoverPause: true,
  items: 1,
  responsive:{
    0:{
      items:1,
      nav:false
    },
    600:{
      items:1,
      nav:false
    },
    1000:{
      items:1,
      nav:true
    }
  }
});

$('.home-slider-loop-false').owlCarousel({
  loop:false,
  autoplay: true,
  margin:0,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  nav:true,
  autoplayHoverPause: true,
  items: 1,
  responsive:{
    0:{
      items:1,
      nav:false
    },
    600:{
      items:1,
      nav:false
    },
    1000:{
      items:1,
      nav:true
    }
  }
});