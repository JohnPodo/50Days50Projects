const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeSpan = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const colorInput = document.getElementById("color");
console.log(colorInput.value);

colorInput.addEventListener("input", () => {
  color = colorInput.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increaseBtn.addEventListener("click", () => {
  if (parseInt(sizeSpan.innerHTML) < 50) {
    sizeSpan.innerHTML = parseInt(sizeSpan.innerHTML) + 5;
    size = parseInt(sizeSpan.innerHTML);
  }
});

decreaseBtn.addEventListener("click", () => {
  if (parseInt(sizeSpan.innerHTML) > 0) {
    sizeSpan.innerHTML = parseInt(sizeSpan.innerHTML) - 5;
    parseInt(sizeSpan.innerHTML) === 0
      ? (size = 1)
      : (size = parseInt(sizeSpan.innerHTML));
  }
});

let size = parseInt(sizeSpan.innerHTML);
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  DrawCircle(x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    DrawCircle(x2, y2);
    DrawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function DrawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function DrawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
