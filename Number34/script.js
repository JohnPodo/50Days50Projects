const imgs = document.getElementById("imgs");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(Run, 2000);

function Run() {
  idx++;
  ChangeImage();
}

function ChangeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function ResetInterval() {
  clearInterval(interval);
  interval = setInterval(Run, 2000);
}

rightbtn.addEventListener("click", () => {
  idx++;
  ChangeImage();
  ResetInterval();
});

leftbtn.addEventListener("click", () => {
  idx--;
  ChangeImage();
  ResetInterval();
});
