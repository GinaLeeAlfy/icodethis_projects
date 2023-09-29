const buttons = document.querySelectorAll(".button");
const currentScreen = document.querySelector(".current-screen");
const totalScreen = document.querySelector(".total-screen");
let number = "";

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (isNaN(element.innerHTML)) {
      console.log("not a number");
    } else {
      newNumber = element.innerHTML;
      handleNumber(newNumber);
    }
  });
});

function handleNumber(newNumber) {
  number = number + newNumber;
  console.log(number);
}

function handleOperator(operator) {}
