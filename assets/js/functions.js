$(document).ready(function() {
  // SMOOTH SCROLL
	$('nav.main-nav ul.menu li a').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: $(this.hash).offset().top - 80
    	}, 1500);
  });

  // HOME MENU
  $('div.menu-icon').click(function(){
    $('div.menu-icon').toggleClass('is-open');
    $('nav.main-nav').toggleClass('is-open');
    $('nav.main-nav ul li').each(function(i){
      setTimeout(function(){
        $('nav.main-nav ul li').eq(i).toggleClass('active');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });

  });

  $('nav.main-nav ul.menu li a').click(function(){
    $('div.menu-icon').toggleClass('is-open');
    $('nav.main-nav').toggleClass('is-open');
    $('nav.main-nav ul li').each(function(i){
      setTimeout(function(){
        $('nav.main-nav ul li').eq(i).toggleClass('active');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });
  });
});


// SCROLL FUNCTIONS
$(window).scroll(function() {
  // Store in a variable the amount of pixels that user has scrolled
  var wScroll = $(this).scrollTop();

  //About
  if($('.article-about').offset().top - $(window).height()/2 < wScroll) {
    $('.article-about').addClass('slideIn');
  }

  if($('.about-cta').offset().top - $(window).height() < wScroll) {
    $('.about-cta div.col-3').addClass('slideX');
  }

  // Persovuses
  if($('.article-persovuses').offset().top - $(window).height()/2 < wScroll) {
    $('.article-persovuses').addClass('slideIn');
  }

  if($('.persovuses-cta').offset().top - $(window).height() < wScroll) {
    $('.persovuses-cta div.col-3').addClass('slideX');
  }


  // FTM
  if($('.article-ftm').offset().top - $(window).height()/2 < wScroll) {
    $('.article-ftm').addClass('slideIn');
  }

  if($('.ftm-cta').offset().top - $(window).height() < wScroll) {
    $('.ftm-cta div.col-3').addClass('slideX');
  }


  // Residencia
  if($('.article-residencia').offset().top - $(window).height()/2 < wScroll) {
    $('.article-residencia').addClass('slideIn');
  }

  if($('.residencia-cta').offset().top - $(window).height() < wScroll) {
    $('.residencia-cta div.col-3').addClass('slideX');
  }

  // On Time
  if($('.article-ontime').offset().top - $(window).height()/2 < wScroll) {
    $('.article-ontime').addClass('slideIn');
  }

  if($('.ontime-cta').offset().top - $(window).height() < wScroll) {
    $('.ontime-cta div.col-3').addClass('slideX');
  }

  // Octogon
  if($('.article-octogon').offset().top - $(window).height()/2 < wScroll) {
    $('.article-octogon').addClass('slideIn');
  }

  if($('.octogon-cta').offset().top - $(window).height() < wScroll) {
    $('.octogon-cta div.col-3').addClass('slideX');
  }


  // Latest Work
  if($('div.work-wrapper').offset().top - $(window).height()/2 < wScroll) {
    $('ul.grid li').each(function(i){
      setTimeout(function(){
        $('ul.grid li').eq(i).addClass('slideIn');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });
  }

  if($('.all-cta').offset().top - $(window).height()/2 < wScroll) {
    $('.all-cta div.col-3').addClass('slideX');
  }


  // Contact
  if($('.article-contact').offset().top - $(window).height()/2 < wScroll) {
    $('.article-contact').addClass('slideIn');
  }


});
