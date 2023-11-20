const lastRadio = document.querySelector(".radio-button:last-of-type");
const radios = document.querySelectorAll("input[type=radio]");
const inputNumber = document.querySelector("input[type=number]");
const donateButton = document.querySelector("input[type=submit]");

let isChecked = false;
let checkedIndex;

lastRadio.addEventListener("click", () => {
  radios.forEach((element) => {
    element.checked = false;
  });
  radios[3].checked = true;
});

donateButton.addEventListener("click", (event) => {
  event.preventDefault();

  radios.forEach((element, index) => {
    if (element.checked) {
      isChecked = true;
      checkedIndex = index;
    }
  });
  if (radios[3].checked === true && inputNumber.value >= 0.5) {
    alert(`Pretend donation of $${inputNumber.value} made`);
    isChecked = false;
  } else if (isChecked && checkedIndex < 3) {
    alert(`Pretend donation of ${radios[checkedIndex].value} made`);
    isChecked = false;
  } else {
    alert("Please choose donation amount");
    isChecked = false;
  }
});
