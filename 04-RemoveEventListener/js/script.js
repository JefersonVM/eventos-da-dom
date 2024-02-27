const btnSign = document.querySelector(".btn-sign");
const spanCounter = document.querySelector(".counter");

let count = 10;

const showMessage = () => {
  btnSign.classList.toggle("success");
  spanCounter.style.display = "none";
  btnSign.textContent = "Você está inscrito!";
  btnSign.removeEventListener("click", showMessage);
};

btnSign.addEventListener("click", showMessage);

const myInterval = setInterval(() => {
  console.log(count);
  if (count <= 0) {
    clearInterval(myInterval);
    btnSign.classList.toggle("disable");
    btnSign.textContent = "Tempo esgotado!";
    spanCounter.style.display = "none";

    btnSign.removeEventListener("click", showMessage);
    return;
  }
  count--;
  spanCounter.textContent = count;
}, 1000);
