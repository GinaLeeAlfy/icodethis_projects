const accountButton = document.querySelector(".account");
const accountPopup = document.querySelector(".container");

accountButton.addEventListener("click", () => {
  accountPopup.classList.toggle("visible");
});
