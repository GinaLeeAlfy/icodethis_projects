const save = document.querySelector("#save");

save.addEventListener("click", () => {
  if (!save.classList.contains("clicked")) {
    save.classList.add("clicked");
  } else save.classList.remove("clicked");
});

function displayText() {
  const password = document.querySelector("#pass");
  const eye = document.querySelector(".fa-regular");

  if (password.type == "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
}
