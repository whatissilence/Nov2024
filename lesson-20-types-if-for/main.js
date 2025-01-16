'use strict';

console.log('qwertyuio'.split('').reverse().join(''));
const person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  password: 'password',
  age: 18,
};

if (person.age > 18) {
  console.log(`${person.firstName} ${person.lastName} can buy alcohol!`);
} else if (person.age === 18) {
  console.log(`${person.firstName} ${person.lastName} should wait a year! ALMOST!`);
} else {
  // меньше 18
  console.log(`${person.firstName} ${person.lastName} CANNOT buy alcohol!!!`);
}

if (person.name === 'John') {
  console.log('We don\'t like Johns in our bar!');
  console.log(`Come on Tuesday`);
}

const delivery = 'Nova poshta';
let message = '';

switch (delivery) {
  case 'Nova poshta':
    message = 'Відправимо навіть у вихідні';
    break;
  case 'Ukrposhta':
    message = 'Відправимо тільки по буднях';
    break;
  case 'Meest':
    message = 'Не працює до 1 лютого';
    break;
  default:
    message = 'Оберіть будь ласка доставку!';
}

console.log(message);

// ================
let helloMessage = person.name === 'Pavlo' ? 'Привіт, Павло!' : 'Жаль, що ти не Павло!';
console.log(helloMessage);

let greetingMessage = !!person.name ? `Hello, ${person.name}` : 'Please log in';
console.log(greetingMessage);

// ================
for (let i = 10; i >= 0; i--) {
  console.log('Index: ', i);
}


let myDigit = 7;
let guess = 5;
//
// while (guess !== myDigit) {
//   console.log('Спробуй ще', guess); // Виводить числа від 0 до 4
//   guess++; // Імітація того, що юзер вгадує наш номер
// }

console.log('Вгадав, то було: ', myDigit);

console.log('Гра з машиною ===============');
do {
  console.log('Вгадай число');
  guess = Math.floor(Math.random() * 11);
  console.log('Користувач ввів', guess);


  if (guess === myDigit) {
    console.log('Вгадав!!!!');
    // break;
  } else if (guess > myDigit) {
    console.log('Меньше!!!');
  } else {
    console.log('Більше!!!');
  }

} while (guess !== myDigit);

console.log('The End!');

console.log('Гра з машиною закінчилася ===============');

for (let i = 1; i < 30; i++) {
  console.log(i);

  if (i % 10 !== 0) {
    continue;
  }

  console.log('===Some serious operations for tens===');
}

// result = 243
// num = 3
// power = 5
// i = 5


function pow(num, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result = result * num;
  }

  return result;
}

let threePowerFive = pow(3, 5);
console.log('три в ступені пʼять буде', threePowerFive);

console.log('1**1 =',    pow(1, 1)     );
console.log('2**2 =',    pow(2, 2)     );
console.log('10**4 =',   pow(10, 4)    );





