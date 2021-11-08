const quizData = [
  {
    question: "Poia einai h kalyteri omada stin ellada?",
    a: "Paok",
    b: "Olympiakos",
    c: "Panathinaikos",
    d: "Aek",
    correct: "a",
  },
  {
    question: "Poia omada einai apo tin thessaloniki?",
    a: "Paok",
    b: "Olympiakos",
    c: "Panathinaikos",
    d: "Aek",
    correct: "a",
  },
  {
    question: "Poia omada paizei stin touba?",
    a: "Paok",
    b: "Olympiakos",
    c: "Panathinaikos",
    d: "Aek",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
LoadQuiz();
function LoadQuiz() {
  DeselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function DeselectAnswers() {
  answerEls.forEach((answ) => (answ.checked = false));
}

function GetSelected() {
  let answer;
  answerEls.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });
  return answer;
}

submitbtn.addEventListener("click", () => {
  const answer = GetSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      LoadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
