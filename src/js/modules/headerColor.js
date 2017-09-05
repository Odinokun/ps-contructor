module.exports = function() {

  // begin background color header to scroll
  $(function() {
      $(window).scroll(function() {
          var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
          var menu = document.getElementById('header');
          if (topToDocument <= 20) {
              $(menu).removeClass('active');
          } else {
              $(menu).addClass('active');
          }
      });
      var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
      var menu = document.getElementById('header');
      if (topToDocument <= 20) {
          $(menu).removeClass('active');
      } else {
          $(menu).addClass('active');
      }
  });
  // end   background color header to scroll

};