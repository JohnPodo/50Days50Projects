const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function SetTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursInDeg = scale(hoursForClock, 0, 11, 0, 360);
  const secondsInDeg = scale(seconds, 0, 59, 0, 360);
  const minutesInDeg = scale(minutes, 0, 59, 0, 360);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursInDeg}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesInDeg}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsInDeg}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(SetTime, 1000);
