/*"Strict mode" allows JavaScript to run in a safer and more consistent way and prevents some misuse of JavaScript.*/
"use strict";
const openMenu = document.querySelector("#open-menu");
const ul = document.querySelector("nav > ul");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
  console.log("I'm being clicked");
  ul.classList.toggle("show");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  ul.classList.toggle("show");
});