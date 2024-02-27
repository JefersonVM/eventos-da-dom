const options = document.querySelectorAll(".option");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const quizes = [
  {
    question: "O que é a via láctea? ",
    options: [
      { title: "Marca de leite", correct: false },
      { title: "Civilização antiga", correct: false },
      { title: "Carro", correct: false },
      { title: "Galáxia", correct: true },
    ],
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    options: [
      { title: "Getúlio Vargas", correct: false },
      { title: "Jânio Quadros", correct: false },
      { title: "Deodoro da Fonseca", correct: true },
      { title: "Marechal Deodoro", correct: false },
    ],
  },
  {
    question: "Qual é a capital do Brasil?",
    options: [
      { title: "Rio de Janeiro", correct: false },
      { title: "Brasília", correct: true },
      { title: "São Paulo", correct: false },
      { title: "Belo Horizonte", correct: false },
    ],
  },
  {
    question: "Quem foi o primeiro homem a pisar na lua?",
    options: [
      { title: "Yuri Gagarin", correct: false },
      { title: "Neil Armstrong", correct: true },
      { title: "Buzz Aldrin", correct: false },
      { title: "Michael Collins", correct: false },
    ],
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: [
      { title: "Júpiter", correct: true },
      { title: "Saturno", correct: false },
      { title: "Urano", correct: false },
      { title: "Netuno", correct: false },
    ],
  },
  {
    question: "Qual é o menor planeta do sistema solar?",
    options: [
      { title: "Mercúrio", correct: true },
      { title: "Vênus", correct: false },
      { title: "Marte", correct: false },
      { title: "Plutão", correct: false },
    ],
  },
  {
    question: "Qual é o maior animal terrestre?",
    options: [
      { title: "Elefante africano", correct: true },
      { title: "Girafa", correct: false },
      { title: "Rinoceronte", correct: false },
      { title: "Hipopótamo", correct: false },
    ],
  },
  {
    question: "Qual é o menor animal do mundo?",
    options: [
      { title: "Abelha", correct: false },
      { title: "Formiga", correct: false },
      { title: "Pulga", correct: true },
      { title: "Ácaro", correct: false },
    ],
  },
  {
    question: "Qual é o maior animal do mundo?",
    options: [
      { title: "Baleia azul", correct: true },
      { title: "Elefante africano", correct: false },
      { title: "Girafa", correct: false },
      { title: "Rinoceronte", correct: false },
    ],
  },
  {
    question: "Qual é o menor país do mundo?",
    options: [
      { title: "Vaticano", correct: true },
      { title: "Mônaco", correct: false },
      { title: "Nauru", correct: false },
      { title: "Tuvalu", correct: false },
    ],
  },
];

let randomQuestion;
let correctOption;

const fillQuiz = () => {
  randomQuestion = Math.floor(Math.random() * quizes.length);
  h2.textContent = quizes[randomQuestion].question;

  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quizes[randomQuestion].options[i].title;
  }

  quizes[randomQuestion].options.forEach((option) => {
    if (option.correct) {
      correctOption = option;
    }
  });
};

fillQuiz();

options.forEach((option) => {
  option.addEventListener("click", () => {
    button.style.visibility = "visible";
    if (option.textContent === correctOption.title) {
      option.classList.add("success");
      h1.textContent = "Você acertou!";
      return;
    }
    option.classList.add("danger");
    h1.textContent = "Você errou!";
  });
});

button.addEventListener("click", () => {
  button.style.visibility = "hidden";
  options.forEach((option) => {
    option.classList.remove("success", "danger");
  });
  h1.textContent = "";
  fillQuiz();
});
