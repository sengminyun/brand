AOS.init({
  duration: 800,
  easing: 'slide-up',
  once: true
 });

(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });


	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    nav:true,
    autoplayHoverPause: true,
    items: 2,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
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
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
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

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin: 30,
    smartSpeed: 1000,
    dots: true,
    responsive:{
      600:{
        items: 2
      },
      900:{
        items: 3
      }
    }
  });

  $('.centernonloop2').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
  });



	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();



})(jQuery);
$(function(){
  $('.bg1').mouseover(function(){
    $('.bg1-more').stop().fadeIn();
  });
  $('.bg1').mouseleave(function(){
    $('.bg1-more').stop().fadeOut();
  });
  $('.bg2').mouseover(function(){
    $('.bg2-more').stop().fadeIn();
  });
  $('.bg2').mouseleave(function(){
    $('.bg2-more').stop().fadeOut();
  });
  $('.bg3').mouseover(function(){
    $('.news-more1').stop().fadeIn();
  });
  $('.bg3').mouseleave(function(){
    $('.news-more1').stop().fadeOut();
  });
  $('.bg4').mouseover(function(){
    $('.news-more2').stop().fadeIn();
  });
  $('.bg4').mouseleave(function(){
    $('.news-more2').stop().fadeOut();
  });
})



// $(function(){
//   $('.navbar').mouseover(function(){
//     $('.navbar-brand').css('color', '#000');
//     $('.nav-link').css('color','#000');
//     $('.fa-bars').css('color','#000');
//   });
//   $('.navbar').mouseleave(function(){
//     $('.navbar-brand').css('color', '#fff');
//     $('.nav-link').css('color','#fff');
//     $('.fa-bars').css('color','#fff');
//   });
//   $('.nav-link').click(function(){
//     $('.active').css('color','#ff7404')
//   });
// });

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 200) {
    $(".navbar").addClass("bg");
    $('.navbar').css('box-shadow','0px 0px 3px 0px #ccc');
    $('.navbar-brand').css('color', '#000').stop();
    $('.nav-link').css('color','#000').stop();
    $('.fa-bars').css('color','#000').stop();
  }
});
$(window).on("scroll", function() {
  if($(window).scrollTop() <= 100){
    $(".navbar").removeClass("bg");
    $('.navbar-brand').css('color', '#fff');
    $('.nav-link').css('color','#fff');
    $('.fa-bars').css('color','#fff');
    $('.navbar').css('box-shadow','none');
  }
});


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

$(function(){
  $('.tab1').click(function(){
    $('.news').css('display','block');
    $('.tab1>h4').css('color','#ff7404');
    $('.event').css('display','none');
    $('.tab2>h4').css('color','#000');
  });
  $('.tab2').click(function(){
    $('.news').css('display','none');
    $('.tab2>h4').css('color','#ff7404');
    $('.event').css('display','block');
    $('.tab1>h4').css('color','#000');
  });
});
