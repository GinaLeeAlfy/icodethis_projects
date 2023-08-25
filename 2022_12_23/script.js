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
    img: "https://images.emojiterra.com/twitter/v14.0/512px/1f3c4-2642.png",
    imgAlt: "emoji of surfer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consectetur!",
  },
  {
    name: "First B. Done",
    job: "Job Random",
    img: "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80",
    imgAlt: "woman with emoji face balloon",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Name C. End",
    job: "Random* Job",
    img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/family-man-girl-girl.png",
    imgAlt: "emoji of man with two daughters",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla assumenda velit nostrum!",
  },
  {
    name: "First D. Last",
    job: "Random 6 Job",
    img: "https://img.icons8.com/emoji/12x/woman-running.png",
    imgAlt: "emoji of woman running",
    review: "Lorem ipsum dolor sit amet!!!!",
  },
];

const left = document.querySelector(".scroll button:first-child");
const right = document.querySelector(".scroll button:last-child");
let circles = document.querySelectorAll(".circle");

const pagesContainer = document.querySelector(".pages");
let pagesButtons = document.querySelectorAll(".pages button");
const pageButtonToCopy = document.querySelector(".button-clone");
let pageButtonClone = pageButtonToCopy.cloneNode(true);

const contentContainer = document.querySelector(".scroll-content");
let contents = document.querySelectorAll(".content");
const contentToCopy = document.querySelector(".clone");
let contentClone = contentToCopy.cloneNode(true);

let orders = [];
const PAGINATION_LIMIT = 2;
let pageCount;
let currentPage = 1;
let turns = 2;

function populatePageContent() {
  while (contents.length < data.length) {
    contentClone = contentToCopy.cloneNode(true);
    contentClone.classList.add("hidden");
    contentContainer.appendChild(contentClone);
    contents = document.querySelectorAll(".content");
  }

  if (contents.length == data.length) {
    pageCount = Math.ceil(contents.length / PAGINATION_LIMIT);

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

  while (pagesButtons.length < pageCount) {
    pageButtonClone = pageButtonToCopy.cloneNode(true);
    pageButtonClone.childNodes[1].classList.remove("active");
    pagesContainer.appendChild(pageButtonClone);
    pagesButtons = document.querySelectorAll(".pages button");
  }

  if (pagesButtons.length == pageCount) {
    for (let index = 0; index < pagesButtons.length; index++) {
      const element = pagesButtons[index];
      element.classList.add("pagination-number");
      element.setAttribute("page-index", index + 1);
      element.setAttribute("aria-label", "Page " + (index + 1));
    }
  }
}

const removeActive = () => {
  circles = document.querySelectorAll(".circle");
  circles.forEach((element) => {
    element.classList.remove("active");
  });
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(left);
  } else {
    enableButton(left);
  }

  if (pageCount === currentPage) {
    disableButton(right);
  } else {
    enableButton(right);
  }
};

const handleActivePageNumber = () => {
  removeActive();
  for (let page = 0; page < pagesButtons.length; page++) {
    const element = pagesButtons[page];
    const pageIndex = Number(element.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      circles[page].classList.add("active");
    }
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * PAGINATION_LIMIT;
  const currRange = pageNum * PAGINATION_LIMIT;

  contents.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  populatePageContent();
  setCurrentPage(1);

  left.addEventListener("click", (event) => {
    setCurrentPage(currentPage - 1);
  });

  right.addEventListener("click", (event) => {
    setCurrentPage(currentPage + 1);
  });

  pagesButtons.forEach((element) => {
    const pageIndex = Number(element.getAttribute("page-index"));

    if (pageIndex) {
      element.addEventListener("click", (event) => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
