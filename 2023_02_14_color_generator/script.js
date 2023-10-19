const notification = document.querySelector(".notification");
const colorDisplays = document.querySelectorAll(".color");
const colorTexts = document.querySelectorAll("h3");
const generateButton = document.querySelector("button");
const colorCards = document.querySelectorAll(".card");

let colorGenerated = "";
let colorsPalette = [];

function generateRandomColors() {
  while (colorsPalette.length < 5) {
    let isLetter = true;
    let letter = "";

    let zeroOrOne = Math.round(Math.random());

    if (zeroOrOne === 0) {
      isLetter = false;
    } else if (zeroOrOne === 1) {
      isLetter = true;
    }

    if (isLetter) {
      let randomLetter = Math.round(Math.random() * 5);

      switch (randomLetter) {
        case 0:
          letter = "A";
          colorGenerated = colorGenerated + letter;
          break;

        case 1:
          letter = "B";
          colorGenerated = colorGenerated + letter;
          break;

        case 2:
          letter = "C";
          colorGenerated = colorGenerated + letter;
          break;

        case 3:
          letter = "D";
          colorGenerated = colorGenerated + letter;
          break;

        case 4:
          letter = "E";
          colorGenerated = colorGenerated + letter;
          break;

        case 5:
          letter = "F";
          colorGenerated = colorGenerated + letter;
          break;

        default:
          break;
      }
    } else if (isLetter === false) {
      let randomNumber = Math.round(Math.random() * 9);
      colorGenerated = colorGenerated + randomNumber;
    }

    if (colorGenerated.length === 6) {
      colorGenerated = `#${colorGenerated}`;
      colorsPalette.push(colorGenerated);
      colorGenerated = "";
    }
  }
}

function displayColorsAndText() {
  for (let index = 0; index < colorsPalette.length; index++) {
    const element = colorsPalette[index];

    colorDisplays[index].style.backgroundColor = element;
    colorTexts[index].innerText = element;
  }
}

generateRandomColors();
displayColorsAndText();

generateButton.addEventListener("click", () => {
  colorGenerated = "";
  colorsPalette = [];
  generateRandomColors();
  displayColorsAndText();
});

addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    colorGenerated = "";
    colorsPalette = [];
    generateRandomColors();
    displayColorsAndText();
  }

  if (event.code === "KeyC") {
    navigator.clipboard.writeText(colorsPalette);
    let colorsPaletteText = colorsPalette.toString().replaceAll(",", ", ");
    notifyCopy(colorsPaletteText);
    cancelTimer();
  }
});

for (let index = 0; index < colorCards.length; index++) {
  const element = colorCards[index];
  element.addEventListener("click", () => {
    navigator.clipboard.writeText(colorsPalette[index]);
    notifyCopy(colorsPalette[index]);
    cancelTimer();
  });
}

function notifyCopy(textCopied) {
  notification.innerHTML = `${textCopied} copied to your clipboard`;
}

let intervalID;

function restartTimer() {
  let time = 0;
  notification.classList.remove("visible");
  intervalID = setInterval(frame, 100);

  function frame() {
    if (time >= 50) {
      clearInterval(intervalID);
      notification.classList.remove("visible");
    } else {
      notification.classList.add("visible");
      time++;
    }
  }
}

function cancelTimer() {
  clearInterval(intervalID);
  restartTimer();
}
