//Selectors

// Open Nav List Wich Hemburger Button
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  console.log(header.classList);
  header.classList.toggle("menu-open");
});
