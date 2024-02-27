const fruits = document.querySelectorAll("li");
const inputSearch = document.querySelector("input");

inputSearch.addEventListener("keydown", function (e) {
  fruits.forEach((fruit) => {
    if (fruit.textContent.includes(e.target.value)) {
      fruit.style.display = "block";
    } else {
      fruit.style.display = "none";
    }
  });
});
