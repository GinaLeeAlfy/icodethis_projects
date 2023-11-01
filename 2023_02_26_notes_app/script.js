let sessionData = [
  {
    sessionTitle: "Intro",
    sessionNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque non ipsam id autem doloribus quae eveniet blanditiis. Aliquam, omnis voluptates. Labore aut iusto fuga exercitationem aperiam facere?\n\nEveniet blanditiis quos itaque, magnam cupiditate ullam! Dolor, fuga sequi eius doloremque, nostrum reiciendis fugiat quasi esse enim similique officiis labore qui magnam? Suscipit obcaecati, assumenda fugiat tenetur vitae aliquam. Ipsum ipsam atque, quas tenetur autem nemo molestias mollitia sapiente harum laboriosam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
  {
    sessionTitle: "Chapter 1",
    sessionNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque non ipsam id autem doloribus quae eveniet blanditiis. Aliquam, omnis voluptates. Labore aut iusto fuga exercitationem aperiam facere?\n\nEveniet blanditiis quos itaque, magnam cupiditate ullam! Dolor, fuga sequi eius doloremque, nostrum reiciendis fugiat quasi esse enim similique officiis labore qui magnam? Suscipit obcaecati, assumenda fugiat tenetur vitae aliquam. Ipsum ipsam atque, quas tenetur autem nemo molestias mollitia sapiente harum laboriosam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
  {
    sessionTitle: "Chapter 2",
    sessionNotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque non ipsam id autem doloribus quae eveniet blanditiis. Aliquam, omnis voluptates. Labore aut iusto fuga exercitationem aperiam facere?\n\nEveniet blanditiis quos itaque, magnam cupiditate ullam! Dolor, fuga sequi eius doloremque, nostrum reiciendis fugiat quasi esse enim similique officiis labore qui magnam? Suscipit obcaecati, assumenda fugiat tenetur vitae aliquam. Ipsum ipsam atque, quas tenetur autem nemo molestias mollitia sapiente harum laboriosam! Quisquam quibusdam tenetur earum, dignissimos ipsa iste, eius possimus distinctio ipsam magni recusandae repellendus cum facere!\n\nAtque at modi quidem culpa consectetur, dolore, vitae dolor fugiat aliquid quae, ut quisquam minus deserunt reiciendis recusandae voluptatum maxime deleniti iste libero corrupti ducimus sit fuga? Quas perspiciatis sunt quia, eligendi, officia exercitationem numquam similique, hic in deserunt natus voluptatum maiores ipsa dolorem? Error, assumenda suscipit? Labore nobis neque amet soluta natus eligendi, consectetur possimus assumenda cumque impedit laudantium culpa. Quidem sit adipisci animi. Assumenda quos omnis tenetur fugiat magnam culpa suscipit! Officiis voluptate ducimus veritatis! Ducimus eveniet expedita corrupti? Dolorem delectus corporis sequi mollitia, molestiae voluptates soluta commodi omnis pariatur id consectetur nemo sit laborum accusantium atque aliquam. Esse, quam excepturi et voluptatem deserunt tempora minima laudantium asperiores sunt quae veniam maxime!\n            ",
  },
];

const editButton = document.querySelector(".edit");
const maximizeButton = document.querySelector(".maximize");
const titleEl = document.querySelector("#title");
const sessionTitleEl = document.querySelector("#session-title");
const sessionNotesEl = document.querySelector("#session-notes");

const addSessionButton = document.querySelector(".add");
const sessionContainer = document.querySelector("ul");
let sessions = document.querySelector("li");
const sessionTemplate = document.querySelector(".clone");
