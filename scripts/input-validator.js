const mainForm = document.getElementById('main-form');
const inputs = document.querySelectorAll('.first-step-input');
const nameRx = RegExp('([a-zA-Z]{3,30}s*)+');
const emailRx = RegExp('^(.+)@(.+)$');
const phoneRx = RegExp('^09[0|1|2|3][0-9]{8}$');
function nextBtnHandler(e) {
  e.preventDefault();
  validateHandler(inputs[0], nameRx, 'Invalid name (too short or left empty)');
  validateHandler(inputs[1], emailRx, 'Invalid email address (or left empty)');
  validateHandler(inputs[2], phoneRx, 'Invalid phone number (or left empty)');
  inputs.forEach(input => {
    input.value = '';
  });
}
function validateHandler(input, regEx, errorMessage) {
  const error = input.nextElementSibling;
  if (!regEx.test(input.value)) {
    input.style.borderColor = 'red';
    error.textContent = errorMessage;
    error.style.display = 'block';
    return;
  } else {
    error.style.display = 'none';
  }
}
mainForm.addEventListener('submit', nextBtnHandler);
