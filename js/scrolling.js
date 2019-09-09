// JavaScript Document for scrolling bullets

// Scrolling
$(function () {
	$('a[href*=#]').stop().click(function () {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var hash = this.hash;
			var target = $(this.hash);

			if (target.length) {
				var dist_top = target.offset().top;
				$('html,body').animate({ scrollTop: dist_top }, 1000, function () {
					window.location.hash = hash;
				});

				return false;
			}
		}
	});
});

// Highlight
$(document).ready(function () {
  var MENU_ELEMENTS = $('nav ul li a');

  var current = 0;
  var OBJEKT_TOP;

  var OBJEKT = $(MENU_ELEMENTS[0]);
  OBJEKT.addClass('menu_active');

  $(window).scroll(function () {
    for (var i = 0; i < MENU_ELEMENTS.length; i++) {
      var LINK = $(MENU_ELEMENTS[i]).attr('href');

      if ($(LINK).length) {
        OBJEKT_TOP = $(LINK).offset().top;
        //console.log(OBJEKT_TOP);
      }

      var SCROLL_TOP = $(window).scrollTop();
      var DIF = Math.abs(SCROLL_TOP - OBJEKT_TOP);
      //console.log(DIF);

      if (i === 0) {
        current = DIF;
        OBJEKT = $(MENU_ELEMENTS[i]);
        $('nav ul li a').removeClass('menu_active');
        OBJEKT.addClass('menu_active');
      } else {
        if (DIF < current || DIF === current) {
          current = DIF;
          OBJEKT = $(MENU_ELEMENTS[i]);
          $('nav ul li a').removeClass('menu_active');
          OBJEKT.addClass('menu_active');
        }
      }
    }
  });
});
