const tagsel = document.getElementById("tags");
const area = document.getElementById("textarea");

area.focus();

area.addEventListener("keyup", (e) => {
  CreateTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    RandomSelect();
  }
});

function CreateTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsel.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsel.appendChild(tagEl);
  });
}

function RandomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = PickRandomTag();
    HighlightTag(randomTag);
    setTimeout(() => {
      UnHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = PickRandomTag();
      HighlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function PickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function HighlightTag(tag) {
  tag.classList.add("highlight");
}

function UnHighlightTag(tag) {
  tag.classList.remove("highlight");
}
