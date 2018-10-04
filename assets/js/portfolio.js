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


// SCROLL FUNCTIONS
$(window).scroll(function() {
  // Store in a variable the amount of pixels that user has scrolled
  var wScroll = $(this).scrollTop();

  if($('section.portfolio-web').offset().top - $(window).height()/2 < wScroll) {
    $('div.work-web > ul.grid li').each(function(i){
      setTimeout(function(){
        $('div.work-web > ul.grid li').eq(i).addClass('slideIn');
      }, (80 * (Math.exp(i * 0.40))) - 10);
    });
  }

  if($('section.portfolio-branding').offset().top - $(window).height()/2 < wScroll) {
    $('div.work-branding > ul.grid li').each(function(i){
      setTimeout(function(){
        $('div.work-branding > ul.grid li').eq(i).addClass('slideIn');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });
  }

  if($('section.portfolio-photography').offset().top - $(window).height()/2 < wScroll) {
    $('div.work-photography > ul.grid-photography li').each(function(i){
      setTimeout(function(){
        $('div.work-photography > ul.grid-photography li').eq(i).addClass('slideIn');
      }, (100 * (Math.exp(i * 0.40))) - 10);
    });
  }

});
