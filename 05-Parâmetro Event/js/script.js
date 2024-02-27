const input = document.querySelector("input");
const button = document.querySelector("button");

input.addEventListener("change",(event) => {
    console.log(event);
});

function save (event){
    console.log(event);
}

button.addEventListener("click", save);


