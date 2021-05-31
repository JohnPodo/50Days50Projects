const container = document.getElementById("container");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

for (let index = 0; index < SQUARES; index++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => SetColor(square));
  square.addEventListener("mouseout", () => RemoveColor(square));

  container.appendChild(square);
}

function SetColor(el) {
  const color = GetRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function RemoveColor(el) {
  el.style.background = "#1d1d1d";
  el.style.boxShadow = `0px 0 2px #000`;
}

function GetRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
