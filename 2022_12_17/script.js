const d = new Date();
let day = d.getDay();
const menu = document.querySelector("header button:first-child");
const notification = document.querySelector("header button:last-child");
const log = document.querySelector("section button");
const circles = document.querySelectorAll(".circle");
const drankDisplay = document.querySelector(".drank");
const goalDisplay = document.querySelector(".goal");
const myLinks = document.getElementById("myLinks");
const tues = document.getElementById("tues");
let drank = 1.3;
let goal = 2;

log.addEventListener("click", (event) => {
  //adjust water drank
  drankDisplay.innerHTML = `${drank}L`;
  let percent = (drank / goal) * 100;
  toggleMenu(circles[day]);
  circles[day].setAttribute("style", `width=${percent}%, height=${percent}%`);
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
