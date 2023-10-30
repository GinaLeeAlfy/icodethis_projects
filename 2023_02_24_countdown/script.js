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

function getDateInput() {
  let dateInputValue = new Date(dateInput.value);
  let dateInputValueTime = dateInputValue.getTime();

  let currentDate = new Date();
  let currentDateTime = currentDate.getTime();

  if (dateInputValueTime > currentDateTime) {
    let timeDifferenceMS = dateInputValueTime - currentDateTime;
    let timeDifferenceS = parseInt(timeDifferenceMS / 1000);

    let timer = setInterval(frame, 1000);
    let countdownTime = timeDifferenceS;
    function frame() {
      if (countdownTime <= 0) {
        clearInterval(timer);
      } else {
        countdownTime--;
        console.log(countdownTime);
        let yearsDisplay = Math.floor(countdownTime / 31536000);
        let monthsDisplay = Math.floor(
          (countdownTime - yearsDisplay * 31536000) / 2678400
        );
        let daysDisplay = Math.floor(
          (countdownTime - yearsDisplay * 31536000) / 86400
        );
        let hoursDisplay = Math.floor(
          (countdownTime - daysDisplay * 86400 - yearsDisplay * 31536000) / 3600
        );
        let minutesDisplay = Math.floor(
          (countdownTime -
            hoursDisplay * 3600 -
            daysDisplay * 86400 -
            yearsDisplay * 31536000) /
            60
        );
        let secondsDisplay =
          countdownTime -
          minutesDisplay * 60 -
          hoursDisplay * 3600 -
          daysDisplay * 86400 -
          yearsDisplay * 31536000;
        console.log(secondsDisplay);

        counters[0].innerText = yearsDisplay;
        counters[1].innerText = monthsDisplay;
        counters[2].innerText = daysDisplay;
        counters[3].innerText = hoursDisplay;
        counters[4].innerText = minutesDisplay;
        counters[5].innerText = secondsDisplay;
      }
    }
  } else {
    alert("Please choose a date/time in the future.");
  }
}

formatInput();
dateInput.min = `${year}-${monthFormatted}-${dayFormatted}T${hourFormatted}:${minuteFormatted}`;
