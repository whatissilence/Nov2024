'use strict';

export const secondInDay = 60 * 60 * 24;

export function checkWorking() {
  console.log('It works!');
}

export function myGreeting() {
  console.log(`${this.secondName}! ${this.name} ${this.secondName}! I'm ${this.age} years old.`);
}
