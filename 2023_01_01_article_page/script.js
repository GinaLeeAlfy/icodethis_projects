const productButton = document.querySelector("#product");
const casesButton = document.querySelector("#cases");
const productLinks = document.querySelector(".links");
const casesLinks = document.querySelectorAll(".links");

function toggleMenu(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

productButton.addEventListener("click", (event) => {
  toggleMenu(productLinks);
});

casesButton.addEventListener("click", (event) => {
  toggleMenu(casesLinks[1]);
});
