import {syncPause, callbackPause, promisePause} from './pauses.js';


// EXAMPLE DON'T USE THIS:

// const parseResponse = (response) => {
//   return response.json();
// }
//
// const getTemperature = (parsedResponse) => {
//   return parsedResponse.main.temp;
// }
//
// const showTemperature = (temperature) => {
//   document.getElementById('temperature').innerHTML = temperature;
// }
//
// const errorCallback = (error) => {
//   console.log(error);
// }
// const finalCallback = () => {
//   document.getElementById('processing').classList.add('hidden');
// }
//
//
// document.getElementById('processing').classList.remove('hidden');
// const promise = fetch('http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
//
// promise.then(parseResponse)
//   .then(getTemperature)
//   .then(showTemperature)
//   .catch(errorCallback)
//   .finally(finalCallback)

// =====================================================
const weatherLink = 'http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19';


async function getWeather() {
  document.getElementById('processing').classList.remove('hidden'); // show Processing

  try {
    const data = await fetch(weatherLink).then(response => {
      if (!response.ok) {
        throw new Error('Запит не вдався: ' + response.statusText);
      }
      return response.json();
    });

    console.log(data);

    document.getElementById('temperature').innerHTML = data.main.temp;
  } catch (error) {
    console.log(error);
  } finally {
    document.getElementById('processing').classList.add('hidden'); // hide Processing
  }

}

getWeather();


console.log('After the Weather function');


(async function () {
const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Запит не вдався: ' + response.statusText);
    }
    return response.json(); // Парсинг тіла відповіді як JSON
  })
  .catch(error => console.log(error));

console.log('data', data)
})();

