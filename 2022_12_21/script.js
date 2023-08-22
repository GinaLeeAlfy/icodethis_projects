const button = document.querySelector("button");
const footer = document.querySelector("footer");

button.addEventListener("click", (event) => {
  if (!button.classList.contains("following")) {
    button.classList.add("following");
    button.innerHTML = "Following";
    footer.style.display = "none";
  } else if (button.classList.contains("following")) {
    button.classList.remove("following");
    button.innerHTML = "Follow";
    footer.style.display = "flex";
  }
});
