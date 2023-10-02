const purchaseSlider = document.querySelector(".purchase .slider");
const equitySlider = document.querySelector(".equity .slider");
const timeSlider = document.querySelector(".time .slider");

const purchaseProgress = document.querySelector(".purchase .progress");
const equityProgress = document.querySelector(".equity .progress");
const timeProgress = document.querySelector(".time .progress");

const purchaseValue = document.querySelector(".purchase-display");
const equityValue = document.querySelector(".equity-display");
const timeValue = document.querySelector(".time-display");

const loan = document.querySelector(".loan");
const estimate = document.querySelector(".estimate");
const interest = document.querySelector(".interest");

let rate;
let loanAmount;
let estimated;

function adjustProgress(slider, progress, display, years) {
  let sliderValue = slider.value;
  let sliderMax = slider.max;
  let percentage = (sliderValue / sliderMax) * 100;
  setInterestRate(timeSlider.value);
  calcEstimate();

  progress.style.width = `${percentage}%`;
  if (years == true) {
    display.innerHTML = `${addCommas(slider.value)} years`;
  } else {
    display.innerHTML = `$${addCommas(slider.value)}`;
  }
  loan.innerHTML = `$${addCommas(loanAmount)}`;
  interest.innerHTML = `${rate}% interest`;
  estimate.innerHTML = `$${addCommas(estimated)}`;
}

function setEquityMax() {
  equitySlider.setAttribute("max", purchaseSlider.value);
  adjustProgress(equitySlider, equityProgress, equityValue);
}

function addCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcEstimate() {
  loanAmount = purchaseSlider.value - equitySlider.value;
  estimated = Math.round((rate / 100 / 12) * loanAmount);
  if (estimated < 0) {
    estimated = 0;
  }
  return estimated, loanAmount;
}

function setInterestRate(time) {
  if (time == 5) {
    rate = 6.63;
  } else if (time == 10) {
    rate = 6.88;
  } else if (time == 15) {
    rate = 7.34;
  } else if (time > 15) {
    rate = 7.83;
  } else {
    console.log("error");
  }
  return rate;
}

equitySlider.setAttribute("max", purchaseSlider.value);
equitySlider.setAttribute("value", purchaseSlider.value / 2);

adjustProgress(purchaseSlider, purchaseProgress, purchaseValue);
adjustProgress(equitySlider, equityProgress, equityValue);
adjustProgress(timeSlider, timeProgress, timeValue, true);
