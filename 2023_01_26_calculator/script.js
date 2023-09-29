const buttons = document.querySelectorAll(".button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (isNaN(element.innerHTML)) {
      console.log("not a number");
    } else {
      Number.element.innerHTML;
    }
  });
});
