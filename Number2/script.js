const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cicles = document.querySelectorAll(".cirle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > cicles.length) {
    currentActive = cicles.length;
  }
  Update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  Update();
});

function Update() {
  cicles.forEach((cicle, idx) => {
    if (idx < currentActive) {
      cicle.classList.add("active");
    } else {
      cicle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (cicles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === cicles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
