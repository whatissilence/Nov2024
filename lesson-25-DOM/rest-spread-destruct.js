'use strict';

const userNames = ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro'];
let arr = [1,2,3,4,5,6,77,8,9,7,4];

console.log(Math.max(...arr));

function log(...paramArr) {
  console.log(paramArr);
}

log(1,2,3,4,5,6,77);

function logDividedFirstSecond(firstParam, secondParam, ...paramArr) {
  console.log('firstParam', firstParam);
  console.log('secondParam', secondParam);
  console.log(paramArr);
}

logDividedFirstSecond(2,3,5,6,'efsd','etttt','yyyy','uuuu','iiii');

const [first, second, third] = arr;
const [firstAgain, secondAgain, thirdAgain, ...restArr] = arr;

const arrCopy = [...arr];
const bigArr = [...arr, ...userNames];

arr = [...arr, ...userNames];

console.log(arr);

// ===================================

const personJohn = {
  name: 'John',
  email: 'john@gmail.com',
  password: 'passwordJohn',
  age: 35,
}

const defaultUser = {
  name: 'Default User',
  email: 'default@gmail.com',
  password: 'defaultPassword',
  age: 35,
}

const personJohnCopy = { ...personJohn };

const personMary = {
  ...defaultUser,
  age: 40,
  name: 'Mary'
}

let { age, name } = personMary;
console.log(age, name);












