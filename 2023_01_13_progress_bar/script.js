const start = document.querySelector("button");
const percentageDisplay = document.querySelector(".percentage-display");
const percentageBox = document.querySelector(".percentage-box");
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
      percentageBox.innerHTML = width + "%";
    }
  }
}

start.addEventListener("click", () => {
  if (isFinished) {
    startProgress();
  }
});
