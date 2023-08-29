const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const valueDisplay = document.querySelector(".value-display");

progress.style.width = `${(slider.value / slider.max) * 100}%`;
valueDisplay.innerHTML = `$${slider.value}`;

function adjustProgress() {
  progress.style.width = `${(slider.value / slider.max) * 100}%`;
  valueDisplay.innerHTML = `$${slider.value}`;
  valueDisplay.style.left = `${(slider.value / slider.max) * 100 - 7}%`;
}
