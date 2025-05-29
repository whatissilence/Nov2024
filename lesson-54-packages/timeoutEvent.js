import { EventEmitter } from 'node:events'

export const weatherEventEmitter = new EventEmitter();

weatherEventEmitter.on('weatherChanged', () => {
  console.log('Get new weather');
})

weatherEventEmitter.on('weatherChanged', () => {
  console.log('Get another new weather');
})

weatherEventEmitter.on('setNewWeather', (newWeather, time) => {
  console.log('New weather is following: ', newWeather, time);
})
