
let userName: string = 'John Doe';
let age: string | number = 45;

age = Number('55');

let marks: (string | number)[] = [5, 5, 5, 4, 5, 5, 4, 'aaa'];

let letters: string[][] = [
  ['a'], ['b'], ['c'], ['d'], ['e']
];

type Student = [string, string, number, number, number, number];

let firstRow: Student = ['Oleksii', 'Fullstack', 2, 3, 2, 3 ];
let secondRow: Student = ['Oleksandr', 'Fullstack', 5, 5, 5, 5 ];

console.log(firstRow, secondRow);

console.log('Hello, ' + userName.toUpperCase(), 'next year you will be ' + (age + 1) );
console.log(marks)


function sum(a: number, b: number): number {
  return a + b;
}

// const sayHello =
//   (name: string, age: number): string => `Hello, ${name}, next year you will be ${age + 1}`;


// type User = {
//   name: string,
//   secondName?: string,
//   age?: number,
//   sayMyName?: (text: string) => string
// };

interface User {
  name: string,
  secondName?: string,
  age?: number,
  sayMyName?: (text: string) => string
}

function sayHello (user: User): string {
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
let resultFromServer: any = {
  age: 22,
}


const defaultUser: User  = {
  name: 'Stranger',
  age: 18,
  sayMyName: function(aaa: string) {
    return aaa;
  }
}

const user: User = {
  ...defaultUser,
  ...resultFromServer,
};

console.log(user);

// ======================================================

type Animal = {
  name: string,
  weight: number
}

type vetEntity = {
  place?: string,
  id: number,
}

type Patient = Animal & vetEntity;

const cat: Patient = {
  name: 'Tor',
  weight: 8,
  place: 'cage #8',
  id: 25,
}

console.log('Cat: ', cat);

const dog: Partial<Patient> = {
  weight: 6,
}

console.log('Dog: ', dog);

type StationarAnimal = Required<Patient>;

const owl: StationarAnimal = {
  name: 'Brunhilda',
  weight: 5,
  id: 77,
  place: 'cage #11',
}

console.log('Owl', owl);

let myStr: string[]; // Array<string>;

let myObj: Record<string, any>[];

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

enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

let movement: Direction = Direction.UP;

console.log(Direction);

function isMovingDown(direction: Direction): boolean {
  return direction === Direction.DOWN;
}

isMovingDown(movement);

let value: unknown = 'aaa';

if(typeof value === 'string') {
  console.log(value.toUpperCase());
} else if ( typeof value === 'number' ) {
  console.log(value.toFixed(2))
} else {
  console.log(value);
}


abstract class AbsAnimal {
  // Абстрактна властивість
  abstract species: string;

  // Конструктор
  constructor(public name: string) {}

  // Абстрактний метод
  abstract makeSound(): void;

  // Звичайний метод
  displayInfo() {
    console.log(`Це ${this.species}, його звати ${this.name}.`);
  }
}

class Dog extends AbsAnimal {
  species = 'собака';

  constructor(name: string) {
    super(name); // Викликаємо конструктор базового класу
  }

  // Реалізація абстрактного методу
  makeSound() {
    console.log("Гав!");
  }
}

const myDog = new Dog("Рекс");
myDog.displayInfo(); // Виведе: Це собака, його звати Рекс.
myDog.makeSound(); // Виведе: Гав!

