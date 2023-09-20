const review = document.querySelector(".review");
const approve = document.querySelector(".approved");
const percentageDisplay = document.querySelector(".percentage-display");
let isFinished = true;

function startProgress() {
  let width = 0;
  let time = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(time);
      isFinished = true;
      start.removeAttribute("disabled");
    } else {
      isFinished = false;
      start.setAttribute("disabled", true);
      width++;
      percentageDisplay.style.width = width + "%";
    }
  }
}

review.addEventListener("click", () => {
  if (isFinished) {
    startProgress();
  }
});

window.addEventListener("load", () => {
  startProgress();
});
