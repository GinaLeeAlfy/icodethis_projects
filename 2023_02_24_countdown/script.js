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
  let yearsDisplay = Math.floor(countdownTime / 31536000);
  let monthsDisplay = Math.floor(
    (countdownTime - yearsDisplay * 31536000) / 2678400
  );
  let daysDisplay = Math.floor(
    (countdownTime - yearsDisplay * 31536000 - monthsDisplay * 2678400) / 86400
  );
  let hoursDisplay = Math.floor(
    (countdownTime -
      daysDisplay * 86400 -
      monthsDisplay * 2678400 -
      yearsDisplay * 31536000) /
      3600
  );
  let minutesDisplay = Math.floor(
    (countdownTime -
      hoursDisplay * 3600 -
      daysDisplay * 86400 -
      monthsDisplay * 2678400 -
      yearsDisplay * 31536000) /
      60
  );
  let secondsDisplay =
    countdownTime -
    minutesDisplay * 60 -
    hoursDisplay * 3600 -
    daysDisplay * 86400 -
    monthsDisplay * 2678400 -
    yearsDisplay * 31536000;

  counters[0].innerText = yearsDisplay;
  counters[1].innerText = monthsDisplay;
  counters[2].innerText = daysDisplay;
  counters[3].innerText = hoursDisplay;
  counters[4].innerText = minutesDisplay;
  counters[5].innerText = secondsDisplay;
}

function getDateInput() {
  let dateInputValue = new Date(dateInput.value);
  let dateInputValueTime = dateInputValue.getTime();
  console.log(dateInputValue);

  let currentDate = new Date();
  let currentDateTime = currentDate.getTime();
  let timeDifferenceMS;
  let timeDifferenceS;
  console.log(currentDate);

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
