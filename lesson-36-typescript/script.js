"use strict";
let userName = 'John Doe';
let age = 45;
age = Number('55');
let marks = [5, 5, 5, 4, 5, 5, 4, 'aaa'];
let letters = [
    ['a'], ['b'], ['c'], ['d'], ['e']
];
let firstRow = ['Oleksii', 'Fullstack', 2, 3, 2, 3];
let secondRow = ['Oleksandr', 'Fullstack', 5, 5, 5, 5];
console.log(firstRow, secondRow);
console.log('Hello, ' + userName.toUpperCase(), 'next year you will be ' + (age + 1));
console.log(marks);
function sum(a, b) {
    return a + b;
}
function sayHello(user) {
    if (user.age) {
        return `Hello, ${user.name}, next year you will be ${user.age + 1}`;
    }
    return `Hello, ${user.name}!`;
}
console.log(sayHello({
    name: 'Mary',
    secondName: 'Poppins'
}));
// pretend to be from server
let resultFromServer = {
    age: 22,
};
const defaultUser = {
    name: 'Stranger',
    age: 18,
    sayMyName: function (aaa) {
        return aaa;
    }
};
const user = Object.assign(Object.assign({}, defaultUser), resultFromServer);
console.log(user);
const cat = {
    name: 'Tor',
    weight: 8,
    place: 'cage #8',
    id: 25,
};
console.log('Cat: ', cat);
const dog = {
    weight: 6,
};
console.log('Dog: ', dog);
const owl = {
    name: 'Brunhilda',
    weight: 5,
    id: 77,
    place: 'cage #11',
};
console.log('Owl', owl);
let myStr; // Array<string>;
let myObj;
myObj = [
    {
        key: 5,
        str: 'string'
    },
    {
        aaa: 77,
        bbb: 55,
        ccc: 13
    },
];
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
let movement = Direction.UP;
console.log(Direction);
function isMovingDown(direction) {
    return direction === Direction.DOWN;
}
isMovingDown(movement);
let value = 'aaa';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
else if (typeof value === 'number') {
    console.log(value.toFixed(2));
}
else {
    console.log(value);
}
class AbsAnimal {
    // Конструктор
    constructor(name) {
        this.name = name;
    }
    // Звичайний метод
    displayInfo() {
        console.log(`Це ${this.species}, його звати ${this.name}.`);
    }
}
class Dog extends AbsAnimal {
    constructor(name) {
        super(name); // Викликаємо конструктор базового класу
        this.species = 'собака';
    }
    // Реалізація абстрактного методу
    makeSound() {
        console.log("Гав!");
    }
}
const myDog = new Dog("Рекс");
myDog.displayInfo(); // Виведе: Це собака, його звати Рекс.
myDog.makeSound(); // Виведе: Гав!
