const review = document.querySelector(".review");
const approve = document.querySelector(".approved");
const secondSteps = document.querySelectorAll(".second");
const thirdSteps = document.querySelectorAll(".third");
const percentageDisplay = document.querySelector(".percentage-display");
let isFinished = true;

function startProgress() {
  let width = 0;
  let time = setInterval(frame, 100);

  review.addEventListener("click", () => {
    width = 50;
    secondSteps.forEach((element) => {
      element.classList.add("active");
    });
    reviewProgress();
  });

  function frame() {
    if (width >= 50) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      width++;
      percentageDisplay.style.width = width + "%";
    }
  }
}

function reviewProgress() {
  let width = 50;
  let time = setInterval(frame, 100);

  approve.addEventListener("click", () => {
    width = 99;
    thirdSteps.forEach((element) => {
      element.classList.add("active");
    });
  });

  function frame() {
    if (width >= 100) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      width++;
      percentageDisplay.style.width = width + "%";
    }
  }
}

window.addEventListener("load", () => {
  startProgress();
});
