const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  CreateHeart(e);
});

const CreateHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const left = e.target.offsetLeft;
  const top = e.target.offsetTop;

  const xInside = x - left;
  const yInside = y - top;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 5000);
};
