const filtersButton = document.querySelector("button");
const links = document.querySelector(".links");

filtersButton.addEventListener("click", () => {
  links.classList.toggle("active");
});
