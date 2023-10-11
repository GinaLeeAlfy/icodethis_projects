const data = [
  {
    name: "Someone Lived This",
    time: 335,
    artist: "Hans Zimmer",
    src: "",
    alt: "",
  },
];

// const songContainer = document.querySelector("ul");
// let songsList = document.querySelectorAll("li");
// const songTemplate = document.querySelector(".clone");
// let songClone = songTemplate.cloneNode(true);

// while (songsList.length < data.length) {
//   songClone = songTemplate.cloneNode(true);
//   songContainer.appendChild(songClone);
//   songsList = document.querySelectorAll("li");
// }

// if (songsList.length == data.length) {
//   const names = document.querySelectorAll(".name");
//   const times = document.querySelectorAll(".time");
// }

const progressBar = document.querySelector(".percentage-display");
const playButton = document.querySelector(".play");
const currentTimeDisplay = document.querySelector(".current-time");
const backButton = document.querySelector(".back");
let songLength = data[0].time;

let isFinished = true;
let isPaused = false;

function startProgress() {
  let songTime = 0;
  let time = setInterval(frame, 1000);

  backButton.addEventListener("click", () => {
    clearInterval(time);
    songTime = 0;
    isFinished = true;
    currentTimeDisplay.innerHTML = "0:00";
    isPaused = false;
    playButton.innerHTML = `<i class="fa-regular fa-circle-pause fa-2xl"></i>`;
    startProgress();
  });

  function frame() {
    if (songTime >= songLength) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      if (!isPaused) {
        songTime++;

        let songTimeMinutes;

        if (songTime % 60 === 0) {
          songTimeMinutes = Math.round(songTime / 60);
        } else {
          songTimeMinutes = Math.floor(songTime / 60);
        }

        let songTimeSeconds = songTime - songTimeMinutes * 60;
        let songTimeSecondsString;

        if (songTimeSeconds < 10) {
          songTimeSecondsString = `0${songTimeSeconds}`;
        } else {
          songTimeSecondsString = songTimeSeconds.toString();
        }

        progressBar.style.width = (songTime / songLength) * 100 + "%";
        currentTimeDisplay.innerHTML = `${songTimeMinutes}:${songTimeSecondsString}`;
      }
    }
  }
}

playButton.addEventListener("click", (event) => {
  if (isFinished) {
    startProgress();
    isPaused = false;
    playButton.innerHTML = `<i class="fa-regular fa-circle-pause fa-2xl"></i>`;
  } else {
    isPaused = !isPaused;
    if (isPaused === true) {
      playButton.innerHTML = `<i class="fa-regular fa-circle-play fa-2xl"></i>`;
    } else {
      playButton.innerHTML = `<i class="fa-regular fa-circle-pause fa-2xl"></i>`;
    }
  }
});
