import { mul } from './mod2.js'

console.log('HELLO FROM MODULE 1');

console.log('mult:', mul(5,2));

let counter = 1;

export function add(a, b) {
  console.log('Mod1', counter++);
  return a + b;
}