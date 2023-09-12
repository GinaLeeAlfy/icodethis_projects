const paginationNumbers = document.querySelectorAll(".pagination-numbers");
const paginatedList = document.querySelector("#paginated-list");
const listItems = document.querySelectorAll("li");
const prevButtons = document.querySelectorAll(".prev-button");
const nextButtons = document.querySelectorAll(".next-button");

const PAGINATION_LIMIT = 10;
const pageCount = Math.ceil(listItems.length / PAGINATION_LIMIT);
let currentPage;

function appendPageNumber(index) {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  appendChildren(pageNumber);
}

function appendChildren(pageNumber) {
  paginationNumbers.forEach((element) => {
    console.log(element);
    element.appendChild(pageNumber);
  });
}

function getPaginationNumbers() {
  for (let index = 1; index <= pageCount; index++) {
    appendPageNumber(index);
  }
}

window.addEventListener("load", (event) => {
  getPaginationNumbers();
});
