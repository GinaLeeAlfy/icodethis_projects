const buttons = document.querySelectorAll("button");
const footer = document.querySelector("footer");

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (!element.classList.contains("following")) {
      buttons.forEach((element) => {
        element.classList.add("following");
        element.innerHTML = "Following";
      });
      footer.style.visibility = "hidden";
    } else if (element.classList.contains("following")) {
      buttons.forEach((element) => {
        element.classList.remove("following");
        element.innerHTML = "Follow";
      });
      footer.style.visibility = "visible";
    }
  });
});
