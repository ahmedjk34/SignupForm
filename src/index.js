//form validation =>
//inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const signup = document.getElementById("signup");
//validation function
function validate(input) {
  const errorMessage = input.nextElementSibling;
  input.addEventListener("input", (e) => {
    errorMessage.textContent = "";
    if (input.validity.tooShort) {
      errorMessage.textContent = ` The ${input.getAttribute(
        "id"
      )} is too short`;
    } else if (!input.validity.valid) {
      errorMessage.textContent = `Please enter a valid ${input.getAttribute(
        "id"
      )}`;
    }
  });
}
function confirmPassword(password, confirmPassword) {
  const errorMessage = confirmPassword.nextElementSibling;
  confirmPassword.addEventListener("input", (e) => {
    if (confirmPassword.value !== password.value) {
      errorMessage.textContent = "Please enter matching passwords";
    } else {
      errorMessage.textContent = "";
    }
  });
}
validate(nameInput);
validate(emailInput);
validate(passwordInput);
confirmPassword(passwordInput, confirmPasswordInput);
