const cards = document.querySelectorAll(".card");
const nextButton = document.querySelector("section button:last-of-type");
const prevButton = document.querySelector("section button");
const carousel = document.querySelector(".carousel");

let cardIndex = 0;

let isCardTwoVisible = false;
let isCardThreeVisible = false;
let isCardTwoLeft = false;
let isCardThreeLeft = false;

function checkVisibleCards() {
  const rectCarousel = carousel.getBoundingClientRect();
  const rectCarouselLeft = rectCarousel.left + 3;
  const rectCarouselRight = rectCarousel.right + 3;

  const rectTwo = cards[1].getBoundingClientRect();
  const rectTwoLeft = rectTwo.left;
  const rectTwoRight = rectTwo.right;

  const rectThree = cards[2].getBoundingClientRect();
  const rectThreeRight = rectThree.right;
  const rectThreeLeft = rectThree.left;

  let isCardTwoVisible = false;
  let isCardThreeVisible = false;
  let isCardTwoLeft = false;
  let isCardThreeLeft = false;

  if (rectCarouselLeft <= rectTwoLeft && rectCarouselRight >= rectTwoRight) {
    isCardTwoVisible = true;
  } else {
    isCardTwoVisible = false;
  }

  if (rectCarouselLeft >= rectTwoRight) {
    isCardTwoLeft = true;
  } else {
    isCardTwoLeft = false;
  }

  if (
    rectCarouselLeft <= rectThreeLeft &&
    rectCarouselRight >= rectThreeRight
  ) {
    isCardThreeVisible = true;
  } else {
    isCardThreeVisible = false;
  }
  if (rectCarouselLeft >= rectThreeRight) {
    isCardThreeLeft = true;
  } else {
    isCardThreeLeft = false;
  }

  if (isCardThreeVisible) {
    cardIndex = 2;
  } else if (isCardTwoVisible) {
    cardIndex = 1;
  } else {
    cardIndex = 0;
  }
}

nextButton.addEventListener("click", () => {
  cardIndex++;
  if (cardIndex > cards.length - 1) {
    cardIndex = 0;
  }
  cards[cardIndex].scrollIntoView();
});

prevButton.addEventListener("click", () => {
  cardIndex--;
  if (cardIndex < 0) {
    cardIndex = cards.length - 1;
  }
  cards[cardIndex].scrollIntoView();
});

checkVisibleCards();
