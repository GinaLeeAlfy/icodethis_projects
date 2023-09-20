const review = document.querySelector(".review");
const approve = document.querySelector(".approved");
const secondSteps = document.querySelectorAll(".second");
const thirdSteps = document.querySelectorAll(".third");
const secondTexts = document.querySelectorAll(".second-text");
const thirdTexts = document.querySelectorAll(".third-text");
const percentageDisplays = document.querySelectorAll(".percentage-display");

let isFinished = true;

function startProgress() {
  let width = 0;
  let time = setInterval(frame, 100);

  review.addEventListener("click", () => {
    if (isFinished) {
      width = 100;
      secondSteps.forEach((element) => {
        element.classList.add("active");
      });
      secondSteps[2].innerHTML = "&check;";
      thirdSteps.forEach((element) => {
        element.classList.remove("active");
      });
      thirdSteps[2].innerHTML = "";
      secondTexts.forEach((element) => {
        element.classList.add("active-text");
      });
      thirdTexts.forEach((element) => {
        element.classList.remove("active-text");
      });
      reviewProgress();
    }
  });

  function frame() {
    if (width >= 100) {
      clearInterval(time);
    } else {
      width++;
      percentageDisplays.forEach((element) => {
        element.style.width = width / 2 + "%";
      });
    }
  }
}

function reviewProgress() {
  secondTexts.forEach((element) => {
    element.innerHTML = "In review";
  });
  thirdTexts.forEach((element) => {
    element.innerHTML = "Needs approval";
  });
  approve.removeAttribute("disabled");
  let width = 100;
  let time = setInterval(frame, 100);

  approve.addEventListener("click", () => {
    width = 199;
    thirdSteps.forEach((element) => {
      element.classList.add("active");
    });
    thirdTexts.forEach((element) => {
      element.classList.add("active-text");
    });
    thirdTexts.forEach((element) => {
      element.innerHTML = "Approved";
    });
    thirdSteps[2].innerHTML = "&check;";
  });

  function frame() {
    if (width >= 200) {
      clearInterval(time);
      isFinished = true;
      review.removeAttribute("disabled");
    } else {
      isFinished = false;
      review.setAttribute("disabled", true);
      width++;
      percentageDisplays.forEach((element) => {
        element.style.width = width / 2 + "%";
      });
    }
  }
}

window.addEventListener("load", () => {
  startProgress();
  approve.setAttribute("disabled", true);
});
