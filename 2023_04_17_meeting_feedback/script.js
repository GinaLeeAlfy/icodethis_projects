const stars = document.querySelectorAll("input[type=checkbox]");

const markStars = (value) => {
  stars.forEach((element) => {
    element.checked = false;
  });

  for (let index = 0; index < value; index++) {
    const element = stars[index];
    element.checked = true;
  }
};
