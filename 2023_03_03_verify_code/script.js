const numberInputs = Array.prototype.slice.call(
  document.querySelectorAll("input[type=number]")
);

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
    console.log(key);
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
  //put cursor at end of input
  input.value = input.value;
  //   setTimeout(function () {
  //     input.selectionStart = input.selectionEnd = 10000;
  //   }, 0);
}

numberInputs.forEach((element) => {
  element.addEventListener("keydown", (event) => {
    const key = event.key;
    if (
      (key == "Backspace" && element.value.length == 0) ||
      key == "ArrowLeft"
    ) {
      focusBack();
    } else if (key == "Backspace" || key == "Tab") {
      return;
    } else if (key == "ArrowRight") {
      focusNext();
    } else if (!isNumber(key)) {
      console.log("entered");
      event.preventDefault();
    }
    if (isNumber(key) && element.value.length >= 1) {
      event.preventDefault();
      focusNext(key);
    }
  });
});
