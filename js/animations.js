const map = document.querySelector('.map');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline2');
const pins = document.querySelectorAll('.pin');
const indicatorNext = document.querySelector('#indicatorNext');

const tl = new TimelineMax();

// .fromTo(object, duration, { params: values *from* }, { params: values *to* }, time_starting_earlier)
tl.fromTo(map, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
.fromTo(map, 1.5, { width: '70%' }, { width: '95%', ease: Power2.easeInOut })
.fromTo(slider, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, '-=1.2')
.fromTo(logo, .5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
.fromTo(headline, .5, { opacity: 0, x: -300 }, { opacity: 1, x: -350 })
.fromTo(headline2, .5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, '-=0.5')
.fromTo(pins, 1.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
.fromTo(indicatorNext, 1, { opacity: 0, y: -15 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, '-=1.5');

// **************************
// Fade in Headings animation
// **************************

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var elements = document.querySelectorAll('.module');
var indicators = document.querySelectorAll('.next');

function callbackFunc() {
  for (var i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])) {
      elements[i].classList.add("visible");
    } else {
      elements[i].classList.remove("visible");
    }
  }

  for (var i = 0; i < indicators.length; i++) {
    if (isElementInViewport(indicators[i])) {
      indicators[i].classList.add("visible");
    } else {
      indicators[i].classList.remove("visible");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// ***********************
// Maximize Image on click
// ***********************

$('img.zoomable').css({ cursor: 'pointer' }).live('click', function() {
  var img = $(this);
  var bigImg = $('<img />').css({
    'max-width': '100%',
    'max-height': '90%',
    'display': 'inline',
    'margin-top': '2.5%'
  });

  bigImg.attr({
    src: img.attr('src'),
    alt: img.attr('alt'),
    title: img.attr('title')
  });

  var over = $('<div />').text(' ').css({
    'height': '100%',
    'width': '100%',
    'background': 'rgba(0,0,0,.82)',
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'opacity': 0.0,
    'cursor': 'pointer',
    'z-index': 9999,
    'text-align': 'center'
  }).append(bigImg).bind('click', function() {
    $(this).fadeOut(300, function() {
      $(this).remove();
    });
  }).insertAfter(this).animate({
    'opacity': 1
  }, 300);
});
