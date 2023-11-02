const switchButton = document.querySelector(".switch");
const circle = document.querySelector(".circle");

switchButton.addEventListener("click", () => {
  circle.classList.toggle("on");
});
