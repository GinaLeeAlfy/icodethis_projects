const buttons = document.querySelectorAll("button");
const responses = document.querySelectorAll(".response");

for (let index = 0; index < buttons.length; index++) {
  const element = buttons[index];

  element.addEventListener("click", () => {
    responses[index].classList.toggle("open");

    if (responses[index].classList.contains("open")) {
      buttons[index].innerHTML = `<i class="fa-solid fa-minus fa-2xl"></i>`;
    } else {
      buttons[index].innerHTML = `<i class="fa-solid fa-plus fa-2xl"></i>`;
    }
  });
}
