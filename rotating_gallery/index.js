const imageContainerEl = document.querySelector(".image-container");

const leftBtn = document.getElementById("left");
const stopBtn = document.getElementById("stop");
const rightBtn = document.getElementById("right");

const nbOfImages = document.querySelectorAll(".image-container img").length;

const currentCounterEl = document.getElementById("current");
const totalCounterEl = document.getElementById("total");

let xDeg = 0;
let angle = 360 / nbOfImages;
let speed = 1000;
let timer;

window.addEventListener("load", () => {
  document.documentElement.style.setProperty("--num-images", nbOfImages);
  totalCounterEl.textContent = nbOfImages;
});

leftBtn.addEventListener("click", () => {
  xDirection = -1;
  xDeg += (angle * xDirection) % 360;
  clearTimeout(timer);
  updateGallery();
});

stopBtn.addEventListener("click", () => {
  clearTimeout(timer);
});

rightBtn.addEventListener("click", () => {
  xDirection = 1;
  xDeg += (angle * xDirection) % 360;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${xDeg}deg)`;
  const currentImageIndex = Math.round(xDeg / angle);
  currentCounterEl.textContent = (currentImageIndex % nbOfImages) + 1;
  timer = setTimeout(() => {
    xDeg += angle * xDirection;
    updateGallery();
  }, speed);
}
