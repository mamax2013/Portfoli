const menuToggler = document.querySelector(".header__toggler");

const menu = document.querySelector(".header__menu");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("header__show");
});