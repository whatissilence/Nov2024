
let counter = 0;
const counterElement = document.getElementById('counter');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');
const button = document.getElementById('inc');

console.log(counterElement);

function plusCounterAndRefresh() {
  counter++;
  counterElement.innerText = counter;
  counterElement2.innerText = counter;
  counterElement3.innerText = counter;
}

button.addEventListener('click', plusCounterAndRefresh);