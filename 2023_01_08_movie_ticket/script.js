const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const numTickets = document.querySelector(".num-tickets");
const total = document.querySelector(".total");
let checkboxesChecked;
let price = 11;

checkboxes.forEach((element) => {
  element.addEventListener("click", (event) => {
    checkboxesChecked = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    numTickets.innerHTML = checkboxesChecked;

    total.innerHTML = `$${checkboxesChecked * price}`;

    return checkboxesChecked;
  });
});
