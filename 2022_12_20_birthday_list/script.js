const data = [
  { name: "Bertie Yates", age: 29 },
  { name: "Hester Hogan", age: 32 },
  { name: "Larry Little", age: 36 },
  { name: "Sean Walsh", age: 34 },
  { name: "Lola Gardner", age: 29 },
  { name: "First Last", age: 24 },
  { name: "Name End", age: 41 },
  { name: "Begin Name", age: 28 },
  { name: "First End", age: 37 },
];

const names = document.querySelectorAll(".name");
const ages = document.querySelectorAll(".info p:last-child");
const total = document.querySelector("h1");
const profiles = document.querySelectorAll(".profile");

for (let index = 0; index < profiles.length; index++) {
  const element = data[index];
  names[index].innerHTML = element.name;
  ages[index].innerHTML = element.age + " years old";
}

total.innerHTML = `${data.length} Birthdays Today`;
