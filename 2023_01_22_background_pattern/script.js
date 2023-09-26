let amountDots;
let dots = [];
let waiting;

function randomDot() {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.style.top = calcLocation(window.innerHeight);
  dot.style.left = calcLocation(window.innerWidth);

  document.body.appendChild(dot);
  return dot;
}

function calcLocation(element) {
  let randomSpot = Math.round((element * Math.random()) / 40) * 40;

  if (randomSpot < element - 88) {
    randomSpot = `${randomSpot + 16}px`;
  } else {
    randomSpot = `${randomSpot - 64}px`;
  }
  return randomSpot;
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

// function addListenerOnDots() {
//     dots.forEach(element => {
//         element.addEventListener
//     });
// }

window.addEventListener("load", () => {
  addDots();
});

window.onresize = function () {
  clearTimeout(waiting);
  waitAddDots();
};
