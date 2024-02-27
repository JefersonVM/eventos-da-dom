const button = document.querySelector("button");
const inputEmail = document.querySelector(".input-email");
const a = document.querySelector("a");
const keyPress = document.querySelector(".input-key-press");
const keyDown = document.querySelector(".input-key-down");
const keyUp = document.querySelector(".input-key-up");
const inputFocus = document.querySelector(".input-focus");

button.addEventListener("click", () => {
  console.log("button clicked");
});

inputEmail.addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log("input changed");
});

a.addEventListener("mouseover", (e) => {
  console.log("Passou o mouse por cima do link");
});

keyPress.addEventListener("keypress", (e) => {
  console.log(e.target.value);
  console.log("Tecla pressionada");
});

keyDown.addEventListener("keydown", (e) => {
  console.log(e.target.value);
  console.log("Tecla pressionada");
});

keyUp.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  console.log("Tecla pressionada");
});

inputFocus.addEventListener("focus", (e) => {
  console.log("Input focado");
});
