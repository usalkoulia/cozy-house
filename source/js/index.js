var width = 320; // ширина изображения
var count = 3; // количество изображений
var list = document.querySelector(".slider__list");
var listElems = document.querySelectorAll(".slider__item");
var position = 0; // текущий сдвиг влево

var next = document.querySelector(".slider__button-arrow--right");

next.addEventListener("click", function() {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
});

var prew = document.querySelector(".slider__button-arrow--left");

prew.addEventListener("click", function() {
  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + "px";
});

var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
var animationTime = 100;
var framesCount = 50;

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

anchors.forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo(document.documentElement, document.querySelector(a.getAttribute('href')).getBoundingClientRect().top, 200);
  });
});
