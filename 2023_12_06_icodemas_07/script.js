const productsContainer = document.querySelector(".product-container");
const filtersButton = document.querySelector(".filter button");
const filterSection = document.querySelector(".filter");
const applyButton = document.querySelector("#submit");
const clearButton = document.querySelector("#reset");

const data = [
  {
    src: "https://icodethis.com/images/iCodeMas/tree.png",
    alt: "Christmas Tree Decoration",
    info: "NEW",
    name: "Christmas Tree Decoration",
    price: 19.99,
    stars: "90%",
    description: `Perfect for adding a festive touch to any space, this miniature
      tree brings the magic of Christmas right into your home. Crafted
      with care, it's a delightful...`,
  },
  {
    src: "https://icodethis.com/images/iCodeMas/gift.png",
    alt: "gift boxes",
    info: 23,
    name: "Mystery Gift Box",
    price: 12.99,
    stars: "80%",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
    alt: "gingerbread cookies",
    info: "",
    name: "Gingerbread Cookie Set",
    price: 12.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/snowflake.png",
    alt: "Snowflake Decoration",
    info: "",
    name: "Snowflake Decoration",
    price: 4.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/star_cookie.png",
    alt: "Star-shaped Cookie",
    info: "",
    name: "Star-shaped Cookie",
    price: 12.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/santa_hat.png",
    alt: "Santa's Hat",
    info: "",
    name: "Santa's Hat",
    price: 39.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/candy_cane.png",
    alt: "Candy Cane",
    info: "",
    name: "Candy Cane",
    price: 8.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/snowman_deco.png",
    alt: "Snowman Decoration",
    info: "",
    name: "Snowman Decoration",
    price: 39.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/christmas_ball.png",
    alt: "Christmas Ball",
    info: "",
    name: "Christmas Ball",
    price: 4.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/christmas_sock.png",
    alt: "Christmas Stocking",
    info: "",
    name: "Christmas Stocking",
    price: 29.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/red_ribbon.png",
    alt: "Red Ribbon",
    info: "",
    name: "Red Ribbon",
    price: 3.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
  {
    src: "https://icodethis.com/images/iCodeMas/tree_cookie.png",
    alt: "Christmas Tree Cookie",
    info: "",
    name: "Christmas Tree Cookie",
    price: 13.99,
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
];

function createProducts(value) {
  const product = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const cartButton = document.createElement("button");
  const name = document.createElement("p");
  const priceBox = document.createElement("div");
  const firstPrice = document.createElement("h3");
  const secondPrice = document.createElement("h3");

  product.classList.add("product");
  imgContainer.classList.add("img-container");
  priceBox.classList.add("price");

  if (value.info !== "" || value.info !== undefined) {
    const info = document.createElement("p");
    info.classList.add("info");

    if (hasNumber(value.info)) {
      info.innerHTML = `-${value.info}%`;
      info.style.backgroundColor = "var(--pink)";
      priceBox.classList.add("sale");
      let percent = (100 - value.info) / 100;
      firstPrice.innerHTML = `$${(value.price * percent).toFixed(2)}`;
      secondPrice.innerHTML = `$${value.price}`;
    } else if (value.info === "NEW") {
      info.innerHTML = value.info;
      info.style.backgroundColor = "var(--blue)";
      firstPrice.innerHTML = `$${value.price}`;
      secondPrice.innerHTML = "";
    } else {
      firstPrice.innerHTML = `$${value.price}`;
      secondPrice.innerHTML = "";
    }

    imgContainer.append(info);
  }

  img.src = value.src;
  img.alt = value.alt;
  cartButton.innerHTML = `Add to cart <i class="fa-solid fa-bag-shopping"></i>`;
  name.innerHTML = value.name;

  imgContainer.append(img);
  imgContainer.append(cartButton);
  priceBox.append(firstPrice);
  priceBox.append(secondPrice);
  product.append(imgContainer);
  product.append(name);
  product.append(priceBox);

  cartButton.addEventListener("click", () => {
    product.classList.toggle("added");
    if (product.classList.contains("added")) {
      cartButton.innerHTML = "Added to cart";
    } else {
      cartButton.innerHTML = `Add to cart <i class="fa-solid fa-bag-shopping"></i>`;
    }
  });

  productsContainer.append(product);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

data.forEach((value) => {
  createProducts(value);
});

let widthMatch = window.matchMedia("(max-width: 801px)");

//add or remove on screen change
widthMatch.addEventListener("change", function (mm) {
  if (mm.matches) {
    console.log("add");
    filtersButton.addEventListener("click", addFullScreen);
  } else {
    console.log("too big");
    filtersButton.removeEventListener("click", addFullScreen);
  }
});

//add if screen is small
if (widthMatch.matches) {
  filtersButton.addEventListener("click", addFullScreen);
}

applyButton.addEventListener("click", (e) => {
  e.preventDefault();
  filterSection.classList.remove("full-screen");
});

function addFullScreen() {
  filterSection.classList.add("full-screen");
}
