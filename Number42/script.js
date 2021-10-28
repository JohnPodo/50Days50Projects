const ratings = document.querySelectorAll(".rating");
const ratingscon = document.querySelector(".ratings-container");
const btn = document.getElementById("send");
const pnel = document.getElementById("panel");
let selectedRating = "";

ratingscon.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating")) {
    RemoveActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

btn.addEventListener("click", (e) => {
  pnel.innerHTML = `<i class="fas fa-heart"></i>
  <strong>Thank you </strong>
  <br>
  <strong> Feedback : ${selectedRating}</strong>`;
});

function RemoveActive() {
  for (let index = 0; index < ratings.length; index++) {
    ratings[index].classList.remove("active");
  }
}
