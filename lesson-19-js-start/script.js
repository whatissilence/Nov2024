"use strict";


// const userName = 'Oleksii';
let age = '41';
//
// const friends = ['Yuri', 'Pavlo', 'Anna'];
//
// friends[3] = 'Serhii';
// console.log(friends);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john@doe.com',
//   password: '123456',
//   age: 30
// };
//
// person.firstName = 'Carl';
//
// Object.freeze(person);
// // person.address = 'Brooklin';
//
// console.log(person);
//
// age = +age;

// // delete friends[1];
//
// console.log(friends);
// console.log(friends[1]);
//
// console.log(userName[4]);

//  =============================================

// console.log('age changed:',  age % 2);
// console.log('original age',  age);
//
// const isAgeEven = age % 2 === 0;

// console.log('isAgeEven', NaN === NaN);
// console.log('isAgeEven');
//  =============================================
const nickFromServer = '';
const nickFromCookies = 'Oleksii';
const nickFromInput = '';

const balance = 0;
const balanceToShow = balance ?? 'No data about balance';

const actualNickName = nickFromServer || nickFromCookies || nickFromInput || (age = age + 5) || 'Stranger';
console.log(actualNickName, age);

const isLoggedIn = false;
const isAdmin = true;
const hasRightToEdit = true;

const canEditUsers = isLoggedIn && isAdmin && hasRightToEdit;
console.log(canEditUsers);

if (!canEditUsers) {
  // show error
}

const digit = 10;

if (digit === 15 || digit === 11117) {

}

//  =============================================
console.log( 'max', Math.max(11, 22, 33, 44, 55, 66, 77, 121, 44, 23, 456, 67, 33) );
console.log( 'min', Math.min(11, 22, 33, 44, 55, 66, 77, 121, 44, 23, 456, 67, 33) );
console.log( 'PI', Math.PI );
console.log( 'round', Math.round(45.51) ); // 46
console.log( 'ceil', Math.ceil(45.1) );  // 46
console.log( 'floor', Math.floor(45.999) );  // 45
console.log( '-floor', Math.floor(-45.999) );  // 45
console.log( 'floor *10 ', Math.floor(45.999 * 10) / 10 );  // 45.9
console.log( 'trunc', Math.trunc(45.999) );  // 45
console.log( '-trunc', Math.trunc(-45.999) );  // 45
console.log('pow', Math.pow(2, 4) ); //  16
console.log('**', 2 ** 4 ); //  16

console.log('random', Math.random() ); //  random from 0 to 0.99999999
console.log('random', Math.floor(Math.random() * 101) ); //  random from 0 to 100
//  =============================================

const firstName = 'Іван';
const lastName = 'Іва\'н\'енк\\о';
const fullName = 'Hello, my name is ' + firstName + ' ' + lastName + ', I\'m ' + age + ' years old.';
const fullName2 = `Hello, my name is ${firstName} ${lastName}, I\'m ${age} years old.`;
const fullName3 = `Hello, my name is ${firstName} ${lastName}, I\'m ${ Math.floor(Math.random() * 101) } years old.`;
console.log(fullName);
console.log(fullName2);
console.log(fullName3);
//  =============================================

console.log(fullName3.substring(10, 14));

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.substring(str.length - 9));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replaceAll('o', '000'));
console.log(str.split(' ').join('_'));
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'].join(' ');

// const doesContainFox = str.indexOf('fox') !== -1;
const doesContainFox = str.includes('fox');
const doesContainFoxAnyCase = str.toLowerCase().includes('FOX'.toLowerCase());
console.log('doesContainFox', doesContainFox);
console.log('doesContainFoxAnyCase', doesContainFoxAnyCase);
















