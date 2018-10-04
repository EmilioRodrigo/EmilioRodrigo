$(document).ready(function() {

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

  $('nav.main-nav ul li a').click(function(){
    $('div.menu-icon').toggleClass('is-open');
    $('nav.main-nav').toggleClass('is-open');
    $('nav.main-nav ul li').each(function(i){
      setTimeout(function(){
        $('nav.main-nav ul li').eq(i).toggleClass('active');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });
  });
});

$(window).scroll(function() {
  // Store in a variable the amount of pixels that user has scrolled
  var wScroll = $(this).scrollTop();

  // Animations Residencia Case Study

  if($('.intro').offset().top - $(window).height()/2 < wScroll) {
    $('.intro p').addClass('slideIn');
  }

  if($('.concept').offset().top - $(window).height()/2 < wScroll) {
    $('.concept article, .concept p').addClass('slideIn');
  }

  if($('.objectives').offset().top - $(window).height()/2 < wScroll) {
    $('.objectives article, .objectives p').addClass('slideIn');
  }

  if($('.typography').offset().top - $(window).height()/2 < wScroll) {
    $('.typography article, .typography p').addClass('slideIn');
  }


  if($('.conclusion').offset().top - $(window).height() < wScroll) {
    $('.conclusion article, .conclusion p').addClass('slideIn');
  }

  if($('.cases-cta').offset().top - $(window).height() < wScroll) {
    $('.cases-cta div.col-3').addClass('slideX');
  }

});
