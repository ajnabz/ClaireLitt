// Modern homepage navigation plus compatibility with the original portfolio slideshows.
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (button && nav) {
    button.addEventListener('click', function () {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  initialiseLegacySlideshows();
});

function burger() {
  const links = document.getElementById('myLinks');
  if (!links) return;
  links.style.display = links.style.display === 'block' ? 'none' : 'block';
}

let slideIndex = 1;
let slideShows = [];
function initialiseLegacySlideshows() {
  slideShows = Array.from(document.getElementsByClassName('slideshow'));
  slideShows.forEach(function (show, index) {
    show.setAttribute('data-currentslide', '1');
    showDivs(1, index);
  });
}
function plusDivs(amount, index) {
  const show = slideShows[index];
  if (!show) return;
  const current = Number(show.getAttribute('data-currentslide')) || 1;
  showDivs(current + amount, index);
}
function currentDiv(number, index) { showDivs(number, index); }
function showDivs(number, index) {
  const show = slideShows[index];
  if (!show) return;
  const slides = Array.from(show.getElementsByClassName('mySlides'));
  const dots = Array.from(show.getElementsByClassName('dot'));
  if (!slides.length) return;
  if (number > slides.length) number = 1;
  if (number < 1) number = slides.length;
  show.setAttribute('data-currentslide', String(number));
  slides.forEach(function (slide) { slide.style.display = 'none'; });
  dots.forEach(function (dot) { dot.classList.remove('active'); });
  slides[number - 1].style.display = 'block';
  if (dots[number - 1]) dots[number - 1].classList.add('active');
}
