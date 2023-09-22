const profileImages = document.querySelectorAll(".profile-image");
const tooltips = document.querySelectorAll(".tooltip");
const arrows = document.querySelectorAll(".arrow");

for (let index = 0; index < profileImages.length; index++) {
  const element = profileImages[index];

  element.addEventListener("click", () => {
    if (tooltips[index].classList.contains("active")) {
      tooltips[index].classList.remove("active");
      arrows[index].classList.remove("active");
    } else {
      tooltips[index].classList.add("active");
      arrows[index].classList.add("active");
    }
  });
}
