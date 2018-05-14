var katrine = {
  image: "../img/cat_1.png",
  name: "Katrine",
  breed: "Chartreux Cat",
  age: "2 months",
  inoculations: "none",
  diseases: "yes",
  parasites: "none",
};

var jennifer = {
  image: "../img/big_dog_1.png",
  name: "Jennifer",
  breed: "Pooch + Labrador",
  age: "2 months",
  inoculations: "none",
  diseases: "none",
  parasites: "none",
};

var woody = {
  image: "../img/dog_2.png",
  name: "Woody",
  breed: "Golden Retriever",
  age: "2 months",
  inoculations: "yes",
  diseases: "none",
  parasites: "none",
};

var sophia = {
  image: "../img/dog_3.png",
  name: "Sophi",
  breed: "Pooch + Labrador",
  age: "2 months",
  inoculations: "none",
  diseases: "none",
  parasites: "none"
};

var timmy = {
  image: "../img/cat_2.png",
  name: "Timmy",
  breed: "Chartreux Cat",
  age: "2 months",
  inoculations: "none",
  diseases: "yes",
  parasites: "none",
};

var charly = {
  image: "../img/big_dog_2.png",
  name: "Charly",
  breed: "Pooh",
  age: "2 months",
  inoculations: "yes",
  diseases: "none",
  parasites: "none",
};

var scarlett = {
  image: "../img/dog_5.png",
  name: "Scarlett",
  breed: "Pooh",
  age: "2 months",
  inoculations: "none",
  diseases: "none",
  parasites: "none"
};

var freddie = {
  image: "../img/cat_3.png",
  name: "Freddie",
  breed: "Chartreux Cat",
  age: "2 months",
  inoculations: "yes",
  diseases: "none",
  parasites: "none"
};

var katrine_button = document.querySelector("#katrine");
var jennifer_button = document.querySelector("#jennifer");
var woody_button = document.querySelector("#woody");
var sophia_button = document.querySelector("#sophia");
var timmy_button = document.querySelector("#timmy");
var charly_button = document.querySelector("#charly");
var scarlett_button = document.querySelector("#scarlett");
var freddie_button = document.querySelector("#freddie");
var modal_window = document.querySelector(".modal");

function update_modal(pet) {
  var image = document.querySelector("#image");
  var name = document.querySelector("#name");
  var breed = document.querySelector("#breed");
  var age = document.querySelector("#age");
  var inoculations = document.querySelector("#inoculations");
  var diseases = document.querySelector("#diseases");
  var parasites = document.querySelector("#parasites");

  image.src = pet.image;
  name.innerHTML = pet.name;
  breed.innerHTML = pet.breed;
  age.innerHTML = pet.age;
  inoculations.innerHTML = pet.inoculations;
  diseases.innerHTML = pet.diseases;
  parasites.innerHTML = pet.parasites;
  modal_window.classList.add("modal--show");
}

katrine_button.addEventListener("click", function() {
  update_modal(katrine);
});

jennifer_button.addEventListener("click", function() {
  update_modal(jennifer);
});

woody_button.addEventListener("click", function() {
  update_modal(woody);
});

sophia_button.addEventListener("click", function() {
  update_modal(sophia);
});

timmy_button.addEventListener("click", function() {
  update_modal(timmy);
});

charly_button.addEventListener("click", function() {
  update_modal(charly);
});

scarlett_button.addEventListener("click", function() {
  update_modal(scarlett);
});

freddie_button.addEventListener("click", function() {
  update_modal(freddie);
});

var modal_close = document.querySelector(".modal__button");

modal_close.addEventListener("click", function() {
  modal_window.classList.remove("modal--show");
})
