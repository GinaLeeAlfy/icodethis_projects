//elements in html
const monthInput = document.querySelector("input");
const dates = document.querySelectorAll(".dates li");
const prevButton = document.querySelector("button:first-of-type");
const nextButton = document.querySelector("button:last-of-type");
const eventButton = document.querySelector("footer button");
const calendar = document.querySelector(".calendar");
const form = document.querySelector("form");

//my variables
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const today = date.getDate();
const todayDayOne = new Date(year, month - 1, 1).getDay();
let dayOne;
let dateSelected;
let selectedYear;
let selectedMonth;
let fullDateSelected;

if (month < 10) {
  month = `0${month}`;
}

//display this month
monthInput.value = `${year}-${month}`;

const eventDates = [
  {
    fullDateSelected: `${selectedYear}/${selectedMonth}/${dateSelected}`,
    events: [
      { eventTime: "13:00", eventDescription: "Meeting with my accountant" },
    ],
  },
];
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
  dayOne = new Date(currYear, currMonth, 1).getDay();
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

  //set selected day
  if (currMonth == selectedMonth && currYear == selectedYear) {
    setSelectedDate();
  }
}

function prevMonth() {
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
}

function nextMonth() {
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
}

function setSelectedDate() {
  //set selected day
  if (dateSelected != undefined) {
    dates[dayOne + dateSelected - 1].classList.add("selected");
  }
}

function clearSelectedDate() {
  dates.forEach((el) => {
    el.classList.remove("selected");
  });
}

populateCalendar(`${year}-${month}`);

//event listeners on the dates
for (let index = 0; index < dates.length; index++) {
  const element = dates[index];
  element.addEventListener("click", () => {
    clearSelectedDate();

    dateSelected = Number(element.innerHTML);

    //move the calendar if date of different month
    if (element.classList.contains("inactive")) {
      if (index <= 7) {
        prevMonth();
      } else {
        nextMonth();
      }
    }

    let value = monthInput.value;
    let selectedData = value.split("-");
    selectedYear = selectedData[0];
    selectedMonth = selectedData[1] - 1;

    setSelectedDate();
  });
}

prevButton.addEventListener("click", () => {
  clearSelectedDate();
  prevMonth();
});

nextButton.addEventListener("click", () => {
  clearSelectedDate();
  nextMonth();
});

eventButton.addEventListener("click", () => {
  calendar.style.display = "none";
  form.style.display = "flex";
});
