const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((t) => {
  t.addEventListener("click", () => {
    t.parentNode.classList.toggle("active");
  });
});
