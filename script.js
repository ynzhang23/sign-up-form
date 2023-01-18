let passwordInput = document.querySelector('#password');
let confirmInput = document.querySelector('#confirm-password')
let input = document.querySelectorAll('input');
let passwordMessage = document.querySelector('#password-message');
let passwordValue;
let confirmValue;

passwordInput.addEventListener('keyup', toggleReadOnly);
confirmInput.addEventListener('keyup', toggleMessage);
passwordInput.addEventListener('keyup', toggleMessage);

// Enable user to re-enter password when password is valid
function toggleReadOnly() {
  passwordValue = document.querySelector('#password').value;
  if (passwordValue.length >= 8) {
    confirmInput.removeAttribute('readonly');
  } else {
    confirmInput.value = '';
    confirmInput.setAttribute('readonly', '');
  }
};

// Toggle password match message
function toggleMessage() {
  passwordValue = document.querySelector('#password').value;
  confirmValue = document.querySelector('#confirm-password').value;
  if (passwordValue == confirmValue && passwordValue.length > 0) {
    passwordMessage.setAttribute('hidden', '');
    confirmInput.classList.remove('unmatched');
    confirmInput.setCustomValidity("");
  } else if (passwordValue != confirmValue) {
    passwordMessage.removeAttribute('hidden', '');
    confirmInput.classList.add('unmatched');
    confirmInput.setCustomValidity("Invalid field.");
  }
}