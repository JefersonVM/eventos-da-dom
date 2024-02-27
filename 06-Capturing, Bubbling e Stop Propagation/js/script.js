const body = document.querySelector("body");
const div = document.getElementById("wrap");
const p = document.querySelector(".hint");
const a = document.querySelector("a");
const h1 = document.querySelector("h1");

body.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click no body");
});

div.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click na div");
});

p.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click no paragrafo");
  h1.textContent = "Clicou no paragrafo";
});

a.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click no link");
  h1.textContent = "Clicou no link";
});
