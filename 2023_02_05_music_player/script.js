const data = [
  {
    name: "The Greatest Show",
    time: 303,
    artist: "Keala Settle, Hugh Jackman, Zac Efron, & Zendaya",
    src: "",
    alt: "",
  },
  {
    name: "A Million Dreams",
    time: 270,
    artist: "Ziv Zaifmann, Hugh Jackman, & Michelle Ingrid Williams",
    src: "",
    alt: "",
  },
  {
    name: "A Million Dreams (Reprise)",
    time: 61,
    artist: "Cameron Seely, Austyn Johnson",
    src: "",
    alt: "",
  },
  {
    name: "Come Alive",
    time: 226,
    artist: "Keala Settle, Daniel Everidge, Hugh Jackman, & Zendaya",
    src: "",
    alt: "",
  },
  {
    name: "The Other Side",
    time: 215,
    artist: "Hugh Jackman & Zac Efron",
    src: "",
    alt: "",
  },
  {
    name: "Never Enough",
    time: 208,
    artist: "Loren Allred",
    src: "",
    alt: "",
  },
  {
    name: "This Is Me",
    time: 235,
    artist: "Keala Settle & The Greatest Showman Ensemble",
    src: "",
    alt: "",
  },

  {
    name: "Rewrite The Stars",
    time: 218,
    artist: "Zac Efron & Zendaya",
    src: "",
    alt: "",
  },

  {
    name: "Tightrope",
    time: 235,
    artist: "Michelle Williams",
    src: "",
    alt: "",
  },

  {
    name: "Never Enough (Reprise)",
    time: 81,
    artist: "Loren Allred",
    src: "",
    alt: "",
  },

  {
    name: "From Now On",
    time: 350,
    artist: "Hugh Jackman & The Greatest Showman Ensemble",
    src: "",
    alt: "",
  },
];

const songContainer = document.querySelector("ul");
let songsList = document.querySelectorAll("li");
const songTemplate = document.querySelector(".clone");
let songClone = songTemplate.cloneNode(true);

let songTimeMinutes;
let songTimeSeconds;
let songTimeSecondsString;

while (songsList.length < data.length) {
  songClone = songTemplate.cloneNode(true);
  songContainer.appendChild(songClone);
  songsList = document.querySelectorAll("li");
}

if (songsList.length == data.length) {
  const names = document.querySelectorAll(".song");
  const times = document.querySelectorAll(".time");

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    names[index].innerHTML = element.name;

    formatTime(element.time);
    times[index].innerHTML = `${songTimeMinutes}:${songTimeSecondsString}`;
  }
}

const progressBar = document.querySelector(".percentage-display");
const playButton = document.querySelector(".play");
const currentTimeDisplay = document.querySelector(".current-time");
const totalTimeDisplay = document.querySelector(".total-time");
const backButton = document.querySelector(".back");
const slider = document.querySelector(".slider");
const songTitleDisplay = document.querySelector(".current-song");
const artistDisplay = document.querySelector(".artist");

let songLength = data[0].time;
let songTime = 0;

//set slider starting
slider.max = songLength;
slider.value = 0;
progressBar.style.width = `0%`;
setDisplays();
songTitleDisplay.innerHTML = data[0].name;
artistDisplay.innerHTML = data[0].artist;

let isFinished = true;
let isPaused = false;
let isNeedClear = false;
let isTimerStarted = false;

slider.oninput = function adjustProgress() {
  songTime = slider.value;
  setDisplays();
};

function formatTime(songTime) {
  if (songTime % 60 === 0) {
    songTimeMinutes = Math.round(songTime / 60);
  } else {
    songTimeMinutes = Math.floor(songTime / 60);
  }

  songTimeSeconds = songTime - songTimeMinutes * 60;

  if (songTimeSeconds < 10) {
    songTimeSecondsString = `0${songTimeSeconds}`;
  } else {
    songTimeSecondsString = songTimeSeconds.toString();
  }
}

function setDisplays() {
  formatTime(songTime);
  progressBar.style.width = (songTime / songLength) * 100 + "%";
  currentTimeDisplay.innerHTML = `${songTimeMinutes}:${songTimeSecondsString}`;
  formatTime(songLength);
  totalTimeDisplay.innerHTML = `${songTimeMinutes}:${songTimeSecondsString}`;
}

function startProgress() {
  let time = setInterval(frame, 1000);
  if (isNeedClear) {
    clearInterval(time);
    isNeedClear = false;
    console.log("happened");
  }

  backButton.addEventListener("click", () => {
    clearInterval(time);
    songTime = 0;
    slider.value = 0;
    isFinished = true;
    setDisplays();

    if (isPaused === false) {
      playButton.innerHTML = `<i class="fa-regular fa-circle-pause fa-2xl"></i>`;
      startProgress();
    }
  });

  function frame() {
    if (songTime >= songLength) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      if (!isPaused) {
        songTime++;
        slider.value = songTime;
        setDisplays();
      }
    }
  }
}

playButton.addEventListener("click", (event) => {
  if (isFinished) {
    startProgress();
    isTimerStarted = true;
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

for (let index = 0; index < songsList.length; index++) {
  const element = songsList[index];
  element.addEventListener("click", () => {
    songsList.forEach((songs) => {
      songs.classList.remove("playing");
    });
    songLength = data[index].time;
    songTitleDisplay.innerHTML = data[index].name;
    artistDisplay.innerHTML = `-${data[index].artist}-`;

    if (isTimerStarted) {
      isNeedClear = true;
    }
    songTime = 0;
    slider.max = songLength;
    slider.value = 0;
    isFinished = true;
    setDisplays();

    if (isPaused === false) {
      playButton.innerHTML = `<i class="fa-regular fa-circle-pause fa-2xl"></i>`;
      startProgress();
      isTimerStarted = true;
    }
    element.classList.add("playing");
  });
}