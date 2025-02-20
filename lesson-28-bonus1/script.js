
const myBigSquare = document.querySelector('.test');
const mySupButton = document.getElementById('mySuperButton');
const hiddenForSquare = document.getElementById('hiddenForSquare');


let buttonText = 'Start';




mySupButton.addEventListener('click', (event) => {
  switchButton();
  switchSquareRadius();
});

myBigSquare.addEventListener('click', (event) => {
  hiddenForSquare.focus();
  // if (event.target.classList.contains('rounded')) {
    switchButton();
    switchSquareRadius();
  // }
})


hiddenForSquare.addEventListener('keydown', (event) => {
  console.log('keydown', event);
})



function switchButton() {
  buttonText = (buttonText === 'Start') ? 'Stop' : 'Start';
  mySupButton.innerText = buttonText;
  mySupButton.classList.toggle('in-process');
}

function switchSquareRadius() {
  myBigSquare.classList.toggle('rounded');
}




// Аналог toggle
// if (mySupButton.classList.contains('in-process')) {
//   mySupButton.classList.remove('in-process');
// } else {
//   mySupButton.classList.add('in-process');
// }