const timeButtons = document.querySelectorAll("header button");
const prices = document.querySelectorAll("h3");
const billing = document.querySelectorAll("h4");

const monthlyButton = timeButtons[0];
const yearlyButton = timeButtons[1];
const starterPrice = prices[0];
const professionalPrice = prices[1];

monthlyButton.addEventListener("click", () => {
  if (!monthlyButton.classList.contains("active")) {
    monthlyButton.classList.add("active");
    yearlyButton.classList.remove("active");
    starterPrice.innerHTML = "$11.99 / month";
    professionalPrice.innerHTML = "$24.99 / month";
    billing.forEach((element) => {
      element.innerHTML = "Billed monthly";
    });
  } else {
    return;
  }
});

yearlyButton.addEventListener("click", () => {
  if (!yearlyButton.classList.contains("active")) {
    yearlyButton.classList.add("active");
    monthlyButton.classList.remove("active");
    starterPrice.innerHTML = "$8.99 / month";
    professionalPrice.innerHTML = "$21.99 / month";
    billing.forEach((element) => {
      element.innerHTML = "Billed yearly";
    });
  } else {
    return;
  }
});
