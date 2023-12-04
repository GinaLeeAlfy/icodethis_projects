const featuredProducts = document.querySelectorAll(
  "section:first-of-type .img-container"
);
const selectedProduct = document.querySelector("section:last-of-type");
const stars = document.querySelector(".stars-filled");

const data = [
  {
    src: "https://images.unsplash.com/photo-1543886151-3bc2b944c718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN0bWFzJTIwdG95fGVufDB8MHwwfHx8Mg%3D%3D",
    alt: "miniature house",
    info: "NEW",
    name: "Christmas Tree Decoration",
    price: "$19.99",
    stars: "90%",
    description: `Perfect for adding a festive touch to any space, this miniature
    tree brings the magic of Christmas right into your home. Crafted
    with care, it's a delightful...`,
  },
  {
    src: "https://images.unsplash.com/photo-1608755727748-dfa2e44f255b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnR8ZW58MHx8MHx8fDI%3D",
    alt: "gift boxes",
    info: "-23%",
    name: "Mystery Gift Box",
    price: "$14.99",
    stars: "80%",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam.",
  },
  {
    src: "https://images.unsplash.com/photo-1607585121444-49f10418f533?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luZ2VyYnJlYWR8ZW58MHwwfDB8fHwy",
    alt: "gingerbread cookies",
    info: "",
    name: "Gingerbread Cookie Set",
    price: "$9.99",
    stars: "70%",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsa laborum dignissimos provident asperiores? Delectus.",
  },
];

featuredProducts.forEach((element, index) => {
  element.addEventListener("click", () => {
    featuredProducts.forEach((el) => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");
    displaySelectedProduct(index);
  });
});

// stars.style.width = value.rating;
