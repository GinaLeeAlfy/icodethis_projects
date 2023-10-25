const addUserButton = document.querySelector(".add");
const form = document.querySelector("form");
const mainContainer = document.querySelector(".container");

addUserButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
  mainContainer.classList.toggle("hidden");
});
