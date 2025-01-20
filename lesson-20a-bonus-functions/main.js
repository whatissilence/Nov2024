'use strict';
import {checkWorking, secondInDay, myGreeting} from './functions.js';

// console.log('Hello World', secondInDay);

checkWorking();

console.log(     contains('ahahahaha', 'ha')       );
console.log(     contains('Hello, world', 'world')       );
console.log(     contains('See you later', 'alligator', true)       );
// ====================================

// Уважно не забуваємо результат обробити. Бере тільки ті параметри, які очікує
// let searchResult = contains('aaaa', 'aa', 'bbbbbb', 'bb', 'cccccc');

let childAge = 3;

let anon = function() {
  console.log('Not Anonymous any more! Huraaah!', childAge + 5);
};

anon();

console.log('type of anon is:', anon);

// ====================================

// isCaseSensitive - параметр за замовчуванням - чи звертати увагу малі литери або великі
function contains(str, search, isCaseSensitive = false) {
  console.log('I\'m working here!', str, search, isCaseSensitive);
  if (str === '') {
    return false;
  }

  if (typeof search !== 'string') {
    return false;
  }

  if (isCaseSensitive) {
    return str.indexOf(search) !== -1;
  }

  return str.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}

// ====================================

// IIFE - Immediately Invoked Function Expression
// Функціональний вираз, який одразу викликається.
// Робимо анонімну функцію, беремо у дужки і одразу за допомогою () викликаємо
(function() {
  let myData = '5gb';

  console.log('I\'m TRUELY ANONYMOUS!');
})();

// ====================================
// ====================================
// ====================================
console.log('// ====================================')

const johnData = {
  name: 'John',
  secondName:'Wick',
  email: 'john@gmail.com',
  age: 30
};

function greetings(person) {
  const personInsideFunction = person


  console.log(`Hello, My name is ${person.name}! I'm ${person.age} years old.`);

  // personInsideFunction.age += 10;
  console.log(`In 2035 I will be ${person.age} years old.`);
}

greetings(johnData);
console.log(johnData.age)

// :::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::
console.log('// :::::::::::::::::::::::::::::::')

function logger(cback, message) {
  console.log('Logger says: ', cback(message));
}

function addColons(text) {
  return `::::: ${text} :::::`;
}

function addEquals(text) {
  return `===== ${text} =====`;
}

logger(addColons, 'Oleksii');
logger(addEquals, 'Yuriy');

johnData.gender = 'Male';
johnData.secretGreetings = myGreeting;

// console.log(johnData);
johnData.secretGreetings();

// *****************************
// *****************************
// *****************************
console.log('// *****************************');

const clientAges = [5, 19, 35, 27, 101, 89, 4, 2, 25, 17];

const childAges = clientAges.filter(isAgeUnder18);
console.log('Child ages cards:', childAges)

const insuranceAges = clientAges.filter(isAgeUnderInsurance);
console.log('Insurance ages cards:', insuranceAges)

function isAgeUnder18(age) {
  return age < 18;
}

function isAgeUnderInsurance(age) {
  return age > 80 || age < 28;
}

clientAges.forEach(function(age) {
  console.log(`===${age}===`);
});

const cardNumbers = clientAges.map(getCardNumber);
console.log('CardNumbers:', cardNumbers);

function getCardNumber(age) {
  return `0000 0000 0000 ${age}`;
}

