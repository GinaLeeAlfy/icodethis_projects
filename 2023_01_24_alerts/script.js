const createButton = document.querySelector(".create");
const success = document.querySelector(".alert");
const fail = document.querySelector(".alert:last-of-type");
const exitButtons = document.querySelectorAll(".alert button");
let isCreated;

createButton.addEventListener("click", () => {
  let random = Math.random();
  if (random > 0.5) {
    isCreated = true;
  } else {
    isCreated = false;
  }

  createButton.style.display = "none";

  if (isCreated == true) {
    success.classList.add("active");
  } else {
    fail.classList.add("active");
  }
});

exitButtons.forEach((element) => {
  element.addEventListener("click", () => {
    success.classList.remove("active");
    fail.classList.remove("active");
    createButton.style.display = "block";
  });
});
