const toggleBtn = document.querySelector(".toggleBtn");
const menuItems = document.querySelector(".menu-items");
const snsIcons = document.querySelector(".sns-icons");

toggleBtn.addEventListener("click", () => {
  menuItems.classList.toggle("active");
  snsIcons.classList.toggle("active");
});
