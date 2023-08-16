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
let data = [];
let drank = 0;
let goal = 2;
let fullDate = null;

removeButton.addEventListener("click", (event) => {
  drank = drank - Number(log.value);
  if (drank < 0) {
    drank = 0;
  }
  displayWater();
});

addButton.addEventListener("click", (event) => {
  drank = drank + Number(log.value);
  displayWater();
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

  if (month.length == 1) {
    month = `0${month}`;
  }

  if (date.length == 1) {
    date = `0${date}`;
  }

  //   fullDate = `${year}/${month}/${date}`;
  //   if (!data.includes(fullDate)) {
  //     data.push({ fullDate: amountDrank });
  //   }
}

function displayWater() {
  drank = Number(drank.toFixed(2));
  drankDisplay.innerHTML = `${drank}L`;
  let percent = (drank / goal) * 100;
  if (percent >= 100) {
    percent = 100;
    days[day].classList.add("finished-goal");
  } else if (percent < 100) {
    days[day].classList.remove("finished-goal");
  }
  circles[day].setAttribute(
    "style",
    `display:block; width:${percent}%; height:${percent}%`
  );
}

logDate();

markCurrentDay(day);
