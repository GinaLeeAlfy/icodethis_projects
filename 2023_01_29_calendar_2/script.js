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
const alarmInput = document.querySelector("#alarm");

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
      {
        eventTime: "10:00",
        eventDescription: "Meeting with my accountant",
        hasAlarm: "true",
      },
    ],
  },
  {
    fullDate: "2023/10/18",
    events: [
      {
        eventTime: "13:00",
        eventDescription: "Different my accountant",
        hasAlarm: "false",
      },
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
    dates[Number(today) + todayDayOne - 1].classList.add("today");
  } else {
    dates[Number(today) + todayDayOne - 1].classList.remove("today");
  }

  //set selected day
  if (currMonth == selectedMonth - 1 && currYear == selectedYear) {
    setSelectedDate();
  }

  showSelectedDateEvents();
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
  clearSelectedDate();
  //set selected day
  if (dateSelected != undefined) {
    dates[dayOne + dateSelected - 1].classList.add("selected");
  }

  dateSelected = dateSelected.toString();
  if (dateSelected.length == 1 && dateSelected < 10) {
    dateSelected = `0${dateSelected}`;
  }

  showSelectedDateEvents();
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
  }
}

function showSelectedDateEvents() {
  const eventContainer = document.querySelector(".events ol");

  while (eventContainer.children.length > 1) {
    eventContainer.removeChild(eventContainer.lastChild);
  }

  let eventsDisplayed = document.querySelectorAll(".events ol li");
  const eventTemplate = document.querySelector(".clone");
  let eventClone = eventTemplate.cloneNode(true);

  findSelectedDateIndex();

  if (isInside == true) {
    while (eventsDisplayed.length < eventDates[dateIndex].events.length) {
      eventClone = eventTemplate.cloneNode(true);
      eventContainer.appendChild(eventClone);
      eventsDisplayed = document.querySelectorAll(".events ol li");
    }

    if (eventsDisplayed.length == eventDates[dateIndex].events.length) {
      const descriptions = document.querySelectorAll(".event-description");
      const times = document.querySelectorAll(".event-time");
      const buttons = document.querySelectorAll(".events li button");

      for (
        let index = 0;
        index < eventDates[dateIndex].events.length;
        index++
      ) {
        const element = eventDates[dateIndex].events[index];
        eventsDisplayed[index].classList.remove("hidden");
        descriptions[index].innerHTML = element.eventDescription;
        times[index].innerHTML = element.eventTime;
        buttons[index].style.visibility = "visible";
        if (element.hasAlarm === "true") {
          buttons[index].classList.add("has-alarm");
        } else {
          buttons[index].classList.remove("has-alarm");
        }
      }
    }
  } else {
    const descriptions = document.querySelectorAll(".event-description");
    const times = document.querySelectorAll(".event-time");
    const buttons = document.querySelectorAll(".events li button");

    eventsDisplayed[0].classList.add("hidden");
    descriptions[0].innerHTML = "";
    times[0].innerHTML = "";
    buttons[0].style.visibility = "hidden";
  }
  editEvent();
}

//edit event
function editEvent() {
  let eventsDisplayed = document.querySelectorAll(".events ol li");
  let descriptions = document.querySelectorAll(".event-description");
  let times = document.querySelectorAll(".event-time");
  let buttons = document.querySelectorAll(".events li button");

  //todo bug here when you click on eventsDisplayed[0] it runs through whole for loop and deletes all events for that day
  for (let index = 0; index < eventsDisplayed.length; index++) {
    const element = eventsDisplayed[index];

    element.addEventListener("click", () => {
      let currentTime = times[index].innerHTML;
      let splitCurrentTime = currentTime.split(":");
      let currentDescription = descriptions[index].innerHTML;
      let currentHasAlarm = buttons[index].classList.contains("has-alarm");

      findSelectedDateIndex();
      if (dateIndex >= 0) {
        eventDates[dateIndex].events.splice(index, 1);

        if (eventDates[dateIndex].events.length == 0) {
          eventDates.splice(dateIndex, 1);
        }

        let hour = splitCurrentTime[0];
        let minute = splitCurrentTime[1];

        //format the values
        if (hour < 10 && hour.length == 1) {
          hour = `0${hour}`;
        }

        if (minute < 10 && minute != "00" && minute.length == 1) {
          minute = `0${minute}`;
        }

        if (selectedMonth < 10 && selectedMonth.length == 1) {
          selectedMonth = `0${selectedMonth}`;
        }

        if (
          dateSelected.length == 1 &&
          dateSelected < 10 &&
          dateSelected.length == 1
        ) {
          dateSelected = `0${dateSelected}`;
        }

        if (today < 10 && today.length == 1) {
          today = `0${today}`;
        }

        calendar.style.display = "none";
        form.style.display = "flex";
        if (selectedMonth == undefined) {
          timeInput.value = `${year}-${month}-${today}T${hour}:${minute}`;
        } else {
          timeInput.value = `${selectedYear}-${selectedMonth}-${dateSelected}T${hour}:${minute}`;
        }

        descriptionInput.value = currentDescription;
        alarmInput.checked = currentHasAlarm;
      }
    });
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
  dateSelected = dateSelected.toString();

  //format the values
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (selectedMonth < 10 && selectedMonth.length == 1) {
    selectedMonth = `0${selectedMonth}`;
  }

  if (dateSelected.length == 1 && dateSelected < 10) {
    dateSelected = `0${dateSelected}`;
  }

  if (today < 10 && today.length == 1) {
    today = `0${today}`;
  }

  calendar.style.display = "none";
  form.style.display = "flex";
  if (selectedMonth == undefined) {
    timeInput.value = `${year}-${month}-${today}T${hour}:${minute}`;
  } else {
    timeInput.value = `${selectedYear}-${selectedMonth}-${dateSelected}T${hour}:${minute}`;
  }
});

reset.addEventListener("click", () => {
  calendar.style.display = "flex";
  form.style.display = "none";
  showSelectedDateEvents();
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let description = descriptionInput.value;
  let hasAlarm = alarmInput.checked;

  let value = timeInput.value;
  let selectedData = value.split("T");
  let unsplitDate = selectedData[0];
  let time = selectedData[1];

  let splitDate = unsplitDate.split("-");

  selectedYear = splitDate[0];
  selectedMonth = splitDate[1];
  dateSelected = splitDate[2];

  if (
    selectedYear == undefined ||
    selectedMonth == undefined ||
    dateSelected == undefined ||
    time == undefined
  ) {
    alert("Please add date/time.");
    return;
  }

  findSelectedDateIndex();

  if (isInside == true) {
    eventDates[dateIndex].events.push({
      eventTime: `${time}`,
      eventDescription: `${description}`,
      hasAlarm: `${hasAlarm}`,
    });

    function getNumber(string) {
      return string.replace(":", "");
    }

    eventDates[dateIndex].events.sort(
      ({ eventTime: a }, { eventTime: b }) => getNumber(a) - getNumber(b)
    );
  } else {
    eventDates.push({
      fullDate: `${selectedYear}/${selectedMonth}/${dateSelected}`,
      events: [
        {
          eventTime: `${time}`,
          eventDescription: `${description}`,
          hasAlarm: `${hasAlarm}`,
        },
      ],
    });
  }

  calendar.style.display = "flex";
  form.style.display = "none";

  setSelectedDate();

  return eventDates;
});
