const themeToggle = document.getElementById("theme-toggle");
const themeStyleLink = document.getElementById("theme-style");

themeToggle.addEventListener("click", () => {
  if (themeStyleLink.getAttribute("href") === "styles-light.css") {
    themeStyleLink.setAttribute("href", "styles-dark.css");
    themeToggle.textContent = "Toggle Light Mode";
  } else {
    themeStyleLink.setAttribute("href", "styles-light.css");
    themeToggle.textContent = "Toggle Dark Mode";
  }
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
var typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer", "Frontend Developer"],
  typeSpeed: 50,
});
