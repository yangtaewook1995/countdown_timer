const quizes = [
  {
    id: 1,
    title: "What is my name",
    select_a: "Taek",
    select_b: "Wook",
    select_c: "Hyun",
    select_d: "Jason",
    answer: "Wook",
  },
  {
    id: 2,
    title: "What is my age",
    select_a: "25",
    select_b: "26",
    select_c: "27",
    select_d: "28",
    answer: "27",
  },
  {
    id: 3,
    title: "What is my nation",
    select_a: "USA",
    select_b: "Japan",
    select_c: "China",
    select_d: "Korea",
    answer: "Korea",
  },
];

const question = document.querySelector(".quiz-question__title");

const select_a = document.querySelector(".label-a");
const select_b = document.querySelector(".label-b");
const select_c = document.querySelector(".label-c");
const select_d = document.querySelector(".label-d");

const submitBtn = document.querySelector(".quiz-submit__button");

const selects = document.querySelectorAll(".quiz-select__toggle");
const labels = document.querySelectorAll(".labelList");

let currentQuiz = 0;
let score = 0;

function drawQuiz() {
  const quiz = quizes[currentQuiz];
  question.innerText = quiz.title;
  select_a.innerText = quiz.select_a;
  select_b.innerText = quiz.select_b;
  select_c.innerText = quiz.select_c;
  select_d.innerText = quiz.select_d;
}

function scoreQuiz() {
  const quiz = quizes[currentQuiz];

  for (i = 0; i < 4; i++) {
    if (selects[i].checked) {
      score = quiz.answer == labels[i].innerText ? score + 1 : score;
    }
  }
}

function resetSelection() {
  selects.forEach((select) => {
    select.checked = false;
  });
}

drawQuiz();

submitBtn.addEventListener("click", () => {
  if (currentQuiz == quizes.length - 1) {
    scoreQuiz();
    alert("Thank You. Your score is " + score + " (of 3)");
  } else {
    scoreQuiz();
    currentQuiz++;
    drawQuiz();
    resetSelection();
  }
});
