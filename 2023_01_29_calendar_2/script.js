//elements in html
const monthInput = document.querySelector("input");
const dates = document.querySelectorAll(".dates li");
const prevButton = document.querySelector("button:first-of-type");
const nextButton = document.querySelector("button:last-of-type");
const eventButton = document.querySelector("footer button");
const calendar = document.querySelector(".calendar");
const form = document.querySelector("form");
const reset = document.querySelector("#reset");
const submit = document.querySelector("#submit");
const timeInput = document.querySelector("#time");
const descriptionInput = document.querySelector("#description");

//my variables
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
let today = date.getDate();
const todayDayOne = new Date(year, month - 1, 1).getDay();
let dayOne;
let dateSelected;
let selectedYear;
let selectedMonth;
let fullDateSelected;
let dateIndex;
let isInside = false;

if (month < 10) {
  month = `0${month}`;
}

//display this month
monthInput.value = `${year}-${month}`;

const eventDates = [
  {
    fullDate: "2023/10/17",
    events: [
      { eventTime: "10:00", eventDescription: "Meeting with my accountant" },
    ],
  },
  {
    fullDate: "2023/10/18",
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
  if (currMonth == selectedMonth - 1 && currYear == selectedYear) {
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

  // const eventContainer = document.querySelector(".events ol");
  // let eventsDisplayed = document.querySelectorAll(".events ol li");
  // const eventTemplate = document.querySelector(".clone");
  // let eventClone = eventTemplate.cloneNode(true);

  // findSelectedDateIndex();

  // while (eventsDisplayed.length < eventDates[dateIndex].events.length) {
  //   eventClone = eventTemplate.cloneNode(true);
  //   eventContainer.appendChild(eventClone);
  //   eventsDisplayed = document.querySelectorAll(".events ol li");
  // }

  // if (eventsDisplayed.length == eventDates[dateIndex].events.length) {
  //   const descriptions = document.querySelectorAll(".event-description");
  //   const times = document.querySelectorAll(".event-time");

  //   for (let index = 0; index < eventDates[dateIndex].events.length; index++) {
  //     const element = eventDates[dateIndex].events[index];
  //     descriptions[index].innerHTML = element.eventDescription;
  //     times[index].innerHTML = element.eventTime;
  //   }
  // }
}

function clearSelectedDate() {
  dates.forEach((el) => {
    el.classList.remove("selected");
  });
}

function findSelectedDateIndex() {
  isInside = false;
  dateIndex = -1;

  for (let index = 0; index < eventDates.length; index++) {
    const element = eventDates[index];
    if (
      element.fullDate.includes(
        `${selectedYear}/${selectedMonth}/${dateSelected}`
      )
    ) {
      isInside = true;
      dateIndex = index;
    }
    return dateIndex, isInside;
  }
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
    selectedMonth = selectedData[1];

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
  let hour = date.getHours();
  let minute = date.getMinutes();
  let formatSelectedMonth = selectedMonth + 1;

  //format the values
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (formatSelectedMonth < 10) {
    formatSelectedMonth = `0${formatSelectedMonth}`;
  }

  if (dateSelected < 10) {
    dateSelected = `0${dateSelected}`;
  }

  if (today < 10) {
    today = `0${today}`;
  }

  calendar.style.display = "none";
  form.style.display = "flex";
  if (selectedMonth == undefined) {
    timeInput.value = `${year}-${month}-${today}T${hour}:${minute}`;
  } else {
    timeInput.value = `${selectedYear}-${formatSelectedMonth}-${dateSelected}T${hour}:${minute}`;
  }
});

reset.addEventListener("click", () => {
  calendar.style.display = "flex";
  form.style.display = "none";
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let description = descriptionInput.value;

  let value = timeInput.value;
  let selectedData = value.split("T");
  let unsplitDate = selectedData[0];
  let time = selectedData[1];

  let splitDate = unsplitDate.split("-");

  selectedYear = splitDate[0];
  selectedMonth = splitDate[1];
  dateSelected = splitDate[2];

  findSelectedDateIndex();

  if (isInside == true) {
    eventDates[dateIndex].events.push({
      eventTime: `${time}`,
      eventDescription: `${description}`,
    });
  } else {
    eventDates.push({
      fullDate: `${selectedYear}/${selectedMonth}/${dateSelected}`,
      events: [{ eventTime: `${time}`, eventDescription: `${description}` }],
    });
  }

  calendar.style.display = "flex";
  form.style.display = "none";

  return eventDates;
});
