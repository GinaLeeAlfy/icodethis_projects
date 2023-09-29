const buttons = document.querySelectorAll(".button");
const currentScreen = document.querySelector(".current-screen");
const totalScreen = document.querySelector(".total-screen");
let number = "";

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (isNaN(element.innerHTML)) {
      console.log(element.innerHTML);
      handleOperator(element.innerHTML);
    } else {
      handleNumber(element.innerHTML);
    }
  });
});

function handleNumber(newNumber) {
  number = number + newNumber;
  currentScreen.innerHTML = number;
}

function handleOperator(operator) {
  switch (operator) {
    case "CE":
      console.log("clear entry");
      break;
    case "C":
      console.log("reset");
      break;
    case "⇦":
      console.log("back");
      break;
    case "÷":
      console.log("/");
      break;
    case "×":
      console.log("*");
      break;
    case "−":
      console.log("-");
      break;
    case "+":
      console.log("+");
      break;
    case "±":
      console.log("+/-");
      break;
    case ".":
      console.log(".");
      break;
    case "=":
      console.log("=");
      break;
    default:
      console.log("what is this");
  }
}
