let errorIcon = document.querySelectorAll(".error-icon");
let firstName = document.querySelector(".input-firstName");
let lastName = document.querySelector(".input-lastName");
let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let form = document.querySelector(".login-form");
let firstNameErrorMsg = document.querySelector(".error.firstName");
let lastNameErrorMsg = document.querySelector(".error.lastName");
let emailErrorMsg = document.querySelector(".error.email");
let passwordErrorMsg = document.querySelector(".error.password");
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  if (firstName.value.length < 2) {
    shortInputError(0, firstNameErrorMsg, `First Name cannot be empty`);
  } else {
    errorIcon[0].classList.remove("active");
    firstNameErrorMsg.innerText = "";
  }

  if (lastName.value.length < 2) {
    shortInputError(1, lastNameErrorMsg, `Last Name cannot be empty`);
  } else {
    errorIcon[1].classList.remove("active");
    lastNameErrorMsg.innerText = "";
  }

  if (
    email.value.length < 6 ||
    (email.value.includes("@") !== true && email.value.length >= 6) ||
    email.value.includes("/")
  ) {
    shortInputError(2, emailErrorMsg, `Looks like this is not email`);
  } else {
    errorIcon[2].classList.remove("active");
    emailErrorMsg.innerText = "";
  }

  if (password.value.length < 2) {
    shortInputError(3, passwordErrorMsg, `Password cannot be empty`);
  } else {
    errorIcon[3].classList.remove("active");
    passwordErrorMsg.innerText = "";
  }
}
function shortInputError(value, element, text) {
  for (let i = 0; i < errorIcon.length; i++) {
    errorIcon[value].classList.add("active");
    element.innerText = text;
  }
}
