const prevButton = document.querySelector("button");
const nextButton = document.querySelector(".next");
const stars = document.querySelector(".stars-filled");
const employees = document.querySelector(".employees");
const openings = document.querySelector(".openings");
const percentageDisplays = document.querySelectorAll(".percentage-display");
const percentageNumbers = document.querySelectorAll(".percentage-number");
const companyLink = document.querySelector("a");
const company = document.querySelector("h1");
const img = document.querySelector("img");
const companyBlurb = document.querySelector(".blurb");
const reviews = document.querySelector(".reviews");

const data = [
  {
    company: "GOOGLE",
    companyLink: "http://www.google.com",
    companyBlurb:
      "Google LLC is an American multinational technology company that specializes in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.",
    imgSrc: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    imgAlt: "Google Logo",
    employees: "72,053",
    openings: "1,278",
    rating: "90%",
    reviews: "2,278",
    timeOff: [15, 20, 25, 7, 0],
  },
  {
    company: "Company 2",
    companyLink: "#",
    companyBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas tenetur recusandae quos maxime consequatur suscipit distinctio quasi earum nihil?",
    imgSrc: "",
    imgAlt: "Logo",
    employees: "50,000",
    openings: "700",
    rating: "60%",
    reviews: "2,000",
    timeOff: [18, 25, 15, 10, 2],
  },
  {
    company: "Company 3",
    companyLink: "#",
    companyBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat facilis quis repudiandae accusantium, officiis pariatur sint velit quasi? Odit tenetur eveniet et voluptates rem non exercitationem, delectus nam illum.",
    imgSrc: "",
    imgAlt: "Logo",
    employees: "65,000",
    openings: "400",
    rating: "25%",
    reviews: "600",
    timeOff: [10, 30, 20, 5, 1],
  },
];

function populatePage(index) {
  const value = data[index];
  img.src = value.imgSrc;
  img.alt = value.imgAlt;
  reviews.innerHTML = `${value.reviews} reviews`;
  company.innerHTML = `#${index + 1}. ${value.company}`;
  companyLink.href = value.companyLink;
  companyLink.innerHTML = value.companyLink;
  companyBlurb.innerHTML = value.companyBlurb;
  employees.innerHTML = value.employees;
  openings.innerHTML = value.openings;
  stars.style.width = value.rating;
  for (let i = 0; i < percentageNumbers.length; i++) {
    const element = percentageNumbers[i];
    const elementPercentage = percentageDisplays[i];
    element.innerHTML = value.timeOff[i];
    elementPercentage.style.width = `${
      (value.timeOff[i] / value.timeOff.reduce((a, b) => a + b, 0)) * 100
    }%`;
  }
}

function disableButton(button) {
  button.setAttribute("disabled", true);
}

function enableButton(button) {
  button.removeAttribute("disabled");
}

window.addEventListener("load", () => {
  let index = 0;
  populatePage(index);
  nextButton.addEventListener("click", () => {
    if (index < data.length - 1) {
      index++;
      enableButton(prevButton);
      populatePage(index);
    }
    if (index == data.length - 1) {
      disableButton(nextButton);
    }
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      enableButton(nextButton);
      populatePage(index);
    }
    if (index == 0) {
      disableButton(prevButton);
    }
  });
});
