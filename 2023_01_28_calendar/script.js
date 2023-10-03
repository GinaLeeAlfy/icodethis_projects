//elements in html
const monthInput = document.querySelector("input");
const dates = document.querySelectorAll(".dates li");
const prevButton = document.querySelector("button:first-of-type");
const nextButton = document.querySelector("button:last-of-type");

//my variables
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

if (month < 10) {
  month = `0${month}`;
}

monthInput.value = `${year}-${month}`;

function populateCalendar(value) {
  let currData = value.split("-");
  let currYear = currData[0];
  let currMonth = currData[1];

  let dayOne = new Date(currYear, currMonth, 1).getDay();
  let lastDate = new Date(currYear, currMonth + 1, 0).getDate();
  let dayEnd = new Date(currYear, currMonth, lastDate).getDay();
  let prevMonthLastDate = new Date(currYear, currMonth, 0).getDate();

  for (let index = 0; index < dayOne; index++) {
    dates[index].innerHTML = prevMonthLastDate - dayOne + index + 1;
    dates[index].classList.add("inactive");
  }
}

populateCalendar(`${year}-${month}`);
