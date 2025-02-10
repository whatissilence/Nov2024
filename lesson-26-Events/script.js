'use strict';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  const red = randomIntFromInterval(0, 255);
  const green = randomIntFromInterval(0, 255);
  const blue = randomIntFromInterval(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}



const testElement = document.getElementById('test');

const handleMouseOver = function(event) {
  console.log('mouseout', event);
  event.target.style.backgroundColor = 'turquoise';
}

testElement.addEventListener('click', function(event) {
  console.log('click', event);
  testElement.removeEventListener('mouseout', handleMouseOver);
});


testElement.addEventListener('mouseover', function(event) {
  console.log('mouseover', event);
  event.target.style.backgroundColor = getRandomColor();
  if (event.shiftKey) {
    console.log('Я бачу ти натиснув ШИФТ!!!');
  }
});

testElement.addEventListener('mouseout', handleMouseOver);

// ===============================================
const inputElements = document.getElementsByClassName('my-input');

inputElements[0].addEventListener('keydown', function(event) {
  console.log('keydown', event);
  if (event.code !== 'KeyS') {
    event.stopPropagation();
  }
});

// document.body.addEventListener('keydown', function(event) {
//   console.log('BODY keydown!!!!', event.target);
// });


[...inputElements].forEach(input => input.addEventListener('change', function(event) {
  console.log('input', event.target.value, event.target);

  if (isNaN(event.target.value)) {
    event.target.style.borderColor = 'red';
    event.target.style.color = 'red';
  } else {
    event.target.style.borderColor = 'green';
    event.target.style.color = 'green';
  }
}));

// :::::::::::::::::::::::::::::::::::::::::::::::::

const clickableElements = document.querySelectorAll('.clickable');

[...clickableElements].forEach(elem => elem.addEventListener('click', function(event) {
  console.log('click', event.target, this, event.target === this);
}))


// :::::::::::::::::::::::::::::::::::::::::::::::::
const containerElement = document.getElementById('container');

containerElement.addEventListener('click', function(event) {

  // if (event.target.matches('#container>div')) {
  if (event.target.classList.contains('item')) {
    event.target.style.backgroundColor = getRandomColor();
  }

})

// :::::::::::::::::::::::::::::::::::::::::::::::::
const linkElement = document.getElementById('link');
linkElement.addEventListener('click', function(event) {
  event.target.innerText = event.target.innerText.toUpperCase();
  event.preventDefault();
  event.stopPropagation();
})


// :::::::::::::::::::::::::::::::::::::::::::::::::
function showError(container, errorMessage) {
  container.className = 'error';
  let msgElem = document.createElement('span');
  msgElem.className = 'error-message';
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  container.className = '';
  if (container.lastChild.className === 'error-message') {
    container.removeChild(container.lastChild)
  }
}

const formElement = document.getElementById('messageForm');
formElement.addEventListener('submit', function(event) {
  console.log('submit', event);
})

const buttonElement = document.getElementById('checkAndSend');
buttonElement.addEventListener('click', validate);

function validate(event) {
  let elems = formElement.elements;
  console.log(elems);

  resetError(elems.from.parentNode);
  if (!elems.from.value) {
    showError(elems.from.parentNode, ' Вкажіть від кого.');
  }

  resetError(elems.password.parentNode);
  if (!elems.password.value) {
    showError(elems.password.parentNode, ' Вкажіть пароль.');
  }
  else if (elems.password.value !== elems.password2.value) {
    showError(elems.password.parentNode, ' Паролі не співпадають.');
  }

  resetError(elems.to.parentNode);
  if (!elems.to.value) {
    showError(elems.to.parentNode, ' Вкажіть, куди.')
  }

  resetError(elems.message.parentNode)
  if (!elems.message.value) {
    showError(elems.message.parentNode, ' Відсутній текст.')
  }

  event.preventDefault();
}

// :::::::::::::::::::::::::::::::::::::::::::::::::




