const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const valueDisplay = document.querySelector(".value-display");

progress.style.width = `${(slider.value / slider.max) * 100}%`;
valueDisplay.innerHTML = `$${slider.value}`;

function adjustProgress() {
  let sliderValue = slider.value;
  let sliderMax = slider.max;
  let percentage = (sliderValue / sliderMax) * 100;

  progress.style.width = `${percentage}%`;
  valueDisplay.innerHTML = `$${slider.value}`;
  valueDisplay.style.left = `${percentage - 7}%`;
}
