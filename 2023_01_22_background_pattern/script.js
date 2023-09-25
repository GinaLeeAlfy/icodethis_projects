let amountDots;
let dots = [];
let waiting;

function randomDot() {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.style.top =
    Math.round((window.innerHeight * Math.random()) / 40) * 40 + 24 + "px";
  dot.style.left =
    Math.round((window.innerWidth * Math.random()) / 40) * 40 + 24 + "px";

  document.body.appendChild(dot);
  return dot;
}
function calcDots() {
  amountDots = Math.round(
    ((window.innerHeight * window.innerWidth) / 1600) * 0.1
  );
}

function addDots() {
  removeDots();
  calcDots();
  for (let index = 0; index < amountDots; index++) {
    dots.push(randomDot());
  }
}

function waitAddDots() {
  waiting = setTimeout(() => {
    addDots();
  }, 1000);
}

function removeDots() {
  while (dots.length > 0) {
    document.body.removeChild(dots.pop());
  }
}

window.addEventListener("load", () => {
  addDots();
});

window.onresize = function () {
  clearTimeout(waiting);
  waitAddDots();
};
