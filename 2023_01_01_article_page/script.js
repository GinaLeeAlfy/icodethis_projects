const productButton = document.querySelector("#product");
const casesButton = document.querySelector("#cases");
const productLinks = document.querySelector(".links");
const casesLinks = document.querySelectorAll(".links");
const searchBar = document.querySelector("input");
const label = document.querySelector("label");

function toggleMenu(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleSearch(element) {
  if (element.style.visibility === "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
    focus(searchBar);
  }
}

productButton.addEventListener("click", (event) => {
  toggleMenu(productLinks);
});

casesButton.addEventListener("click", (event) => {
  toggleMenu(casesLinks[1]);
});

label.addEventListener("click", (event) => {
  toggleSearch(searchBar);
});
