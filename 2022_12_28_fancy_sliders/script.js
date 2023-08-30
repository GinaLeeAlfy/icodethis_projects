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
  valueDisplay.style.left = `${percentage - 4}%`;
}

const progressBar = document.querySelector(".progress-bar");
const percentageDisplay = document.querySelector(".percentage-display");
const progressButton = document.querySelector("button");
let isFinished = true;

function startProgress() {
  let width = 0;
  let time = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      width++;
      if (100 - width >= 83) {
        percentageDisplay.style.right = "83%";
        progressBar.style.width = "17%";
      } else {
        percentageDisplay.style.right = 100 - width + "%";
        progressBar.style.width = width + "%";
      }
      percentageDisplay.innerHTML = width + "%";
    }
  }
}

progressButton.addEventListener("click", (event) => {
  if (isFinished) {
    startProgress();
  }
});
