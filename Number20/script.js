const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", DragStart);
fill.addEventListener("dragend", DragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", DragOver);
  empty.addEventListener("dragenter", DragEnter);
  empty.addEventListener("dragleave", DragLeave);
  empty.addEventListener("drop", DragDrop);
}

function DragStart() {
  fill.classList.add("hold");
}

function DragEnd() {
  fill.classList.remove("hold");
}

function DragOver(e) {
  e.preventDefault();
}

function DragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function DragLeave() {
  this.className = "empty";
}

function DragDrop() {
  this.className = "empty";
  this.append(fill);
}
