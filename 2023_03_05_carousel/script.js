const cards = document.querySelectorAll(".card");
const nextButton = document.querySelector("section button:last-of-type");
const prevButton = document.querySelector("section button");
const carousel = document.querySelector(".carousel");

let cardIndex = 0;
let cardWidth;
let carouselWidth;
let isCardTwoVisible = false;
let isCardThreeVisible = false;

function checkVisibleCards() {
  const rectCarousel = carousel.getBoundingClientRect();
  const rectCarouselLeft = rectCarousel.left - 3;
  const rectCarouselRight = rectCarousel.right + 3;
  carouselWidth = rectCarouselRight - 3 - (rectCarouselLeft + 3);

  const rectTwo = cards[1].getBoundingClientRect();
  const rectTwoLeft = rectTwo.left;
  const rectTwoRight = rectTwo.right;
  cardWidth = rectTwoRight - rectTwoLeft;

  const rectThree = cards[2].getBoundingClientRect();
  const rectThreeRight = rectThree.right;
  const rectThreeLeft = rectThree.left;

  if (rectCarouselLeft <= rectTwoLeft && rectCarouselRight >= rectTwoRight) {
    isCardTwoVisible = true;
  } else {
    isCardTwoVisible = false;
  }

  if (
    rectCarouselLeft <= rectThreeLeft &&
    rectCarouselRight >= rectThreeRight
  ) {
    isCardThreeVisible = true;
  } else {
    isCardThreeVisible = false;
  }
}

function setCardIndex() {
  if (isCardThreeVisible) {
    cardIndex = 2;
  } else if (isCardTwoVisible) {
    cardIndex = 1;
  } else {
    cardIndex = 0;
  }
}

nextButton.addEventListener("click", () => {
  checkVisibleCards();
  cardIndex++;
  if (cardIndex > cards.length - 1) {
    cardIndex = 0;
  }
  cards[cardIndex].scrollIntoView();
});

prevButton.addEventListener("click", () => {
  checkVisibleCards();
  cardIndex--;
  if (cardIndex < 0) {
    cardIndex = cards.length - 1;
  }
  cards[cardIndex].scrollIntoView();

  //   if ((cardIndex = cards.length - 1)) {
  //   }
});

checkVisibleCards();
setCardIndex();
