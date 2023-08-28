const dataPeople = [
  {
    link: "https://www.pexels.com/photo/coupe-smiling-2230015/",
    src: "https://images.pexels.com/photos/2230015/pexels-photo-2230015.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "couple smiling in park",
    hover: "photo by Terrillo Walls",
  },
  {
    link: "https://www.pexels.com/photo/woman-riding-skateboard-at-the-road-1250643/",
    src: "https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "woman riding skateboard on the road",
    hover: "photo by Vidal Balielo Jr.",
  },
  {
    link: "https://www.pexels.com/photo/family-making-breakfast-in-the-kitchen-4259140/",
    src: "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "family-making-breakfast-in-the-kitchen",
    hover: "photo by August de Richelieu",
  },
  {
    link: "https://www.pexels.com/photo/a-couple-wearing-their-work-clothes-7217963/",
    src: "https://images.pexels.com/photos/7217963/pexels-photo-7217963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "a couple wearing their work clothes",
    hover: "photo by Blue Bird",
  },
];

const dataNature = [
  {
    link: "https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/",
    src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "person walking between green forest trees",
    hover: "photo by Luis del Río",
  },
  {
    link: "https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/",
    src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "scenic view of snow capped mountains during night",
    hover: "photo by stein egil liland",
  },
  {
    link: "https://www.pexels.com/photo/bird-s-eye-view-of-desert-1509582/",
    src: "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "bird's eye view of desert",
    hover: "photo by Walid Ahmad",
  },
  {
    link: "https://www.pexels.com/photo/lightning-strikes-2258536/",
    src: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "lightning strikes over town",
    hover: "photo by Frank Cone",
  },
];

const dataHistory = [
  {
    link: "https://www.pexels.com/photo/building-castle-figures-facade-36006/",
    src: "https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "building castle figures facade",
    hover: "photo by Pixabay",
  },
  {
    link: "https://www.pexels.com/photo/photography-of-opened-book-1172018/",
    src: "https://images.pexels.com/photos/1172018/pexels-photo-1172018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "photography of opened book",
    hover: "photo by Suzy Hazelwood",
  },
  {
    link: "https://www.pexels.com/photo/ancient-greek-temple-951531/",
    src: "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "ancient greek temple",
    hover: "photo by jimmy teoh",
  },
  {
    link: "https://www.pexels.com/photo/empty-cathedral-135018/",
    src: "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "empty cathedral",
    hover: "photo by Joshua",
  },
];

const peopleAnchors = document.querySelectorAll(".people a");
const peopleImages = document.querySelectorAll(".people img");

const natureAnchors = document.querySelectorAll(".people a");
const natureImages = document.querySelectorAll(".people img");

const historyAnchors = document.querySelectorAll(".people a");
const historyImages = document.querySelectorAll(".people img");

for (let index = 0; index < dataPeople.length; index++) {
  const element = dataPeople[index];
  peopleAnchors[index].href = element.link;
  peopleImages[index].src = element.src;
  peopleImages[index].alt = element.alt;
}
