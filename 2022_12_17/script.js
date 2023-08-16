let d = new Date();
let day = d.getDay();
const menu = document.querySelector("header button:first-child");
const notification = document.querySelector("header button:last-child");
const log = document.querySelector("section button");
const days = document.querySelectorAll(".day");
const circles = document.querySelectorAll(".circle");
const drankDisplay = document.querySelector(".drank");
const goalDisplay = document.querySelector(".goal");
const myLinks = document.getElementById("myLinks");
let data = [];
let drank = 1.3;
let goal = 2;

log.addEventListener("click", (event) => {
  //adjust water drank
  drankDisplay.innerHTML = `${drank}L`;
  let percent = (drank / goal) * 100;
  circles[day].setAttribute(
    "style",
    `display:block; width:${percent}%; height:${percent}%`
  );
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
  let currentD = d;
  let currentDay = currentD.getDay();
  let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

  if (!data.includes(date)) {
    data.push({ date: amountDrank });
  }

  if (currentDay != day) {
    //add drank to data
  }
}

markCurrentDay(day);
