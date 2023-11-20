const span = document.querySelector("span");

span.addEventListener("click", (event) => {
  if (event.target.tagName != "BUTTON") {
    span.classList.toggle("visible");
  }
});
