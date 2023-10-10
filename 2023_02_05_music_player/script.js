const data = [
  {
    name: "Someone Lived This",
    time: 335,
    artist: "Hans Zimmer",
    src: "",
    alt: "",
  },
];

const songContainer = document.querySelector("ul");
let songsList = document.querySelectorAll("li");
const songTemplate = document.querySelector(".clone");
let songClone = songTemplate.cloneNode(true);

while (songsList.length < data.length) {
  songClone = songTemplate.cloneNode(true);
  songContainer.appendChild(songClone);
  songsList = document.querySelectorAll("li");
}

if (songsList.length == data.length) {
  const names = document.querySelectorAll(".name");
  const times = document.querySelectorAll(".time");
}
