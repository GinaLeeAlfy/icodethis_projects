const checkboxEls = document.querySelectorAll("input");
const tasks = document.querySelectorAll(".task");
const countDisplay = document.querySelector(".count");
const colors = [
  "#4962ff",
  "#4a89f9",
  "#4aa3f4",
  "#4abff1",
  "#4cd8f2",
  "#4dd9d3",
  "#4cdaa6",
  "#121731",
];

let numberChecked;

function countChecks() {
  numberChecked = 0;
  checkboxEls.forEach((element) => {
    if (element.checked) {
      numberChecked++;
    }
  });
  tasks.forEach((element, index) => {
    element.style.backgroundColor = colors[colors.length - 1];
  });
  for (let index = 0; index < numberChecked; index++) {
    tasks[index].style.backgroundColor = colors[index];
  }
  if (numberChecked < checkboxEls.length) {
    countDisplay.innerHTML = `${
      checkboxEls.length - numberChecked
    } remaining to complete`;
  } else {
    countDisplay.innerHTML = "Congrats on completing all of your tasks!";
  }
}

countChecks();
