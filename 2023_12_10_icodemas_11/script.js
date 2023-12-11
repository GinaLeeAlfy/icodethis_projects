const customDonation = document.querySelector("#custom");
const radioButtons = document.querySelectorAll("input[type=radio]");
const counterButtons = document.querySelectorAll(".counter button");

for (const button of radioButtons) {
  button.addEventListener("click", () => {
    customDonation.value = button.value;
  });
}

counterButtons[0].addEventListener("click", (e) => {
  e.preventDefault();
  if (customDonation.value > 1) {
    customDonation.value--;
  }
  unselect(customDonation.value);
});

counterButtons[1].addEventListener("click", (e) => {
  e.preventDefault();
  customDonation.value++;
  unselect(customDonation.value);
});

const unselect = (value) => {
  for (const button of radioButtons) {
    button.checked = false;
    if (value === button.value) {
      button.checked = true;
    }
  }
  if (value <= 1) {
    counterButtons[0].disabled = true;
  } else {
    counterButtons[0].disabled = false;
  }
};
