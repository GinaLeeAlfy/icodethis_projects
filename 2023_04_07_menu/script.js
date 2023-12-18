const options = document.querySelectorAll(".button");

options.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      options.forEach((button) => {
        button.classList.remove("active");
      });
    } else {
      options.forEach((button) => {
        button.classList.remove("active");
      });
      element.classList.add("active");
    }
  });
});
