import "../css/style.css";

const right = document.querySelector(".right-arrow");
const left = document.querySelector(".left-arrow");
const images = document.querySelectorAll(".inside-laptop");
let current_index;

function updateActiveImage(index) {
  images.forEach((image) => image.removeAttribute("data-active"));
  images[index].setAttribute("data-active", "");
}

function findActiveIndex() {
  return [...images].findIndex((image) => image.hasAttribute("data-active"));
}

right.addEventListener("click", () => {
  current_index = findActiveIndex();
  const nextIndex = (current_index + 1) % images.length;
  updateActiveImage(nextIndex);
});

left.addEventListener("click", () => {
  current_index = findActiveIndex();
  const prevIndex = (current_index - 1 + images.length) % images.length;
  updateActiveImage(prevIndex);
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    current_index = findActiveIndex();
    const nextIndex = (current_index + 1) % images.length;
    updateActiveImage(nextIndex);
  }
  if (event.keyCode === 37) {
    current_index = findActiveIndex();
    const prevIndex = (current_index - 1 + images.length) % images.length;
    updateActiveImage(prevIndex);
  }
});
