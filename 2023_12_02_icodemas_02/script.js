const featuredProducts = document.querySelectorAll(
  "section:first-of-type .img-container"
);
const selectedProduct = document.querySelector("section:last-of-type");
const selectedProductImg = document.querySelector(
  "section:last-of-type .img-container"
);

const data = [
  {
    src: "https://images.unsplash.com/photo-1543886151-3bc2b944c718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN0bWFzJTIwdG95fGVufDB8MHwwfHx8Mg%3D%3D",
    alt: "teddy bear",
    info: "NEW",
    name: "Teddy Bear",
    price: 19.99,
    stars: "90%",
    description: `Perfect for adding a festive touch to any space, this miniature
    tree brings the magic of Christmas right into your home. Crafted
    with care, it's a delightful...`,
  },
  {
    src: "https://images.unsplash.com/photo-1608755727748-dfa2e44f255b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnR8ZW58MHx8MHx8fDI%3D",
    alt: "gift boxes",
    info: 23,
    name: "Mystery Gift Box",
    price: 14.99,
    stars: "80%",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam.",
  },
  {
    src: "https://images.unsplash.com/photo-1607585121444-49f10418f533?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luZ2VyYnJlYWR8ZW58MHwwfDB8fHwy",
    alt: "gingerbread cookies",
    info: "",
    name: "Gingerbread Cookie Set",
    price: 9.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
];

function createFeaturedElements(element, index) {
  const img = document.createElement("img");

  if (data[index].info != "") {
    const info = document.createElement("p");
    info.classList.add("info");

    if (hasNumber(data[index].info)) {
      info.innerHTML = `-${data[index].info}%`;
      info.style.backgroundColor = "var(--pink)";
    } else {
      info.innerHTML = data[index].info;
      info.style.backgroundColor = "var(--blue)";
    }

    element.append(info);
  }

  element.classList.add("img-container");

  img.src = data[index].src;
  img.alt = data[index].alt;

  element.append(img);
}

function populateSelectedProduct(index) {
  const value = data[index];
  const priceContainer = document.querySelector(".price");
  const sale = document.querySelector(".price h2:last-child");

  const name = document.querySelector("h3");
  const price = document.querySelector(".price h2:first-child");
  const stars = document.querySelector(".stars-filled");
  const description = document.querySelector(".flex-col p");

  name.innerHTML = value.name;
  price.innerHTML = `$${value.price}`;
  stars.style.width = value.stars;
  description.innerHTML = value.description;

  if (hasNumber(value.info)) {
    priceContainer.classList.add("sale");
    let percent = (100 - value.info) / 100;
    sale.innerHTML = `$${(value.price * percent).toFixed(2)}`;
  } else {
    priceContainer.classList.remove("sale");
    sale.innerHTML = "";
  }
}

function removeElements(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function displaySelectedProduct(element, index) {
  removeElements(selectedProductImg);
  createFeaturedElements(element, index);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

featuredProducts.forEach((element, index) => {
  createFeaturedElements(element, index);
});

featuredProducts.forEach((element, index) => {
  element.addEventListener("click", () => {
    featuredProducts.forEach((el) => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");
    displaySelectedProduct(selectedProductImg, index);
    populateSelectedProduct(index);
  });
});

displaySelectedProduct(selectedProductImg, 0);
populateSelectedProduct(0);
