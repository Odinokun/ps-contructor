module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //Author URL: http://webdesign-master.ru
  (function($) {
    $.fn.animated = function(inEffect) {
      $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
            $(this).addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "100%"
      });
    };
  })(jQuery);

  //animate effect
  $(".sec-03").animated("zoomIn", "fadeOut");
  $(".sec-04__item").animated("slideInUp", "fadeOut");
  $(".sec-05__item").animated("slideInUp", "fadeOut");
  $(".sec-10__body-list li").animated("slideInRight", "fadeOut");
  $(".sec-10__callme").animated("slideInRight", "fadeOut");
  $(".sec-11__item").animated("slideInUp", "fadeOut");
  $(".sec-13__item").animated("slideInUp", "fadeOut");
  // end   Animate CSS + WayPoints javaScript Plugin

};