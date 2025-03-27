"use strict";
// class Person {
//   constructor(
//     protected name: string,
//     public age: number,
//     private gender?: 'male' | 'female'
//   ) {}
//
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} I'm ${this.age} years old. I'm ${this.gender}`);
//   }
// }
//
// class Employee extends Person {
//   public skill: string;
//
//   constructor(
//      name: string,
//      age: number,
//      public position: string
//   ) {
//     super(name, age);
//     this.skill = '';
//   }
//
//   public getInfo() {
//     return {name: this.name};
//   }
// }
//
//
// const john = new Person('John', 37, 'male');
// john.sayHello();
//
// const steve = new Employee('Steve', 28, 'manager');
// steve.sayHello();
// console.log(steve.position);
// =====================================
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    if (!Object.keys(OrderStatus).includes(status)) {
        throw new Error(`Unknown status: ${status}`);
    }
    console.log(OrderStatus);
    return 'Some logic here';
}
//Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus('Delivered'));
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
        this.x = 0;
        this.y = 0;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}
class Circle {
    constructor(radius, lineWidth) {
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.name = 'Circle';
        this.x = 0;
        this.y = 0;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
const rect = new Rectangle(20, 40);
// console.log(rect.getArea());
const cir = new Circle(30, 2);
// console.log(cir.getArea());
const arr = [
    rect,
    cir,
];
arr.forEach((sh) => {
    console.log(`${sh.name}: ${sh.x}, ${sh.y} - ${sh.getArea()}`);
});
const rects = arr.filter((sh) => sh instanceof Rectangle);
// ===================================================
function plus(first, second) {
    return first + second;
}
console.log(plus(5, 8));
console.log(plus('aaaa', 'qqqqq'));
/*
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

*/ 
