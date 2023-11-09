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

    if (index == 8 || index == 0) {
      if (rectElLeft >= rectCarouselLeft && rectElRight <= rectCarouselRight) {
        onScreenCards.push(index);
      }
    } else if (
      (rectElLeft >= rectCarouselLeft && rectElLeft <= rectCarouselRight) ||
      (rectElRight <= rectCarouselRight && rectElRight >= rectCarouselLeft)
    ) {
      onScreenCards.push(index);
    }
  }
}

nextButton.addEventListener("click", () => {
  checkVisibleCards();
  cardIndex = onScreenCards[onScreenCards.length - 1];
  cardIndex++;
  if (cardIndex > cards.length - 1) {
    cardIndex = 0;
  }
  cards[cardIndex].scrollIntoView();
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
