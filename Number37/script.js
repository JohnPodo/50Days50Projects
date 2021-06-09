const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    HideAllContents();
    HideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function HideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function HideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
