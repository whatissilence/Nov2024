import debounce from './debounce.js';
import throttle from './throttle.js';

let invalidFields = new Set();
invalidFields.add('username');
invalidFields.add('email');
invalidFields.add('password');
invalidFields.add('repeatPassword');

const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const submitButton = document.getElementById('submit');
const formElement = document.getElementById('form');
const passwordElement = document.getElementById('password');
const repeatPasswordElement = document.getElementById('repeatPassword');

const debouncedEmailChange = debounce(1000, onEmailChange);

updateDisabledSubmit();

usernameElement.addEventListener('input', onUsernameChange);
emailElement.addEventListener('input', debouncedEmailChange);
passwordElement.addEventListener('input', onPasswordChange);
repeatPasswordElement.addEventListener('input', onRepeatPasswordChange);
formElement.addEventListener('submit', onSubmit);

// Event listeners

function onUsernameChange() {
  console.log('onUsernameChange: ', usernameElement.value);

  updateFieldsValid(usernameElement, isUserNameValid, 'username');
  updateDisabledSubmit();
}

function onEmailChange() {
  console.log('onEmailChange: ', isEmailValid(emailElement.value), emailElement.value);

  updateFieldsValid(emailElement, isEmailValid, 'email');
  updateDisabledSubmit();
}

function onPasswordChange() {
  updateFieldsValid(passwordElement, isPasswordValid, 'password');
  updateDisabledSubmit();
}

function onRepeatPasswordChange() {
  console.log('onRepeatPasswordChange', repeatPasswordElement.value, passwordElement.value)
  if (repeatPasswordElement.value === passwordElement.value) {
    repeatPasswordElement.classList.remove('invalid');
    repeatPasswordElement.classList.add('valid');
    invalidFields.delete('repeatPassword');
  } else {
    repeatPasswordElement.classList.add('invalid');
    repeatPasswordElement.classList.remove('valid');
    invalidFields.add('repeatPassword');
  }

  updateDisabledSubmit();
}

function onSubmit(event) {
  console.log('onSubmit', invalidFields.size, invalidFields);
  if (invalidFields.size) {
    event.preventDefault();
    alert(`You can't submit form. Invalid fields: ${[...invalidFields].join(', ')}`);
  }
}


// Validators

// function receives text and returns boolean - true if email valid
function isEmailValid(email) {
  return email.includes('@') && email.includes('.');
}

function isUserNameValid(userName) {
  return userName.length > 5;
}

function isPasswordValid(password) {
  return password.length >= 8 && password.toLowerCase() !== password && password.toUpperCase() !== password;
}

// Updaters
function updateFieldsValid(element, validCallback, fieldName) {
  if (validCallback(element.value)) {
    element.classList.remove('invalid');
    element.classList.add('valid');
    invalidFields.delete(fieldName);
  } else {
    element.classList.add('invalid');
    element.classList.remove('valid');
    invalidFields.add(fieldName);
  }
}

function updateDisabledSubmit() {
  console.log('updateDisabledSubmit', invalidFields.size, invalidFields);

  if (invalidFields.size) {
    submitButton.setAttribute('disabled','disabled');
  } else {
    submitButton.removeAttribute('disabled');
  }
}

// =====================================================
// const debouncedMouseMove = debounce(250, onMouseMove);
//
// document.addEventListener('mousemove', (event) => {
//   debouncedMouseMove(event);
// })
//
// function onMouseMove(event) {
//   console.log('mousemove', event.clientX, event.clientY);
// }

const throttledMouseMove = throttle(2000, onMouseMove);

document.addEventListener('mousemove', (event) => {
  throttledMouseMove(event);
})

function onMouseMove(event) {
  console.log('mousemove', event.clientX, event.clientY);
}






