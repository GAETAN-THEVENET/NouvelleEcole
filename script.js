const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu");


menuIcon.addEventListener("click", function() {
  menuList.classList.toggle("show");
});