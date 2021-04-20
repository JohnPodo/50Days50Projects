const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const yInSide = y - buttonTop;
    const xInSide = x - buttonLeft;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInSide + "px";
    circle.style.left = xInSide + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
