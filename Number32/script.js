const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
addBtn.addEventListener("click", () => AddNewNote());

if (notes) {
  notes.forEach((note) => AddNewNote(note));
}

function AddNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = ` 
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    UpdateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const target = e.target.value;
    main.innerHTML = marked(target);
    UpdateLS();
  });

  document.body.appendChild(note);
}

// localStorage.setItem("name", "Brad"); Only Strings in Local Storage
// localStorage.getItem("name");
// localStorage.removeItem("name");

function UpdateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
