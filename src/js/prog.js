// анимация денег
$(window).scroll(function(){
  var target = $('#sec-02');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight + 500;
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    $('#sec-02 .sec-02__banner-cash').addClass('active');
  }
});


// анимация ракеты при клике
$('.sec-08__btn').on('click', function() {
  $('.sec-08__rocket').addClass('active');
});



// begin popup open
$('.popup-open').on('click', function() {
  $('.popup, .popup__layer').fadeIn();
});
// end   popup open


// begin popup send
$('.popup__btn').on('click', function() {
  $('.popup').fadeOut();
  $('.popup-success').fadeIn();
  return false;
});
// end   popup send

// begin popup-success open
$('.popup-send').on('click', function() {
  $('.popup-success, .popup__layer').fadeIn();
  return false;
});
// end   popup-success open


// begin popup close
$('.popup__layer, .popup-success__close, .popup__close').on('click', function() {
  $('.popup, .popup-success, .popup__layer').fadeOut();
});
// end   popup close


//====== Begin Programmer code ======
