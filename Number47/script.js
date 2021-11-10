const container = document.querySelector(".container");
const unsplashUrl = "https://source.unsplash.com/random/";
const rows = 10;

for (let index = 0; index < rows * 3; index++) {
  const img = document.createElement("img");
  img.src = `${unsplashUrl}${GetRandomSize()}`;
  container.appendChild(img);
}

function GetRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function GetRandomSize() {
  return `${GetRandomNumber()}x${GetRandomNumber()}`;
}
