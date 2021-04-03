const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let tick = setInterval(Blurring, 30);

function Blurring() {
  load++;
  loadText.innerText = `${load}%`;
  bg.style.filter = `blur(${30 - (30 * load) / 100}px)`;
  loadText.style.opacity = 1.3 - load / 100;
  if (load > 99) {
    clearInterval(tick);
    loadText.style.opacity = 0;
  }
}
