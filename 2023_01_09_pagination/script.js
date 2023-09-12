const paginationNumbers = document.querySelectorAll(".pagination-numbers");
const paginatedList = document.querySelector("#paginated-list");
const listItems = document.querySelectorAll("li");
const prevButtons = document.querySelectorAll(".prev-button");
const nextButtons = document.querySelectorAll(".next-button");

const PAGINATION_LIMIT = 10;
const pageCount = Math.ceil(listItems.length / PAGINATION_LIMIT);
let currentPage;

function appendPageNumber(index) {
  paginationNumbers.forEach((element) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    element.appendChild(pageNumber);
  });
}

function getPaginationNumbers() {
  for (let index = 1; index <= pageCount; index++) {
    appendPageNumber(index);
  }
}

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();

  const prevRange = (pageNum - 1) * PAGINATION_LIMIT;
  const currRange = pageNum * PAGINATION_LIMIT;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

function handleActivePageNumber() {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");

    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
}

window.addEventListener("load", (event) => {
  getPaginationNumbers();
  setCurrentPage(1);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
