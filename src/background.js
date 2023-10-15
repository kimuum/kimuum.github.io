const body = document.querySelector("body");
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const randomBg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./src/images/${randomBg}`;

function dimControl() {
  body.querySelector(".dim").classList.add("hide");
}

body.appendChild(bgImage);
setTimeout(dimControl, 3000);
