const paginationNumbers = document.querySelectorAll(".pagination-numbers");
const paginatedList = document.querySelector("#paginated-list");
const listItems = document.querySelectorAll("li");
const prevButtons = document.querySelectorAll(".prev-button");
const nextButtons = document.querySelectorAll(".next-button");
const frontSpacers = document.querySelectorAll(".front-spacer");
const backSpacers = document.querySelectorAll(".back-spacer");

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
    if (currentPage == pageCount || currentPage == pageCount - 1) {
      if (pageIndex <= currentPage && pageIndex > pageCount - 4) {
        button.classList.remove("hidden");
      }
    } else if (currentPage == 1 || currentPage == 2) {
      if (pageIndex >= 1 && pageIndex < 5) {
        button.classList.remove("hidden");
      }
    } else {
      if (pageIndex >= currentPage - 1 && pageIndex <= currentPage + 1) {
        button.classList.remove("hidden");
      }
    }
  });

  if (currentPage >= 4) {
    frontSpacers.forEach((element) => {
      element.classList.remove("hidden");
    });
  } else {
    frontSpacers.forEach((element) => {
      element.classList.add("hidden");
    });
  }
  if (currentPage <= pageCount - 3) {
    backSpacers.forEach((element) => {
      element.classList.remove("hidden");
      element.style.order = pageCount - 1;
    });
  } else {
    backSpacers.forEach((element) => {
      element.classList.add("hidden");
    });
  }
}

const disableButtons = (buttons) => {
  buttons.forEach((button) => {
    button.setAttribute("disabled", true);
    button.classList.add("disabled");
  });
};

const hideButtons = (buttons) => {
  buttons[0].classList.add("hiding");
};

const enableButtons = (buttons) => {
  buttons.forEach((button) => {
    button.removeAttribute("disabled");
    button.classList.remove("disabled");
    button.classList.remove("hiding");
  });
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButtons(prevButtons);
    hideButtons(prevButtons);
  } else {
    enableButtons(prevButtons);
  }

  if (pageCount === currentPage) {
    disableButtons(nextButtons);
    hideButtons(nextButtons);
  } else {
    enableButtons(nextButtons);
  }
};

window.addEventListener("load", (event) => {
  getPaginationNumbers();
  setPageButtonsOrder();
  setCurrentPage(1);

  prevButtons.forEach((element) => {
    element.addEventListener("click", (event) => {
      setCurrentPage(currentPage - 1);
    });
  });

  nextButtons.forEach((element) => {
    element.addEventListener("click", (event) => {
      setCurrentPage(currentPage + 1);
    });
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
