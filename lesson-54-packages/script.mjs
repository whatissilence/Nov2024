// const recursiveTimeout = () => {
//   console.log('Цей код виконується кожні 5 секунд', (new Date()).toISOString())
//   setTimeout(recursiveTimeout, 5000);
// }
//
// recursiveTimeout()


// =========================================

// function doSomething(digit) {
//   console.log('Цей код виконується', digit, '-', (new Date()).toISOString())
// }
//
// let interval = 5;
// const recursiveTimeout = () => {
//   doSomething(interval);
//
//   if (interval < 3600) { // росте до 1 години, а потім робить щось раз на годину
//     interval = interval * 2;
//   }
//
//   setTimeout(recursiveTimeout, interval * 1000);
// }
//
// recursiveTimeout();

// =========================================

import { weatherEventEmitter } from './timeoutEvent.js';
let weatherData = {
  temperature: 26,
}

console.log(weatherData);

setTimeout(() => weatherEventEmitter.emit('weatherChanged'), 3000);
setTimeout(() => weatherEventEmitter.emit('setNewWeather', 30, (new Date()).toISOString()), 10000);
