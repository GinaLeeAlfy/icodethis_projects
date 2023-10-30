const counters = document.querySelectorAll("h2");
const dateInput = document.querySelector("#countdown-date");

const todayDate = new Date();
const month = todayDate.getMonth() + 1;
const year = todayDate.getFullYear();
const day = todayDate.getDate();
const hour = todayDate.getHours();
const minute = todayDate.getMinutes();

let monthFormatted;
let dayFormatted;
let hourFormatted;
let minuteFormatted;
let isNeedClear = false;
let isStarted = false;
let countdownTime;

function formatInput() {
  if (month < 10) {
    monthFormatted = `0${month}`;
  } else {
    monthFormatted = month;
  }
  if (day < 10) {
    dayFormatted = `0${day}`;
  } else {
    dayFormatted = day;
  }
  if (hour < 10) {
    hourFormatted = `0${hour}`;
  } else {
    hourFormatted = hour;
  }
  if (minute + 1 < 10) {
    minuteFormatted = `0${minute + 1}`;
  } else {
    minuteFormatted = minute + 1;
  }
}

function setDisplays() {
  let daysDisplay = Math.floor(countdownTime / 86400);
  let hoursDisplay = Math.floor((countdownTime - daysDisplay * 86400) / 3600);
  let minutesDisplay = Math.floor(
    (countdownTime - hoursDisplay * 3600 - daysDisplay * 86400) / 60
  );
  let secondsDisplay =
    countdownTime -
    minutesDisplay * 60 -
    hoursDisplay * 3600 -
    daysDisplay * 86400;

  counters[0].innerText = daysDisplay;
  counters[1].innerText = hoursDisplay;
  counters[2].innerText = minutesDisplay;
  counters[3].innerText = secondsDisplay;
}

function getDateInput() {
  let dateInputValue = new Date(dateInput.value);
  let dateInputValueTime = dateInputValue.getTime();

  let currentDate = new Date();
  let currentDateTime = currentDate.getTime();
  let timeDifferenceMS;
  let timeDifferenceS;

  if (dateInputValueTime > currentDateTime) {
    isStarted = true;
    timeDifferenceMS = dateInputValueTime - currentDateTime;
    timeDifferenceS = parseInt(timeDifferenceMS / 1000);

    let timer = setInterval(frame, 1000);

    if (isNeedClear) {
      clearInterval(timer);
      isNeedClear = false;
    }
    countdownTime = timeDifferenceS;

    function frame() {
      isNeedClear = true;
      if (countdownTime <= 0) {
        clearInterval(timer);
        isNeedClear = false;
        isStarted = false;
      } else {
        countdownTime--;
        setDisplays();
      }
    }
  } else if (dateInputValue == "Invalid Date") {
    alert("Please choose a valid date/time.");
  } else {
    alert("Please choose a date/time in the future.");
    if (isStarted === true) {
      isNeedClear = true;
      countdownTime = 0;
      setDisplays();
    }
    dateInput.value = undefined;
  }
}

formatInput();
dateInput.min = `${year}-${monthFormatted}-${dayFormatted}T${hourFormatted}:${minuteFormatted}`;
