import { BankAccount } from './BankAccount.js';
import { VipBankAccount } from './VipBankAccount.js';

function Wolf(name, height, furColor) {
  this.name = name;
  this.height = height;
  this.furColor = furColor || 'black';
}

Wolf.prototype.makeSound = function() {
  console.log(`${this.name}: Awoo!`);
}

Wolf.prototype.run = function() {
  console.log(`${this.name}: I'm running!`);
}

Wolf.prototype.jump = function() {
  console.log(`${this.name}: I'm jumping!`);
}

Wolf.prototype.eat = function() {
  console.log(`${this.name}: I'm eating!`);
}

// ===================================

const grey = new Wolf('Grey', 120, 'grey');
console.log(grey);
grey.makeSound();
grey.run();


const alice = new Wolf('Alice', 80, 'white');
console.log(alice);
console.log(alice instanceof Wolf);
alice.makeSound();
alice.run();

const stranger = new Wolf();
console.log(stranger );

// Dog ==========================

function Dog(name, height, furColor) {
  Wolf.call(this, name, height, furColor);
}

Dog.prototype = Object.create(Wolf.prototype);

Dog.prototype.makeSound = function() {
  console.log(`${this.name}: Woof!`);
}

const jack = new Dog('Jack', 75, 'brown');
jack.makeHighJump = function() {
  console.log(`${this.name}: Look how high I'm jumping!!!!!`);
}
console.log(jack);
jack.makeSound();
jack.makeHighJump();

const spike = new Dog('Spike', 120, 'red');
spike.makeSound();

// =============== Classes =====================
console.log('===================== Classes ==========================');



const johnAccount = new BankAccount('John Doe', 1000);

johnAccount.deposit(200);
johnAccount.showAccountDetails();
johnAccount.withdraw(1500);


const maryAccount = new VipBankAccount( 'Mary Smith', 50000);
maryAccount.showAccountDetails();
maryAccount.withdraw(50200);
maryAccount.showAccountDetails();
maryAccount.withdraw(500);
maryAccount.deposit(200);
maryAccount.showAccountDetails();

console.log(  BankAccount.getNextAccountNumber()  );

const helenAccount = new VipBankAccount('Helen Smith', 10000);
console.log(  VipBankAccount.getNextAccountNumber()  ); // VipBankAccount має доступ до номера, тому що його батько має

helenAccount.limit = 800;
helenAccount.limit = 7000; // Не поставиться, захищена змінна, ліміт

console.log('Ліміт Олени', helenAccount.limit);
console.log('Ліміт Мері', maryAccount.limit);
























