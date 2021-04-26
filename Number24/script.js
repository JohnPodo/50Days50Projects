const nav = document.querySelector(".nav");

window.addEventListener("scroll", FixNav);

function FixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
