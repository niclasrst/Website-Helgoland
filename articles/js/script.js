const thumbnail = document.querySelector('.thumbnail');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const backBtn = document.querySelector('.back');
const indicatorNext = document.querySelector('#indicatorNext');

const tl = new TimelineMax();

tl.fromTo(thumbnail, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
.fromTo(thumbnail, 1.5, { width: '70%' }, { width: '95%', ease: Power2.easeInOut })
.fromTo(slider, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, '-=1.2')
.fromTo(logo, .5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
.fromTo(headline, .5, { opacity: 0, x: -300 }, { opacity: 1, x: -350 })
.fromTo(backBtn, 1, { opacity: 0, x: -15 }, { opacity: 1, x: 0, ease: Power2.easeInOut })
.fromTo(indicatorNext, 1, { opacity: 0, y: -15 }, { opacity: 1, y: 0, ease: Power2.easeInOut }, '-=0.7');
