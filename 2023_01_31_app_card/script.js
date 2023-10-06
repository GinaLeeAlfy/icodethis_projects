const colorModeButton = document.querySelector("header button");
const body = document.querySelector("body");

colorModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    colorModeButton.innerHTML = `<i class="fa-regular fa-sun fa-xl"></i>`;
  } else {
    colorModeButton.innerHTML = `<i class="fa-solid fa-moon fa-xl"></i>`;
  }
});
