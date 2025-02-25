
const smallElem = document.getElementById('small');

let isButtonHold = false;

let startSquareX;
let startSquareY;

let startMouseX;
let startMouseY;

smallElem.addEventListener('mousedown', (event) => {
  isButtonHold = true;
  startMouseX = event.clientX;
  startMouseY = event.clientY;
  startSquareX = smallElem.offsetLeft;
  startSquareY = smallElem.offsetTop;
})

smallElem.addEventListener('mousemove', (event) => {
  if (isButtonHold) {
    let deltaMouseX = event.clientX - startMouseX;
    let deltaMouseY = event.clientY - startMouseY;

    smallElem.style.left = startSquareX + deltaMouseX + 'px';
    smallElem.style.top = startSquareY + deltaMouseY + 'px';
  }
})

smallElem.addEventListener('mouseup', (event) => {
  isButtonHold = false;
})