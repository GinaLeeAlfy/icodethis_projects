let sessionData = [
  {
    sessionTitle: "Intro",
    sessionNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque non ipsam id autem doloribus quae eveniet blanditiis. Aliquam, omnis voluptates. Labore aut iusto fuga exercitationem aperiam facere?\n\nEveniet blanditiis quos itaque, magnam cupiditate ullam! Dolor, fuga sequi eius doloremque, nostrum reiciendis fugiat quasi esse enim similique officiis labore qui magnam? Suscipit obcaecati, assumenda fugiat tenetur vitae aliquam. Ipsum ipsam atque, quas tenetur autem nemo molestias mollitia sapiente harum laboriosam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
  {
    sessionTitle: "Chapter 1",
    sessionNotes:
      "Eveniet blanditiis quos itaque, magnam cupiditate ullam! Dolor, fuga sequi eius doloremque, nostrum reiciendis fugiat quasi esse enim similique officiis labore qui magnam? Suscipit obcaecati, assumenda fugiat tenetur vitae aliquam. Ipsum ipsam atque, quas tenetur autem nemo molestias mollitia sapiente harum laboriosam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
  {
    sessionTitle: "Chapter 2",
    sessionNotes:
      "Ad neque non ipsam id autem doloribus quae eveniet blanditiis.\n\nEveniet blanditiis quos itaque, magnam cupiditate ullam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
];

const editButton = document.querySelector(".edit");
const maximizeButton = document.querySelector(".maximize");
const titleEl = document.querySelector("#title");
const sessionTitleEl = document.querySelector("#session-title");
const sessionNotesEl = document.querySelector("#session-notes");
const deleteSessionButton = document.querySelector(".delete");

const addSessionButton = document.querySelector(".add");
const sessionContainer = document.querySelector("ul");
let sessions = document.querySelectorAll("li");
const sessionTemplate = document.querySelector(".clone");
let sessionClone = sessionTemplate.cloneNode(true);

let currentIndex = 0;
let isEditing = false;

function updateSessions() {
  sessions = document.querySelectorAll("li");

  while (sessions.length < sessionData.length) {
    sessionClone = sessionTemplate.cloneNode(true);
    sessionContainer.appendChild(sessionClone);
    sessions = document.querySelectorAll("li");
  }

  //populate sessions
  if (sessions.length === sessionData.length) {
    const sessionTitles = document.querySelectorAll("h4");

    for (let index = 0; index < sessionData.length; index++) {
      const element = sessionData[index];

      sessionTitles[index].innerHTML = element.sessionTitle;
      sessions[index].dataset.indexNumber = index;
    }
  }
}

function saveData() {
  sessionData[currentIndex].sessionTitle = sessionTitleEl.value;
  sessionData[currentIndex].sessionNotes = sessionNotesEl.value;
  displayWordCounts();
}

function displayWordCounts() {
  const wordCountsDisplay = document.querySelectorAll("li p");
  const totalsDisplay = document.querySelector("header p");
  sessions = document.querySelectorAll("li");
  let totalWords = 0;

  for (let index = 0; index < sessionData.length; index++) {
    const element = sessionData[index];
    wordCountsDisplay[index].innerHTML = `${countWords(
      element.sessionNotes
    )} words`;

    totalWords += countWords(element.sessionNotes);
  }

  totalsDisplay.innerHTML = `${totalWords} total words | ${sessions.length} sessions`;
}

function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  return s.split(" ").filter(function (str) {
    return str != "";
  }).length;
}

function markSelectedSession(index) {
  sessions.forEach((element) => {
    element.classList.remove("selected");
  });
  sessions[index].classList.add("selected");
  sessionTitleEl.value = sessionData[index].sessionTitle;
  sessionNotesEl.value = sessionData[index].sessionNotes;
  currentIndex = index;
}

//remove userCards except firstChild
function resetSessions() {
  while (sessionContainer.children.length > 1) {
    sessionContainer.removeChild(sessionContainer.lastChild);
  }
  sessions = document.querySelectorAll("li");
}

sessionContainer.addEventListener("click", (event) => {
  saveData();
  if (event.target.tagName === "LI") {
    let index = event.target.dataset.indexNumber;
    markSelectedSession(index);
  }
});

editButton.addEventListener("click", () => {
  editButton.classList.toggle("enabled");
  if (isEditing === false) {
    isEditing = true;
    titleEl.removeAttribute("readonly");
    sessionTitleEl.removeAttribute("readonly");
    sessionNotesEl.removeAttribute("readonly");
  } else {
    isEditing = false;
    titleEl.setAttribute("readonly", true);
    sessionTitleEl.setAttribute("readonly", true);
    sessionNotesEl.setAttribute("readonly", true);
    saveData();
  }
});

maximizeButton.addEventListener("click", () => {
  const header = document.querySelector("header");
  const section = document.querySelector("section");
  const container = document.querySelector(".container");

  maximizeButton.classList.toggle("enabled");
  header.classList.toggle("hidden");
  section.classList.toggle("hidden");
  container.classList.toggle("maximize");
});

addSessionButton.addEventListener("click", () => {
  sessionData.push({ sessionTitle: "New Session", sessionNotes: "" });
  updateSessions();
  saveData();
  sessions = document.querySelectorAll("li");
  markSelectedSession(sessions.length - 1);
});

deleteSessionButton.addEventListener("click", () => {
  sessions = document.querySelectorAll("li");
  if (sessions.length > 1) {
    sessionData.splice(currentIndex, 1);
    resetSessions();
    updateSessions();
    sessions = document.querySelectorAll("li");
    if (currentIndex - 1 >= 0) {
      markSelectedSession(currentIndex - 1);
    } else {
      markSelectedSession(0);
    }
    saveData();
  } else {
    sessionData[0].sessionTitle = "New Session";
    sessionData[0].sessionNotes = "";
    updateSessions();
    sessions = document.querySelectorAll("li");
    markSelectedSession(sessions.length - 1);
    saveData();
  }
});

//load page
updateSessions();
displayWordCounts();
sessions[0].classList.add("selected");
sessionTitleEl.value = sessionData[0].sessionTitle;
sessionNotesEl.value = sessionData[0].sessionNotes;
