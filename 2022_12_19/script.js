const graphs = document.querySelectorAll("img");
const graphButtons = document.querySelectorAll(".graph-options button");
const shareButton = document.querySelector(".icon");

for (let index = 0; index < graphButtons.length; index++) {
  const element = graphButtons[index];
  element.addEventListener("click", (event) => {
    graphButtons.forEach((element) => {
      element.classList.remove("selected-button");
    });
    graphs.forEach((element) => {
      element.classList.remove("selected-img");
    });
    element.classList.add("selected-button");
    graphs[index].classList.add("selected-img");
  });
}

shareButton.addEventListener("click", (event) => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  alert(`Copied the text: + ${url}`);
});
