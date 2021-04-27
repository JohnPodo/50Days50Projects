const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

button.addEventListener("click", () => CreateNotification());

function CreateNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = GetRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.classList.add("dis");
  }, 2000);
  setTimeout(() => {
    notif.remove();
  }, 3500);
}

function GetRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
