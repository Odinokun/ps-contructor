//====== Begin Programmer code ======

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

$('.sec-08__btn').on('click', function() {
  $('.sec-08__rocket').addClass('active');
});