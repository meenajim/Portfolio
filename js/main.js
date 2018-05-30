//Smooth scrolling
//Grabbing the page and then on click
//targetting any element that starts with href#
//targeting all anchor elements that start with hash sign #
//running a function
//to prevent the default behaviour
//then grab html and body and animate it
//scroll top with offset from top with timer of 1000milliseconds which is 1 second
$(document).on('click','a[href^="#"]', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
  }, 2000);
});



$(document).ready(function(){
  const $body = $('body');

  $(window).on('scroll',function(){
    const scrollTop = $(window).scrollTop();
$body.css('background-position-y',-scrollTop/1.5);

});
});
