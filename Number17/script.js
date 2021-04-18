const body = document.body;
const slides = document.querySelectorAll(".slide");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let activeSlide = 0;
rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  SetBgToBody();
  SetActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  SetBgToBody();
  SetActiveSlide();
});

SetBgToBody();
function SetBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function SetActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}
