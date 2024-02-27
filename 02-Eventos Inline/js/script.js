const h1 = document.querySelector("h1");
const box = document.querySelector(".box");


const observerMouseover = () => {
  console.log("Passou o mouse");
};

box.addEventListener("mouseover", observerMouseover());
