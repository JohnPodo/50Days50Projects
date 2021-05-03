const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming";
let idx = 0;
let speed = 300 / speedEl.value;

function WriteText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 0;
  }

  setTimeout(WriteText, speed);
}

WriteText();

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
