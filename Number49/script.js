const screens = document.querySelectorAll(".screen");
const chooseInsects = document.querySelectorAll(".choose-insect-btn");
let idx = 0;
screens[idx].classList.add("up");

const start_btn = document.getElementById("start-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const game_container = document.querySelector(".game-container");
let seconds = 0;
let score = 0;
let selectedInsect = {};

start_btn.addEventListener("click", () => {
  screens[idx].classList.remove("up");
  idx = idx + 1;
  screens[idx].classList.add("up");
});

chooseInsects.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selectedInsect = { src, alt };
    screens[idx].classList.remove("up");
    idx = idx + 1;
    screens[idx].classList.add("up");
    setTimeout(CreateInsect, 100);
    StartGame();
  });
});

function CreateInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = GetRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selectedInsect.src}" alt = "${
    selectedInsect.alt
  }" style="transform:rotate(${Math.random() * 360}deg)"/>`;
  insect.addEventListener("click", CatchInsect);
  game_container.appendChild(insect);
}
function StartGame() {
  setInterval(IncreaseTime, 1000);
}
function CatchInsect() {
  IncreaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 200);
}
function IncreaseScore() {
  score++;
  scoreEl.innerHTML = `Score: ${score}`;
  if (score > 19) {
    messageEl.classList.add("visible");
  }
  AddInsects();
}

function AddInsects() {
  setTimeout(CreateInsect, 1000);
  setTimeout(CreateInsect, 2000);
}

function IncreaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}
function GetRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}
