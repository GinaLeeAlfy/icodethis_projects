const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
// const thumb = document.querySelector(".thumb");
// let isDragging = false;

progress.style.width = `${(slider.value / slider.max) * 100}%`;

function adjustProgress() {
  progress.style.width = `${(slider.value / slider.max) * 100}%`;
}

// thumb.addEventListener("mousedown", beginDragging());

// function beginDragging(event) {
//   event.preventDefault();
//   isDragging = true;
//   document.addEventListener("mousedown", dragHandler(event));
// }

// function dragHandler(event) {}
