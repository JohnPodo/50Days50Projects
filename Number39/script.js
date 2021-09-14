const boxesCont = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxesCont.classList.toggle("big");
});

function CreateBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesCont.appendChild(box);
    }
  }
}

CreateBoxes();
