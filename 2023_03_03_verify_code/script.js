const numberInputs = Array.prototype.slice.call(
  document.querySelectorAll("input[type=number]")
);
const validityDisplay = document.querySelector(".validity");
const codeDisplay = document.querySelector(".code");
const generateButton = document.querySelector("footer button");
const checkCodeButton = document.querySelector("section button");

let enteredCode = "";
let generatedCode = "";

function isNumber(number) {
  return /^[0-9]$/.test(number);
}

function focusNext(key) {
  const currInput = document.activeElement;
  const currInputIndex = numberInputs.indexOf(currInput);
  const nextInputIndex = (currInputIndex + 1) % numberInputs.length;
  let input = numberInputs[currInputIndex];
  if (currInputIndex != numberInputs.length - 1) {
    input = numberInputs[nextInputIndex];
    input.focus();
  }
  if (isNumber(key)) {
    input.value = key;
  }
}

function focusBack() {
  const currInput = document.activeElement;
  const currInputIndex = numberInputs.indexOf(currInput);
  const nextInputIndex = (currInputIndex - 1) % numberInputs.length;
  let input = numberInputs[currInputIndex];

  if (currInputIndex != 0) {
    input = numberInputs[nextInputIndex];
    input.focus();
  }
}

function generateCode() {
  numberInputs.forEach((input) => {
    input.classList.remove("valid");
    input.value = "";
  });
  validityDisplay.innerHTML = "";
  generatedCode = Math.floor(Math.random() * 10000).toString();
  while (generatedCode.length < 4) {
    generatedCode = `0${generatedCode}`;
  }
  codeDisplay.innerHTML = generatedCode;
  return generatedCode;
}

function wrongCode() {
  numberInputs.forEach((input) => {
    input.classList.add("invalid");
    input.classList.remove("valid");
  });
  setTimeout(() => {
    numberInputs.forEach((input) => {
      input.classList.remove("invalid");
    });
  }, 1000);
}

function checkCode() {
  enteredCode = "";
  numberInputs.forEach((element) => {
    enteredCode = enteredCode + element.value;
  });
  if (enteredCode.length < 4) {
    wrongCode();
    validityDisplay.innerHTML = "Please enter all four digits.";
  } else if (enteredCode != generatedCode) {
    wrongCode();
    validityDisplay.innerHTML = "Code entered is incorrect.";
  } else if (enteredCode == generatedCode) {
    numberInputs.forEach((input) => {
      input.classList.add("valid");
    });
    validityDisplay.innerHTML = "Your email has been confirmed.";
  }
  return enteredCode;
}

numberInputs.forEach((element) => {
  element.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key == "Backspace" && element.value.length == 0) {
      focusBack();
    } else if (key == "ArrowLeft") {
      event.preventDefault();
      focusBack();
    } else if (key == "Backspace" || key == "Tab") {
      return;
    } else if (key == "ArrowRight") {
      focusNext();
    } else if (key == "Enter") {
      checkCode();
    } else if (!isNumber(key)) {
      event.preventDefault();
    }
    if (isNumber(key) && element.value.length >= 1) {
      event.preventDefault();
      focusNext(key);
    }
  });
});

generateButton.addEventListener("click", () => {
  generateCode();
});

checkCodeButton.addEventListener("click", () => {
  checkCode();
});

generateCode();
