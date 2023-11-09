const cards = document.querySelectorAll(".card");
const nextButton = document.querySelector("section button:last-of-type");
const prevButton = document.querySelector("section button");
const carousel = document.querySelector(".carousel");

let cardIndex = 0;
let cardWidth;
let carouselWidth;
let isCardTwoVisible = false;
let isCardThreeVisible = false;
let onScreenCards = [];
let prevCardIndex;

function checkVisibleCards() {
  onScreenCards = [];
  const rectCarousel = carousel.getBoundingClientRect();
  const rectCarouselLeft = rectCarousel.left - 3;
  const rectCarouselRight = rectCarousel.right + 3;

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];

    let rectEl = element.getBoundingClientRect();
    let rectElLeft = rectEl.left;
    let rectElRight = rectEl.right;

    if (
      (rectElLeft >= rectCarouselLeft && rectElLeft <= rectCarouselRight) ||
      (rectElRight <= rectCarouselRight && rectElRight >= rectCarouselLeft)
    ) {
      onScreenCards.push(index);
    }
  }

  if (onScreenCards.length > 1) {
    let rectZero = cards[onScreenCards[0]].getBoundingClientRect();
    let rectZeroLeft = rectZero.left;
    let rectZeroRight = rectZero.right;

    if (
      rectZeroLeft <= rectCarouselLeft ||
      rectZeroRight >= rectCarouselRight
    ) {
      onScreenCards.splice(0, 1);
    }
  }

  if (onScreenCards.length > 1) {
    let rectLast =
      cards[onScreenCards[onScreenCards.length - 1]].getBoundingClientRect();
    let rectLastLeft = rectLast.left;
    let rectLastRight = rectLast.right;

    if (
      rectLastLeft <= rectCarouselLeft ||
      rectLastRight >= rectCarouselRight
    ) {
      onScreenCards.splice(onScreenCards.length - 1, 1);
    }
  }
}

nextButton.addEventListener("click", () => {
  checkVisibleCards();
  cardIndex = onScreenCards[onScreenCards.length - 1];
  if (onScreenCards.length > 1 || prevCardIndex == cardIndex) {
    cardIndex++;
    if (cardIndex > cards.length - 1) {
      cardIndex = 0;
    }
  }
  cards[cardIndex].scrollIntoView();
  prevCardIndex = cardIndex;
});

prevButton.addEventListener("click", () => {
  checkVisibleCards();
  cardIndex = onScreenCards[0];
  cardIndex--;
  if (cardIndex < 0) {
    cardIndex = cards.length - 1;
  }
  cards[cardIndex].scrollIntoView();
});
