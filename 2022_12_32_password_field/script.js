const save = document.querySelector("#save");

save.addEventListener("click", () => {
  if (!save.classList.contains("clicked")) {
    save.classList.add("clicked");
  } else save.classList.remove("clicked");
});

function displayText() {
  const password = document.querySelector("#pass");

  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
