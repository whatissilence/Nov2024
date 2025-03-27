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

enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}



function getOrderStatus(status: OrderStatus): string{

  if (!Object.keys(OrderStatus).includes(status)) {
    throw new Error(`Unknown status: ${status}`);
  }

  console.log(OrderStatus);

  return 'Some logic here';
}

//Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus('Delivered' as OrderStatus));

// Усі async функції завжди вертають проміс

// async function findMovie(searchKey: string): Promise<string> {
//   const movieData: any | undefined = await fetch(`?apikey=&s=${searchKey}`) // TODO Write type for any
//     .then(res => res.json())
//     .then(response => {
//       return response;
//     });
//
//   if (!movieData) {
//     return 'No movies found';
//   }
//
//   return movieData?.Search;
// }

// ===================================

interface ShapeInterface {
  x: number;
  y: number;
  name: string;
  getArea: () => number;
}

// interface ShapeInterface {
//   z: string;
// }

interface LineInterface extends ShapeInterface {
  lineWidth: number;
}

class Rectangle implements ShapeInterface {
  public name: string = 'Rectangle';
  public x: number = 0;
  public y: number = 0;

  constructor(public width: number, public height: number) {}

  getArea() {
    return this.width * this.height;
  }

  getPerimeter () {
    return (this.width + this.height) * 2;
  }
}

class Circle implements ShapeInterface, LineInterface {
  public name: string = 'Circle';
  public x: number = 0;
  public y: number = 0;

  constructor(public radius: number, public lineWidth: number) {}

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rect : Rectangle = new Rectangle(20, 40);
// console.log(rect.getArea());

const cir: Circle = new Circle(30, 2);
// console.log(cir.getArea());

const arr: ShapeInterface[] = [
  rect,
  cir,
];

arr.forEach((sh: ShapeInterface) => {
  console.log(`${sh.name}: ${sh.x}, ${sh.y} - ${sh.getArea()}`);
})

const rects: Rectangle[] = arr.filter((sh: ShapeInterface) => sh instanceof Rectangle);

// union
type NumOrStr = number | string;

// intersection
type NumAndString = number & string;

// alias
type Student = [string, string, number, number, number, number];

// ===================================================

function plus<T>(first: T, second: T ): T {
  return first as any + second as any;
}

console.log(plus<number>(5, 8));
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