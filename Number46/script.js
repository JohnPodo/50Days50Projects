const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Eirini",
    position: "Cashier",
    photo: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "Test Test Test Test  Test Test v Testv vdvsgerghwefoihw9pgeworghowiefjpwefhoiwbgpowejfpqwehfiuwebf",
  },
  {
    name: "Maria",
    position: "Police Officer",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "Test Test Test Test  Test Test v Testv vdvsgerghwefoihw9pgeworghowiefjpwefhoiwbgpowejfpqwehfiuwebf",
  },
  {
    name: "Xristina",
    position: "Secretary",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    text: "Test Test Test Test  Test Test v Testv vdvsgerghwefoihw9pgeworghowiefjpwefhoiwbgpowejfpqwehfiuwebf",
  },
];

let idx = 0;
UpdateTestimonial();
function UpdateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(UpdateTestimonial, 10000);
