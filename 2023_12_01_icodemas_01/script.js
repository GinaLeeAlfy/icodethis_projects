const counters = document.querySelectorAll("h2");

const todayDate = new Date();
const month = todayDate.getMonth() + 1;
const year = todayDate.getFullYear();
const day = todayDate.getDate();
const hour = todayDate.getHours();
const minute = todayDate.getMinutes();

let countdownTime;

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

function getChristmasDate() {
  let dateChristmas;
  if (month === 12 && day > 24) {
    dateChristmas = new Date(`December 25, ${year + 1} 00:00:00`);
  } else {
    dateChristmas = new Date(`December 25, ${year} 00:00:00`);
  }
  let dateChristmasTime = dateChristmas.getTime();

  let currentDate = new Date();
  let currentDateTime = currentDate.getTime();
  let timeDifferenceMS;
  let timeDifferenceS;

  timeDifferenceMS = dateChristmasTime - currentDateTime;
  timeDifferenceS = parseInt(timeDifferenceMS / 1000);

  let timer = setInterval(frame, 1000);

  countdownTime = timeDifferenceS;

  function frame() {
    if (countdownTime <= 0) {
      clearInterval(timer);
      isStarted = false;
    } else {
      countdownTime--;
      setDisplays();
    }
  }
}

getChristmasDate();
