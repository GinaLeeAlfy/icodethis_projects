//elements in html
const monthInput = document.querySelector("input");
const dates = document.querySelectorAll(".dates li");
const prevButton = document.querySelector("button:first-of-type");
const nextButton = document.querySelector("button:last-of-type");

//my variables
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const today = date.getDate();
const todayDayOne = new Date(year, month - 1, 1).getDay();

if (month < 10) {
  month = `0${month}`;
}

monthInput.value = `${year}-${month}`;

function populateCalendar(value) {
  for (let index = 0; index < dates.length; index++) {
    const element = dates[index];
    element.classList.remove("inactive");
    element.innerHTML = "";
  }
  let currData = value.split("-");
  let currYear = currData[0];
  let currMonth = currData[1] - 1;

  //day of the first of month
  let dayOne = new Date(currYear, currMonth, 1).getDay();
  //number of dates in month
  let lastDate = new Date(currYear, currMonth + 1, 0).getDate();
  // day of last date in month
  let dayEnd = new Date(currYear, currMonth, lastDate).getDay();
  //number of date in previous month
  let prevMonthLastDate = new Date(currYear, currMonth, 0).getDate();

  //add in dates for previous month
  for (let index = 0; index < dayOne; index++) {
    dates[index].innerHTML = prevMonthLastDate - dayOne + index + 1;
    dates[index].classList.add("inactive");
  }

  //add in dates for current month
  for (let index = 0; index < lastDate; index++) {
    dates[index + dayOne].innerHTML = index + 1;
  }

  //add in dates for next month
  for (let index = 0; index < dates.length - lastDate - dayOne; index++) {
    dates[index + lastDate + dayOne].innerHTML = index + 1;
    dates[index + lastDate + dayOne].classList.add("inactive");
  }

  //set today if in this month/year
  if (currMonth + 1 == month && currYear == year) {
    dates[today + todayDayOne - 1].classList.add("today");
  } else {
    dates[today + todayDayOne - 1].classList.remove("today");
  }
}

populateCalendar(`${year}-${month}`);

//todo
dates.forEach((element) => {
  element.addEventListener("click", () => {
    //give option to add/remove events for day
  });
});

prevButton.addEventListener("click", () => {
  let value = monthInput.value;
  let currData = value.split("-");
  let currYear = currData[0];
  let currMonth = currData[1] - 1;

  if (currMonth == 0) {
    currMonth = 12;
    currYear = currYear - 1;
  } else if (currMonth < 10) {
    currMonth = `0${currMonth}`;
  }
  populateCalendar(`${currYear}-${currMonth}`);

  monthInput.value = `${currYear}-${currMonth}`;
});

nextButton.addEventListener("click", () => {
  let value = monthInput.value;
  let currData = value.split("-");
  let currYear = Number(currData[0]);
  let currMonth = Number(currData[1]) + 1;

  if (currMonth < 10) {
    currMonth = `0${currMonth}`;
  } else if (currMonth == 13) {
    currMonth = "01";
    currYear = currYear + 1;
  }
  populateCalendar(`${currYear}-${currMonth}`);

  monthInput.value = `${currYear}-${currMonth}`;
});
