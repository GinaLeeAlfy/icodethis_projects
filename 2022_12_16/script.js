const namesDisplay = document.querySelectorAll(".name");
const scoresDisplay = document.querySelectorAll(".score");
const exit = document.querySelector("footer button:first-child");
const MAXDISPLAY = 5;

const data = [
  { name: "Brandon Lawson", score: 248.357, id: 1 },
  { name: "Ricardo Franklin", score: 258.244, id: 2 },
  { name: "Isabelle Willis", score: 200.15, id: 3 },
  { name: "Ruby Shelton", score: 245.459, id: 4 },
  { name: "Jon Banks", score: 227.266, id: 5 },
  { name: "GinaLeeAlfy", score: 500.345, id: 6 },
];

const organizedData = data.sort((a, b) => a.score - b.score).reverse();

for (let index = 0; index < MAXDISPLAY; index++) {
  namesDisplay[index].innerHTML = organizedData[index].name;
  scoresDisplay[index].innerHTML = organizedData[index].score;
}

// exit.addEventListener("click", )
