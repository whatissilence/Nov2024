
console.log('start');

setTimeout(() => console.log('Timeout in 0s.'), 0);
setTimeout(() => console.log('Timeout in 2s.'), 2000);

let counter = 0;

const intervalId = setInterval(() => {
  console.log(`Interval 1s. Counter: ${counter}`)
  counter++

  if (counter === 5) {
    clearInterval(intervalId)
    console.log('Interval stopped after 5 iterations.')
  }
}, 1000);

Promise.resolve(123).then(() => {
  console.log('Promise resolved!')
})

console.log('end');