const buttons = document.querySelectorAll(".button");
const currentScreen = document.querySelector(".current-screen");
const totalScreen = document.querySelector(".total-screen");
let currentNumber = "";
let displayNumber = "";
let numbers = [];
let operators = [];
let pastInfo = [];
let pastInfoTotal = [];
let pastInfoDisplay = "";
let total = "";

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (isNaN(element.innerHTML)) {
      handleOperator(element.innerHTML);
    } else {
      handleNumber(element.innerHTML);
    }
    displayCurrentScreen(currentNumber);
  });
});

function handleNumber(newNumber) {
  currentNumber = currentNumber + newNumber;
  if (numbers.length > 0) {
    calcTotal();
    displayTotalScreen();
  }
  return currentNumber;
}

function handleOperator(operator) {
  switch (operator) {
    case "CE":
      currentNumber = "";
      calcTotal();
      displayTotalScreen();
      return currentNumber;
    case "C":
      currentNumber = "";
      pastInfoDisplay = "";
      numbers = [];
      operators = [];
      total = "";
      displayTotalScreen();
      break;
    case "⇦":
      if (currentNumber != "") {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
      } else if (pastInfoDisplay != "" && currentNumber == "") {
        operators.pop();
        pastInfoDisplay = pastInfoDisplay.substring(
          0,
          pastInfoDisplay.length - 1
        );
        if (numbers.length != operators.length) {
          currentNumber = numbers[numbers.length - 1];
          numbers.pop();
          pastInfoDisplay = pastInfoDisplay.substring(
            0,
            pastInfoDisplay.length - 1
          );
        }
      }

      if ((numbers.length <= 1 && currentNumber == "") || numbers.length == 0) {
        totalScreen.innerHTML = "";
      } else {
        calcTotal();
        displayTotalScreen();
      }
      return currentNumber;
    case "÷":
      handleCalculation("/", "÷");
      break;
    case "×":
      handleCalculation("*", "×");
      break;
    case "−":
      handleCalculation("-", "−");
      break;
    case "+":
      handleCalculation("+", "+");
      break;
    case "()":
      if (total != "") {
        total = total * -1;
        displayTotalScreen();
      }
      break;
    case ".":
      if (currentNumber == "") {
        currentNumber = "0.";
      } else {
        handleNumber(".");
      }
      break;
    case "=":
      currentNumber = total;
      pastInfoDisplay = "";
      numbers = [];
      operators = [];
      total = "";
      displayTotalScreen();
      break;
    default:
      console.log("what is this");
  }
}

function handleCalculation(operator, operatorDisplay) {
  //check if operator was the last thing clicked
  if (pastInfoDisplay != "" && currentNumber == "") {
    operators.pop();
    operators.push(operator);
    pastInfoDisplay = pastInfoDisplay.substring(0, pastInfoDisplay.length - 1);
    pastInfoDisplay = pastInfoDisplay + operatorDisplay;
  } else {
    numbers.push(currentNumber);
    operators.push(operator);
    pastInfoDisplay = pastInfoDisplay + currentNumber + operatorDisplay;
    currentNumber = "";
    return currentNumber;
  }
}

function displayCurrentScreen(currentNumber) {
  currentScreen.innerHTML = pastInfoDisplay + currentNumber;
}

function displayTotalScreen() {
  totalScreen.innerHTML = total;
}

function calcTotal() {
  for (let index = 0; index < numbers.length; index++) {
    pastInfo.push(numbers[index], operators[index]);
  }

  if (currentNumber == "") {
    pastInfo.pop();
    total = eval(pastInfo.join(""));
  } else {
    total = eval(pastInfo.join("") + currentNumber);
  }

  if (pastInfo.slice(-1) == "/" && currentNumber == 0) {
    total = "Can't Divide by 0";
  }
  pastInfo = [];
  return total;
}
