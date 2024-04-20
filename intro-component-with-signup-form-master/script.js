const form = document.querySelector(".container form");
const fname = document.querySelector("#first-name");
const fnameError = document.querySelector(".fname.error");
const lname = document.querySelector("#last-name");
const lnameError = document.querySelector(".lname.error");
const email = document.querySelector("#mail"); 
const emailError = document.querySelector(".email.error"); 
const pword = document.querySelector("#password");
const pwordError = document.querySelector(".pword.error");

const nameRegExp = /^[a-zA-Z]+$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwordRegExp = /^[a-zA-Z0-9]+$/;

function validateInput(input, error, regExp, errorMessage) {
  const isValid = input.value.length === 0 || regExp.test(input.value);
  if (isValid) {
    input.classList.remove("invalid");
    error.textContent = "";
    error.classList.remove("error", "active");
  } else {
    if (input.value.length === 0) {
      error.textContent = "This field is required";
    } else {
      error.textContent = errorMessage;
    }
    input.classList.add("invalid");
    error.classList.add("error", "active");
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateInput(fname, fnameError, nameRegExp, "First Name cannot be empty");
  validateInput(lname, lnameError, nameRegExp, "Last Name cannot be empty");
  validateInput(email, emailError, emailRegExp, "Looks like is not an email");
  validateInput(pword, pwordError, pwordRegExp, "Password cannot be empty");
});