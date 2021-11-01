const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openbtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.add("visible"));
});

closebtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.remove("visible"));
});
