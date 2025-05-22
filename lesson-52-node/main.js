import { add } from './mod1.js';
import { mul } from './mod2.js';
import { prettyShow } from 'test-module';
import { colonShow } from 'colon-print';


console.log('Sum:', add(5, 8));
console.log('Sum:', add(10, 20));
console.log('Sum:', add(100, 600));
console.log('Mul:', mul(100, 600));

prettyShow('Hello World!', 30);
colonShow('Another World!', 50);


const a = 5;

console.log('Result:', a * 25);

console.log(process.argv); // Якщо запустити отак: node main arg1 arg2 arg3 blahblahblah
// Тут будуть такі дані
//
//   [
//     'шлях до файла ноди, який виконується',
//     'шлях до js файла, який виконується',
//     'arg1',
//     'arg2',
//     'arg3',
//     'blahblahblah'
//   ]

console.log('==============================');
const nodeVersion = Number(process.version.replace('v', '').split('.')[0]);

if(nodeVersion < 22) {
  throw new Error('At least version 22 required')
}

console.log(nodeVersion, 'Ok!');

console.log(process.release);

console.log(Buffer.from('help', 'utf8'));
console.log(Buffer.from('абвг', 'utf8'));