const DAYS_OF_WEEK = 7;
let d = new Date();
let day = d.getDay();
const menu = document.querySelector("header button:first-child");
const notification = document.querySelector("header button:last-child");
const log = document.querySelector("input");
const removeButton = document.querySelector("section button:first-child");
const addButton = document.querySelector("section button:last-child");
const days = document.querySelectorAll(".day");
const circles = document.querySelectorAll(".circle");
const drankDisplay = document.querySelector(".drank");
const goalDisplay = document.querySelector(".goal");
const myLinks = document.getElementById("myLinks");
let data = [
  {
    fullDate: "2023/08/15",
    year: "2023",
    month: "08",
    date: "15",
    day: "2",
    drank: "1",
  },
  {
    fullDate: "2023/08/14",
    year: "2023",
    month: "08",
    date: "14",
    day: "1",
    drank: "0.8",
  },
  {
    fullDate: "2023/08/13",
    year: "2023",
    month: "08",
    date: "13",
    day: "0",
    drank: "2",
  },
  {
    fullDate: "2023/08/12",
    year: "2023",
    month: "08",
    date: "12",
    day: "6",
    drank: "1.5",
  },
  {
    fullDate: "2023/08/11",
    year: "2023",
    month: "08",
    date: "11",
    day: "5",
    drank: "0.2",
  },
];
let weekData = [];

let drank = 0;
let goal = 2;
let fullDate = null;

removeButton.addEventListener("click", (event) => {
  drank = drank - Number(log.value);
  if (drank < 0) {
    drank = 0;
  }
  displayWater();
  data[0].drank = drank;
});

addButton.addEventListener("click", (event) => {
  drank = drank + Number(log.value);
  displayWater();
  data[0].drank = `${drank}`;
});

notification.addEventListener("click", (event) => {
  alert(`No new notifications.`);
});

menu.addEventListener("click", (event) => {
  toggleMenu(myLinks);
});

function toggleMenu(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function markCurrentDay(day) {
  days[day].classList.add("current-day");
}

function logDate() {
  let year = d.getFullYear();
  let month = `${d.getMonth() + 1}`;
  let date = `${d.getDate()}`;
  let thisDay = `${d.getDay()}`;

  if (month.length == 1) {
    month = `0${month}`;
  }

  if (date.length == 1) {
    date = `0${date}`;
  }

  fullDate = `${year}/${month}/${date}`;
  if (!data.some((e) => e.fullDate === fullDate)) {
    data.unshift({
      fullDate: `${fullDate}`,
      year: `${year}`,
      month: `${month}`,
      date: `${date}`,
      day: `${day}`,
      drank: `${drank}`,
    });
  }
  const sliceOrganizedData = data.slice(0, day + 1);
  weekData = sliceOrganizedData.sort((a, b) => a.day - b.day);
}

function displayWater() {
  drank = Number(drank.toFixed(2));
  drankDisplay.innerHTML = `${drank}L`;
  displayCircle(day, drank);
}

function displayCircle(theDay, amountDrank) {
  let percent = (amountDrank / goal) * 100;
  if (percent >= 100) {
    percent = 100;
    days[theDay].classList.add("finished-goal");
  } else if (percent < 100) {
    days[theDay].classList.remove("finished-goal");
  }
  circles[theDay].setAttribute(
    "style",
    `display:block; width:${percent}%; height:${percent}%`
  );
}

function populateWeek() {
  for (let index = 0; index < weekData.length; index++) {
    let theDay = weekData[index].day;
    let amountDrank = weekData[index].drank;
    displayCircle(theDay, amountDrank);
  }
}

logDate();

markCurrentDay(day);

populateWeek();
