var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
 lis[i].style.position = "relative";
 var span = document.createElement("span");
 span.style.cssText = "position:absolute;left:0;top:0";
 span.innerHTML = i + 1;
 lis[i].appendChild(span);
}

var next = carousel.querySelector(".slider__button-arrow--right");

next.addEventListener("click", function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
});

var prew = carousel.querySelector(".slider__button-arrow--left");

prew.addEventListener("click", function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginRight = position + "px";
});
