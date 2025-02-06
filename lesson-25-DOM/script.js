'use strict';

console.log(this);

localStorage.setItem('user', 'John Doe');
console.log(localStorage.getItem('user'));


let person = {
  name: 'John',
  email: 'john@gmail.com',
  password: 'password@gmail.com'
}
localStorage.setItem('user', JSON.stringify(person));

let personStr = localStorage.getItem('user');
console.log(JSON.parse(personStr));

let testSpanElement = document.getElementById('testSpan');
console.log(testSpanElement);

testSpanElement.style.backgroundColor = '#ff0000';
testSpanElement.setAttribute("name", "testSpanElement");

setInterval(() => {
  testSpanElement.classList.toggle('hidden');
}, 2000)

// HTML Collection
const paragraphElements = document.getElementsByClassName('simple-paragraph');
// const paragraphElementsArr = Array.from(paragraphElements);
const paragraphElementsArr = [...paragraphElements];

paragraphElementsArr.forEach(elem => elem.classList.add('success-text'));

paragraphElementsArr[paragraphElementsArr.length - 1].classList.add('strange-text');

document.getElementsByTagName('h1')[0].innerHTML='<i>Something else</i>';

console.log(document.querySelector('p.simple-paragraph > span'));

// switch dark mode on
//document.getElementsByTagName('body')[0].classList.toggle('darkmode')














