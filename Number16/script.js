const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

UpdateBigCup();

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => HighlightCups(idx));
});

function HighlightCups(idx) {
  if (smallcups[idx].classList.contains("full")) {
    idx--;
  }
  smallcups.forEach((cup2, idx2) => {
    if (idx2 <= idx) {
      cup2.classList.add("full");
    } else {
      cup2.classList.remove("full");
    }
  });

  UpdateBigCup();
}

function UpdateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallcups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
