const percentageDisplays = document.querySelectorAll(".percentage-display");
const barDisplays = document.querySelectorAll(".bar-display");
const percentages = document.querySelectorAll(".percentage");
const submit = document.querySelector("button");
const radioButtons = document.querySelectorAll("input");

let successVotes = 32;
let noVotes = 6;
let maybeVotes = 11;
let vote;
let totalVotes;

submit.addEventListener("click", (event) => {
  //don't refresh the page
  event.preventDefault();

  //check which radio button is clicked
  for (let index = 0; index < radioButtons.length; index++) {
    const element = radioButtons[index];
    if (element.checked) {
      vote = element.id;
    }
  }
  if (vote) {
    // let the percentages display
    barDisplays.forEach((element) => {
      element.classList.add("visible");
    });

    //don't let them change their vote
    radioButtons.forEach((element) => {
      element.setAttribute("disabled", true);
    });

    //don't let them keep voting
    submit.setAttribute("disabled", true);

    //add the appropriate vote
    switch (vote) {
      case "success":
        successVotes++;

        break;

      case "no":
        noVotes++;

        break;

      case "maybe":
        maybeVotes++;

        break;
    }

    totalVotes = successVotes + noVotes + maybeVotes;

    //display calculated success bar
    percentageDisplays[0].style.width = `${(successVotes / totalVotes) * 100}%`;
    percentages[0].innerHTML = `${Math.round(
      (successVotes / totalVotes) * 100
    )}%`;

    //display calculated no bar
    percentageDisplays[1].style.width = `${(noVotes / totalVotes) * 100}%`;
    percentages[1].innerHTML = `${Math.round((noVotes / totalVotes) * 100)}%`;

    //display calculated maybe bar
    percentageDisplays[2].style.width = `${(maybeVotes / totalVotes) * 100}%`;
    percentages[2].innerHTML = `${Math.round(
      (maybeVotes / totalVotes) * 100
    )}%`;
  } else {
    alert("Please vote first.");
  }
});
