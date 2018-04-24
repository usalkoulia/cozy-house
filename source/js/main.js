var width = 270; // ширина изображения
var count = 1; // количество изображений
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
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginRight = position + "px";
});
