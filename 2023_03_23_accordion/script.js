const section = document.querySelector("section");
const articles = document.querySelectorAll("article");
const expandButton = document.querySelectorAll(".question button");

section.addEventListener("click", (event) => {
  let target = event.target;
  if (target.tagName === "ARTICLE") {
    if (!target.classList.contains("open")) {
      articles.forEach((article, index) => {
        article.classList.remove("open");
        expandButton[index].innerHTML = "&#43;";
      });
      target.classList.add("open");
      expandButton[target.dataset.indexNumber].innerHTML = "&#10005;";
    } else {
      articles.forEach((article, index) => {
        article.classList.remove("open");
        expandButton[index].innerHTML = "&#43;";
      });
    }
  }

  if (target.tagName === "BUTTON") {
    alert("Will direct to another page");
  }
});
