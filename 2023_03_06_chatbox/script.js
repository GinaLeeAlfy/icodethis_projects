const agreeButton = document.querySelector("button");
const disclaimerEl = document.querySelector(".disclaimer");
const chatEl = document.querySelector(".chat");
const textChat = document.querySelector("textarea");
const sendButton = document.querySelector("#submit");
const section = document.querySelector("section");

agreeButton.addEventListener("click", () => {
  disclaimerEl.classList.toggle("visible");
  chatEl.classList.toggle("visible");
});

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  let text = textChat.value;
  if (text.length > 1) {
    let newMessage = document.createElement("div");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let messageText = document.createElement("div");
    newMessage.classList.add("message-container", "sent");
    imgContainer.classList.add("img-container");
    img.src =
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8MXwwfHx8Mg%3D%3D";
    img.alt = "Man with hat and gray shirt";
    imgContainer.append(img);
    messageText.classList.add("message-text");
    let splitText = text.split("\n");
    splitText.forEach((element) => {
      let pTag = document.createElement("p");
      pTag.innerHTML = element;
      messageText.append(pTag);
    });
    newMessage.append(imgContainer);
    newMessage.append(messageText);
    section.append(newMessage);
    newMessage.scrollIntoView();
    textChat.value = "";
  } else {
    return;
  }
});
