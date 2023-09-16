const paginationNumbers = document.querySelector(".pagination-numbers");
const paginatedList = document.querySelector("#paginated-list");
const listItems = document.querySelectorAll("li");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const frontSpacer = document.querySelector(".front-spacer");
const backSpacer = document.querySelector(".back-spacer");

const PAGINATION_LIMIT = 10;
const pageCount = Math.ceil(listItems.length / PAGINATION_LIMIT);
let currentPage;

function appendPageNumber(index) {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
  for (let index = 1; index <= pageCount; index++) {
    appendPageNumber(index);
  }
}

function setPageButtonsOrder() {
  const pageButtons = document.querySelectorAll(".pagination-number");
  for (let index = 0; index < pageButtons.length; index++) {
    const element = pageButtons[index];
    element.style.order = element.getAttribute("page-index");
  }
}

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

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
  //nav bars with ... spacers
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    button.classList.add("hidden");

    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex == currentPage) {
      button.classList.add("active");
    }

    //always show page button 1
    if (pageIndex == 1) {
      button.classList.remove("hidden");
    }

    //always show last page button
    if (pageIndex == pageCount) {
      button.classList.remove("hidden");
    }

    //always display at least 5 page buttons
    if (currentPage >= pageCount - 2) {
      if (pageIndex > pageCount - 5) {
        button.classList.remove("hidden");
      }
    } else if (currentPage <= 3) {
      if (pageIndex >= 1 && pageIndex < 6) {
        button.classList.remove("hidden");
      }
    } else {
      if (pageIndex >= currentPage - 1 && pageIndex <= currentPage + 1) {
        button.classList.remove("hidden");
      }
    }
  });

  if (currentPage >= 4) {
    frontSpacer.classList.remove("hidden");
  } else {
    frontSpacer.classList.add("hidden");
  }
  if (currentPage <= pageCount - 3) {
    backSpacer.classList.remove("hidden");
    backSpacer.style.order = pageCount - 1;
  } else {
    backSpacer.classList.add("hidden");
  }
}

const disableButton = (button) => {
  button.setAttribute("disabled", true);
  button.classList.add("disabled");
};

const hideButton = (button) => {
  button.classList.add("hiding");
};

const enableButton = (button) => {
  button.removeAttribute("disabled");
  button.classList.remove("disabled");
  button.classList.remove("hiding");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
    hideButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
    hideButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

window.addEventListener("load", (event) => {
  getPaginationNumbers();
  setPageButtonsOrder();
  setCurrentPage(1);

  prevButton.addEventListener("click", (event) => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", (event) => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });

  document.querySelector("p").innerHTML = `-${listItems.length} items-`;
});
