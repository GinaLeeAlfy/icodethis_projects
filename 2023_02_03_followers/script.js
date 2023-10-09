const images = document.querySelectorAll("img");
const names = document.querySelectorAll(".name");
const searchInput = document.querySelector("#friend-search");
const followButtons = document.querySelectorAll("section button");

// let currentData = [];

const data = [
  {
    name: "Jason Graham",
    src: "https://images.unsplash.com/photo-1515698919056-f76accf3d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "man sitting on concrete bench with overview of city background.",
  },
  {
    name: "Ophelia Gaddy",
    src: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    alt: "woman wearing gray hat and gold necklaces",
  },
  {
    name: "Lillian Whitmire",
    src: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    alt: "woman in black long sleeve shirt sitting on white couch",
  },
  {
    name: "Joseph Shepard",
    src: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "man in green shirt outside in front of pine trees",
  },
  {
    name: "Alex R. Prowel",
    src: "https://images.unsplash.com/photo-1514860492795-97fcd3fe88d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    alt: "man looking through camera in a building",
  },
  {
    name: "Frodo Baggins",
    src: "https://images.unsplash.com/photo-1624489094663-a51a6c61d492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80",
    alt: "The one ring, lord of the rings.",
  },
  {
    name: "Gandalf the White",
    src: "https://images.unsplash.com/photo-1499233983070-99a5f004e720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Fireworks",
  },
  {
    name: "Samwise Gamgee",
    src: "https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "potatoes",
  },
  {
    name: "Bill the Pony",
    src: "https://images.unsplash.com/photo-1593179449458-e0d43d512551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9yc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "brown horse with black hair",
  },
  {
    name: "Gimil Son of Gloin",
    src: "https://images.unsplash.com/photo-1627468623506-0858a332509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    alt: "a metal axe with a wooden handle",
  },
  {
    name: "Legolas GreenLeaf",
    src: "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    alt: "green leafed plant",
  },
];

function displayFriends(dataArray) {
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const image = images[index];
    const dataEntry = dataArray[index];

    name.innerHTML = dataEntry.name;
    image.src = dataEntry.src;
    image.alt = dataEntry.alt;
  }
}

//todo make a simple search

// function searchFriends() {
//   let search = searchInput.value;

//   for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     if (element.name.includes(search)) {
//       currentData.push(element);
//     }
//   }
//   data.forEach((element) => {
//     if (element.name.contains(search)) {
//     }
//   });
// }

displayFriends(data);

followButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("following");

    if (element.classList.contains("following")) {
      element.innerHTML = "Unfollow";
    } else {
      element.innerHTML = "Follow";
    }
  });
});
