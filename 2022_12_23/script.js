const data = [
  {
    name: "Ronald A. Freeman",
    job: "Electronic technician",
    img: "https://static-00.iconduck.com/assets.00/person-tipping-hand-dark-emoji-256x256-yvud7kni.png",
    imgAlt: "emoji of man with hand up",
    review:
      "Thank you! Your product descriptions are amazing and your service is wonderful.",
  },
  {
    name: "Alice L. Tinker",
    job: "Marine equipment mechanic",
    img: "https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/147-happy-person-raising-one-hand.png",
    imgAlt: "emoji of blonde woman raising hand.",
    review:
      "Would definitely recommend ItemScribe and will definitely be ordering again.",
  },
  {
    name: "Name A. Last",
    job: "Random Job",
    img: "https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/147-happy-person-raising-one-hand.png",
    imgAlt: "emoji of blonde woman raising hand.",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consectetur!",
  },
  {
    name: "First B. Done",
    job: "Job Random",
    img: "https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/147-happy-person-raising-one-hand.png",
    imgAlt: "emoji of blonde woman raising hand.",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Name C. End",
    job: "Random* Job",
    img: "https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/147-happy-person-raising-one-hand.png",
    imgAlt: "emoji of blonde woman raising hand.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla assumenda velit nostrum!",
  },
  {
    name: "First D. Last",
    job: "Random 6 Job",
    img: "https://www.emoji.co.uk/files/apple-emojis/smileys-people-ios/147-happy-person-raising-one-hand.png",
    imgAlt: "emoji of blonde woman raising hand.",
    review: "Lorem ipsum dolor sit amet!!!!",
  },
];

const left = document.querySelector(".scroll button:first-child");
const right = document.querySelector(".scroll button:last-child");
const contentContainer = document.querySelector(".scroll-content");
let contents = document.querySelectorAll(".content");
const contentToCopy = document.querySelector(".clone");
let contentClone = contentToCopy.cloneNode(true);

while (contents.length < data.length) {
  contentClone = contentToCopy.cloneNode(true);
  contentClone.classList.add("hidden");
  contentContainer.appendChild(contentClone);
  contents = document.querySelectorAll(".content");
}

if (contents.length == data.length) {
  const names = document.querySelectorAll(".info p:first-child");
  const jobs = document.querySelectorAll(".info p:last-child");
  const imgs = document.querySelectorAll("img");
  const reviews = document.querySelectorAll(".review");
  //populate contents
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    names[index].innerHTML = element.name;
    jobs[index].innerHTML = element.job;
    reviews[index].innerHTML = element.review;
    imgs[index].src = element.img;
    imgs[index].alt = element.imgAlt;
  }
}
