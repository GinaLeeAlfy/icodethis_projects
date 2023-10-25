const imagesData = [
  {
    src: "https://images.unsplash.com/photo-1518943701174-17e4aff936d4?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3ByaW5nfGVufDB8MXwwfHx8MA%3D%3D",
    alt: "tulips of different colors",
    id: "flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfDF8MHx8fDA%3D",
    alt: "bench next to tree overlooking a lake",
    id: "tree",
  },
  {
    src: "https://images.unsplash.com/photo-1596034934943-9385127841cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlfGVufDB8MXwwfHx8MA%3D%3D",
    alt: "bee on yellow flower",
    id: "bee",
  },
  {
    src: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm94fGVufDB8MXwwfHx8MA%3D%3D",
    alt: "orange and silver fox",
    id: "fox",
  },
  {
    src: "https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9ua2V5fGVufDB8MXwwfHx8MA%3D%3D",
    alt: "black monkey with white beard",
    id: "monkey",
  },
  {
    src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8MXwwfHx8MA%3D%3D",
    alt: "cat with butterfly on nose",
    id: "cat",
  },
  {
    src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8MXwwfHx8MA%3D%3D",
    alt: "brown and white dog lying in the grass",
    id: "dog",
  },
  {
    src: "https://images.unsplash.com/photo-1618419125747-ee5a210c6ebe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29pfGVufDB8MXwwfHx8MA%3D%3D",
    alt: "koi fish",
    id: "koi",
  },
];

let userData = [
  {
    name: "User 1",
    image: imagesData[0],
  },
  {
    name: "User 2",
    image: imagesData[1],
  },
];

const addUserButton = document.querySelector(".add");
const manageUsersButton = document.querySelector("button");
const form = document.querySelector("form");
const mainContainer = document.querySelector(".container");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const userNameInput = document.querySelector("#name");
const radioImages = document.querySelectorAll(".card input");
const userContainer = document.querySelector("#user-container");

let isEditing = false;
let userEditIndex;

function updateUserCards() {
  let userCards = document.querySelectorAll(".user");
  const userTemplate = document.querySelector(".clone");
  let userClone = userTemplate.cloneNode(true);

  while (userCards.length < userData.length) {
    userClone = userTemplate.cloneNode(true);
    userContainer.appendChild(userClone);
    userCards = document.querySelectorAll(".user");
  }

  if (userCards.length === userData.length) {
    const names = document.querySelectorAll("h3");
    const userImages = document.querySelectorAll(".user img");

    for (let index = 0; index < userData.length; index++) {
      const element = userData[index];

      names[index].innerHTML = element.name;
      userImages[index].src = element.image.src;
      userImages[index].alt = element.image.alt;
      userCards[index].dataset.indexNumber = index;
    }
  }
}

function checkValues() {
  for (let index = 0; index < radioImages.length; index++) {
    const element = radioImages[index];
    if (element.checked) {
      isChecked = true;
      checkedIndex = index;
    }
  }
}

function resetUserCards() {
  let userCards = document.querySelectorAll(".user");
  while (userContainer.children.length > 1) {
    userContainer.removeChild(userContainer.lastChild);
  }
}

function addEditingListeners() {
  let userCards = document.querySelectorAll(".user");
  for (let index = 0; index < userCards.length; index++) {
    const element = userCards[index];
    element.classList.add("editable");
    element.addEventListener("click", allowEditing(index));
  }
}

addUserButton.addEventListener("click", () => {
  isEditing = false;
  let userCards = document.querySelectorAll(".user");
  for (let index = 0; index < userCards.length; index++) {
    const element = userCards[index];
    element.classList.remove("editable");
  }
  manageUsersButton.innerHTML = "Manage users";
  if (userCards.length > 3) {
    alert("Maximum number of users has been reached.");
  } else {
    form.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
    userNameInput.value = "";
    radioImages.forEach((element) => {
      element.checked = false;
    });
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (isEditing === false) {
    let isChecked = false;
    let checkedIndex;

    for (let index = 0; index < radioImages.length; index++) {
      const element = radioImages[index];
      if (element.checked) {
        isChecked = true;
        checkedIndex = index;
      }
    }

    if (!userNameInput.value == "" && isChecked === true) {
      userData.push({
        name: `${userNameInput.value}`,
        image: imagesData[checkedIndex],
      });

      form.classList.toggle("hidden");
      mainContainer.classList.toggle("hidden");
      updateUserCards();
      let userCards = document.querySelectorAll(".user");
      if (userCards.length > 3) {
        addUserButton.classList.add("disabled");
      }
    } else {
      alert("Requires username and checked Image");
    }
  } else {
    let isChecked = true;
    let checkedIndex;

    for (let index = 0; index < radioImages.length; index++) {
      const element = radioImages[index];
      if (element.checked) {
        isChecked = true;
        checkedIndex = index;
      }
    }

    if (!userNameInput.value == "" && isChecked === true) {
      userData[userEditIndex].name = `${userNameInput.value}`;
      userData[userEditIndex].image = imagesData[checkedIndex];

      form.classList.toggle("hidden");
      mainContainer.classList.toggle("hidden");
      updateUserCards();
      let userCards = document.querySelectorAll(".user");
      if (userCards.length > 3) {
        addUserButton.classList.add("disabled");
      }
    } else {
      alert("Requires username and checked Image");
    }
  }
});

reset.addEventListener("click", () => {
  form.classList.toggle("hidden");
  mainContainer.classList.toggle("hidden");

  if (isEditing === true) {
    userData.splice(userEditIndex, 1);
    resetUserCards();
    updateUserCards();
  }
  let userCards = document.querySelectorAll(".user");
  if (userCards.length < 4) {
    addUserButton.classList.remove("disabled");
  }
});

manageUsersButton.addEventListener("click", () => {
  if (manageUsersButton.innerHTML === "Manage users") {
    let userCards = document.querySelectorAll(".user");
    isEditing = true;
    userCards.forEach((element) => {
      element.classList.add("editable");
    });
    manageUsersButton.innerHTML = "Cancel manage users";
  } else {
    isEditing = false;
    let userCards = document.querySelectorAll(".user");
    for (let index = 0; index < userCards.length; index++) {
      const element = userCards[index];
      element.classList.remove("editable");
    }
    manageUsersButton.innerHTML = "Manage users";
  }
});

userContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("user")) {
    if (isEditing === true) {
      userEditIndex = event.target.dataset.indexNumber;
      userNameInput.value = userData[userEditIndex].name;
      radioImages[
        imagesData.indexOf(userData[userEditIndex].image)
      ].checked = true;
      form.classList.toggle("hidden");
      mainContainer.classList.toggle("hidden");
    }
  }
});

updateUserCards();
