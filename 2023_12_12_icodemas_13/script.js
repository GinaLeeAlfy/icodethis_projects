const openChatButton = document.querySelector(".chat-button");
const textChat = document.querySelector("#chat-text");
const sendButton = document.querySelector("#submit");
const section = document.querySelector("section");
const container = document.querySelector(".container");

openChatButton.addEventListener("click", () => {
  container.classList.toggle("visible-grid");
  if (openChatButton.innerHTML == "Open Chat") {
    openChatButton.innerHTML = "Close Chat";
  } else {
    openChatButton.innerHTML = "Open Chat";
  }
});

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const date = new Date();
  let hour = date.getHours();
  let meridiem;
  if (hour > 12) {
    meridiem = "PM";
    hour = hour - 12;
  } else if (hour === 12) {
    meridiem = "PM";
  } else if (hour === 0) {
    hour = 12;
    meridiem = "AM";
  } else if (hour < 12) {
    meridiem = "AM";
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let text = textChat.value;
  if (text.length > 1) {
    const newMessage = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const flexCol = document.createElement("div");
    const messageText = document.createElement("div");
    const sentInfo = document.createElement("div");

    newMessage.classList.add("message-container", "sent");
    imgContainer.classList.add("img-container");
    img.src = "https://icodethis.com/images/iCodeMas/cookie.png";
    img.alt = "Man with hat and gray shirt";
    imgContainer.append(img);
    flexCol.classList.add("flex-col");
    messageText.classList.add("message-text");
    sentInfo.classList.add("sent-info");
    const splitText = text.split("\n");
    splitText.forEach((element) => {
      const pTag = document.createElement("p");
      pTag.innerHTML = element;
      messageText.append(pTag);
    });
    sentInfo.innerHTML = `${hour}:${minutes} ${meridiem}`;
    flexCol.append(messageText);
    flexCol.append(sentInfo);
    newMessage.append(imgContainer);
    newMessage.append(flexCol);
    section.append(newMessage);
    newMessage.scrollIntoView();
    textChat.value = "";
  } else {
    return;
  }
});
