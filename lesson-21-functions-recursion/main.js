'use strict';

let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

console.log(myArr);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// let isOddNumber = function (elem) {
//   return elem % 2 === 1;
// }

let isOddNumber = (elem) => elem % 2 === 1;

console.log(  myArr.filter(isOddNumber) );

// let isMoreThanSeven = function (elem) {
//   return elem > 7 && elem % 2 === 1;
// }

let isMoreThanSeven = (elem) => (elem > 7 && elem % 2 === 1);


console.log(  myArr.filter(isMoreThanSeven) );

let isOddNumber1 = elem => elem % 2 === 1;
let isOddNumber2 = (elem, index, arr) => elem % 2 === 1;
let isOddNumber3 = (elem) => {
  console.log(elem);
  return elem % 2 === 1;
};
let isOddNumber4 = (elem) => ({name: 'Oleksii', element: elem});

console.log(myArr.map((elem,index) => ({elem: elem, index: index})));
console.log(   myArr.map(elem => elem ** 2)    );

const showEverything = (elem, index, array) => {
  console.log(elem, index, array);
  // array[index] = elem ** 2; // DON'T CHANGE PARAMETERS!!! NEVER!!!
};

myArr.forEach(showEverything);

function getMoreThanOrLessZero(compareNumber) {
  return function (number) {
    return number > compareNumber || number < 0;
  };
}

// const isOutOfWidth = function(displayWidth, currentX) {
//   return currentX > displayWidth || currentX < 0;
// }

const isOutOfWidth = getMoreThanOrLessZero(1024); // Карірування carrying
const isOutOfHeight = getMoreThanOrLessZero(798);

console.log(isOutOfWidth(55));
console.log(isOutOfWidth( 110));
console.log(isOutOfWidth( 220));
console.log(isOutOfWidth( 11245));
console.log(isOutOfWidth( 10));
console.log(isOutOfWidth( -20));

console.log(   getMoreThanOrLessZero(798)(220)   );

// ==============================================
// START
function isOdd(elem) {
  return elem % 2 === 1 || elem % 2 === -1; // альтернатива Math.abs(elem % 2) === 1
}

function myFunc(myElem) {
  return myElem < 0 && isOdd(myElem);
}

console.log('-3: ', myFunc(-3));

// 1. Обʼявив isOdd функцію, записав її в памʼять, нічого не викликав
// 2. Обʼявив myFunc функцію, записав її в памʼять, нічого не викликав
// 3. (строка 78) Викликаю myFunc з аргументом -3
// 4. Знайшов по імені функцію myFunc. Виділив памʼять під аргумент, назвав myElem, поклав -3 туди
// 5. Обчислюю myElem < 0. Виконую оператор "менше".Вийшло true.
// 6. Далі в мене йде і && тому обчислюю isOdd(myElem)
// 7. Викликаю функцію isOdd
// 8. Прийшов в функцію isOdd. Виділив памʼять під аргумент, назвав elem, поклав -3 туди
// 9. Обчислюю elem % 2, вийшло -1 (на початку 71 строки)
// 10. Виконую оператор === в виразі elem % 2 === 1. Вийшло false.
// 11. Йду далі по строці, бо в мене там або || і можливо що друга частина виразу буде true і тоді доведеться повернути true :)
// 12. Обчислюю elem % 2, вийшло -1 (в другій частині 71 строки)
// 13. Виконую оператор === в виразі elem % 2 === -1. Вийшло true.
// 14. Виконую оператор ||, виходить, що я маю повернути true з функції isOdd()
// 15. Повернувся до кінця 75 строки з true
// 16. Виконую оператор && - в мене true && true - результат true
// 17. Виконую return в 78 строку
// 18. Виконую метод log обʼєкту console. Виводжу в консоль текст '-3: ', виконую оператор кома і виводжу результат виконання myFunc true

const projectFolder = [
  {
    name: 'assets',
    content: [
      'logo.svg',
      {
        name: 'styles',
        content: [
          'style.css',
          'variables.css',
          {
            name: 'minified',
            content: [
              'style.min.css',
            ]
          }
        ]
      },
      'main-styles.css'
    ]
  },
  'index.html',
  'gulpfile.js',
  'main.js',
  '.gitignore',
  'package.json',
  {
    name: 'src',
    content: [
      'style.scss',
      '_common.scss'
    ]
  }
];


// folder -> projectFolder // deep = 0
// item -> { name: 'assets' }

    // folder -> assets.content - [] // deep = 1
    // item -> styles

        // folder styles.content // deep = 2
        // minified

            // folder minified.content // deep = 3

function showFolder(folder, deep = 0) { // folder -> projectFolder // deep = 0
  if(!Array.isArray(folder)) { // якщо folder не масив, виходимо з функції
    return;
  }

  folder.forEach(item => { // item -> 'main-styles.css'
    if (typeof item === 'string') {
      // Виводимо имʼя файлу
      console.log('    '.repeat(deep),  'file:', item);
    } else {
      // Маємо обробити папку
      console.log('    '.repeat(deep), 'folder:', item.name);
      // if (deep < 2) {
        showFolder(item.content, deep + 1);
      // }
    }
  })
}

showFolder(projectFolder);


// ==========================================

function showFolderContainer(folder, container, deep = 0) { // folder -> projectFolder // deep = 0
  if(!Array.isArray(folder)) { // якщо folder не масив, виходимо з функції
    return;
  }

  folder.forEach(item => { // item -> 'main-styles.css'
    if (typeof item === 'string') {
      // Виводимо имʼя файлу
      //console.log('    '.repeat(deep),  'file:', item);
      container.push({ text: 'file: ' + item, deep})
    } else {
      // Маємо обробити папку
      // console.log('    '.repeat(deep), 'folder:', item.name);
      container.push({ text: 'folder: ' + item.name, deep})
      showFolderContainer(item.content, container, deep + 1);
    }
  })
}

const contArr = [];
showFolderContainer(projectFolder, contArr);
console.log(contArr);

// console.log(contArr.sort((a,b) => a.deep - b.deep));









