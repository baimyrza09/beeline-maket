const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
}
